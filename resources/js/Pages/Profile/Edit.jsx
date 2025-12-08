import { Head } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <Layout>
            <Head title="Profile" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-nature-800 mb-6">Profile Settings</h1>

                            <div className="space-y-6">
                                <div className="bg-white p-6 shadow-sm rounded-lg border border-gray-200">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </div>

                                <div className="bg-white p-6 shadow-sm rounded-lg border border-gray-200">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>

                                <div className="bg-white p-6 shadow-sm rounded-lg border border-gray-200">
                                    <DeleteUserForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
