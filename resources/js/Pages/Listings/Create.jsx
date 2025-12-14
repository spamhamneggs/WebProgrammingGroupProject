import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
    const { data, setData, post, processing, errors, transform } = useForm({
        title: '',
        description: '',
        type: 'offer',
        skill: '',
        in_exchange_for: '',
    });

    transform((data) => ({
        ...data,
        in_exchange_for: data.in_exchange_for.split(',').map(item => item.trim()).filter(item => item !== '')
    }));

    const submit = (e) => {
        e.preventDefault();
        post(route('listings.store'));
    };

    return (
        <Layout>
            <Head title="Create Listing" />
            
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6 text-nature-800">Create New Listing</h2>
                        
                        <form onSubmit={submit}>
                            {/* Title */}
                            <div className="mb-4">
                                <InputLabel htmlFor="title" value="Title" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            {/* Type */}
                            <div className="mb-4">
                                <InputLabel htmlFor="type" value="Type" />
                                <select
                                    id="type"
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    value={data.type}
                                    onChange={(e) => setData('type', e.target.value)}
                                    required
                                >
                                    <option value="offer">Offer (I can teach/do this)</option>
                                    <option value="request">Request (I want to learn/need this)</option>
                                </select>
                                <InputError message={errors.type} className="mt-2" />
                            </div>

                            {/* Skill Category */}
                            <div className="mb-4">
                                <InputLabel htmlFor="skill" value="Skill Category" />
                                <TextInput
                                    id="skill"
                                    type="text"
                                    value={data.skill}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('skill', e.target.value)}
                                    required
                                    placeholder="e.g. Web Development"
                                />
                                <InputError message={errors.skill} className="mt-2" />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                    id="description"
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    rows="4"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                ></textarea>
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            {/* In Exchange For */}
                            <div className="mb-6">
                                <InputLabel htmlFor="in_exchange_for" value="In Exchange For (comma separated)" />
                                <TextInput
                                    id="in_exchange_for"
                                    type="text"
                                    value={data.in_exchange_for}
                                    className="mt-1 block w-full"
                                    placeholder="e.g. Web Design, Coding Help, Cookies"
                                    onChange={(e) => setData('in_exchange_for', e.target.value)}
                                />
                                <p className="text-sm text-gray-500 mt-1">What would you like in return? Separate items with commas.</p>
                                <InputError message={errors.in_exchange_for} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Create Listing
                                </PrimaryButton>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </Layout>
    );
}
