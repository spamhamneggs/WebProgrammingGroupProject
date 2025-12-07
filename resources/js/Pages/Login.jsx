import { useState } from "react";

import { usePage } from "@inertiajs/react";

import Layout from "../Layouts/Layout";

export default function Login({ csrf_token }) {
  const { props } = usePage();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrf_token
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else if (data.error) {
          setErrors({ submit: data.error });
        }
      } else {
        // Success - redirect to home
        window.location.href = '/';
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-br from-earth-50 to-nature-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-nature-100">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-nature-800 font-display mb-2">Welcome Back</h1>
              <p className="text-nature-600">Log in to your SkillSwap account</p>
            </div>

            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-nature-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nature-700 text-earth-100 px-6 py-3 rounded-lg font-medium hover:bg-nature-800 transition-all shadow-lg shadow-nature-200 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-nature-600">
                Don't have an account? <a href="/register" className="text-nature-700 font-semibold hover:text-nature-800">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
