import { useState } from "react";

import {
    Link,
    useForm,
} from "@inertiajs/react";

import Layout from "../../Layouts/Layout";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        post(route('register'), {
            onSuccess: () => setIsSubmitting(false),
            onError: () => setIsSubmitting(false),
        });
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-earth-50 to-nature-50 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-nature-100">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-nature-800 font-display mb-2">Create Account</h1>
                            <p className="text-nature-600">Join the SkillSwap community today</p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-nature-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Your full name"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                                        errors.name ? 'border-red-500' : 'border-nature-200'
                                    }`}
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-nature-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                                        errors.email ? 'border-red-500' : 'border-nature-200'
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-nature-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                                        errors.password ? 'border-red-500' : 'border-nature-200'
                                    }`}
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-nature-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm password"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-all bg-earth-50 text-nature-900 placeholder-nature-400 ${
                                        errors.password_confirmation ? 'border-red-500' : 'border-nature-200'
                                    }`}
                                />
                                {errors.password_confirmation && (
                                    <p className="text-red-600 text-sm mt-1">{errors.password_confirmation}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing || isSubmitting}
                                className="w-full bg-nature-700 text-earth-100 px-6 py-3 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {(processing || isSubmitting) ? 'Creating account...' : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-nature-600">
                                Already have an account? <Link href={route('login')} className="text-nature-700 font-semibold hover:text-nature-800">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
