import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import Layout from "../../Layouts/Layout";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        post(route('password.email'), {
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
                            <h1 className="text-3xl font-bold text-nature-800 font-display mb-2">Forgot Password?</h1>
                            <p className="text-nature-600">Enter your email to reset your password</p>
                        </div>

                        {status && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-600 text-sm">{status}</p>
                            </div>
                        )}

                        <div className="mb-6 text-sm text-nature-700">
                            Forgot your password? No problem. Just let us know your email
                            address and we will email you a password reset link that will
                            allow you to choose a new one.
                        </div>

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

                            <button
                                type="submit"
                                disabled={processing || isSubmitting}
                                className="w-full bg-nature-700 text-earth-100 px-6 py-3 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {(processing || isSubmitting) ? 'Sending...' : 'Email Password Reset Link'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-nature-600">
                                <Link href={route('login')} className="text-nature-700 font-semibold hover:text-nature-800">Back to login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
