import { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";

import Layout from "../../Layouts/Layout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        post(route('login'), {
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
                            <h1 className="text-3xl font-bold text-nature-800 font-display mb-2">Welcome Back</h1>
                            <p className="text-nature-600">Log in to your SkillSwap account</p>
                        </div>

                        {status && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-600 text-sm">{status}</p>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
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

                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 text-nature-600 focus:ring-nature-500 border-nature-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-nature-700">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={processing || isSubmitting}
                                className="w-full bg-nature-700 text-earth-100 px-6 py-3 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {(processing || isSubmitting) ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-nature-600">
                                Don't have an account? <Link href={route('register')} className="text-nature-700 font-semibold hover:text-nature-800">Sign up</Link>
                            </p>

                            {canResetPassword && (
                                <p className="mt-3 text-nature-600">
                                    <Link
                                        href={route('password.request')}
                                        className="text-nature-700 font-semibold hover:text-nature-800"
                                    >
                                        Forgot your password?
                                    </Link>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
