import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-nature-800">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-nature-600">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <label
                        htmlFor="current_password"
                        className="block text-sm font-medium text-nature-700 mb-2"
                    >
                        Current Password
                    </label>

                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                            errors.current_password ? 'border-red-500' : 'border-nature-200'
                        }`}
                        autoComplete="current-password"
                    />

                    {errors.current_password && (
                        <p className="text-red-600 text-sm mt-1">{errors.current_password}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-nature-700 mb-2"
                    >
                        New Password
                    </label>

                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                            errors.password ? 'border-red-500' : 'border-nature-200'
                        }`}
                        autoComplete="new-password"
                    />

                    {errors.password && (
                        <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-nature-700 mb-2"
                    >
                        Confirm Password
                    </label>

                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                            errors.password_confirmation ? 'border-red-500' : 'border-nature-200'
                        }`}
                        autoComplete="new-password"
                    />

                    {errors.password_confirmation && (
                        <p className="text-red-600 text-sm mt-1">{errors.password_confirmation}</p>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-nature-700 text-earth-100 px-6 py-2.5 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {processing ? 'Saving...' : 'Save'}
                    </button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-nature-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
