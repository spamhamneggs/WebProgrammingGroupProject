import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-nature-800">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-nature-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-nature-700 mb-2" htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                            errors.name ? 'border-red-500' : 'border-nature-200'
                        }`}
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus
                        autoComplete="name"
                    />

                    {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-nature-700 mb-2" htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                            errors.email ? 'border-red-500' : 'border-nature-200'
                        }`}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-nature-800">
                            Your email address is unverified.
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    route().post(route('verification.send'));
                                }}
                                className="rounded-md text-sm text-nature-700 underline hover:text-nature-900 focus:outline-none focus:ring-2 focus:ring-nature-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </button>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

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
