import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <Layout>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-nature-800 mb-4">
                                Dashboard
                            </h1>
                            <p className="text-nature-700 mb-6">
                                Welcome to your dashboard! You're logged in to
                                SkillSwap.
                            </p>

                            {auth.user?.role === "admin" && (
                                <div className="bg-nature-100 border-l-4 border-nature-500 p-4 mb-6">
                                    <p className="text-nature-800 font-medium mb-2">
                                        Admin Dashboard
                                    </p>
                                    <p className="text-nature-700 mb-4">
                                        As an admin, you have special privileges
                                        to manage users and content.
                                    </p>
                                    <a
                                        href="/admin/users"
                                        className="inline-block bg-nature-600 hover:bg-nature-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                                    >
                                        Manage Users
                                    </a>
                                </div>
                            )}

                            <div className="mt-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Quick Links
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <a
                                        href="/profile"
                                        className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition duration-300 border border-gray-200"
                                    >
                                        <h3 className="font-medium text-gray-800">
                                            Profile
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Update your personal information
                                        </p>
                                    </a>

                                    <a
                                        href={route('listings.create')}
                                        className="bg-nature-50 hover:bg-nature-100 p-4 rounded-lg transition duration-300 border border-nature-200"
                                    >
                                        <h3 className="font-medium text-nature-800">
                                            Create Listing
                                        </h3>
                                        <p className="text-sm text-nature-600 mt-1">
                                            Post a new offer or request
                                        </p>
                                    </a>

                                    {auth.user?.role === "admin" && (
                                        <a
                                            href="/admin/users"
                                            className="bg-nature-100 hover:bg-nature-200 p-4 rounded-lg transition duration-300 border border-nature-200"
                                        >
                                            <h3 className="font-medium text-nature-800">
                                                Manage Users
                                            </h3>
                                            <p className="text-sm text-nature-600 mt-1">
                                                View and manage all users
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
