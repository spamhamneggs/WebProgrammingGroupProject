import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function Dashboard() {
    return (
        <Layout>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-nature-800 mb-4">Dashboard</h1>
                            <p className="text-nature-700">
                                Welcome to your dashboard! You're logged in to SkillSwap.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
