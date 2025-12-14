import { useState } from "react";

import {
    Menu,
    Plus,
    RefreshCw,
    Telescope,
    User,
} from "lucide-react";

import {
    Link,
    usePage,
} from "@inertiajs/react";

export default function Layout({ children }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <nav className="fixed w-full z-50 transition-all duration-300">
                <div className="absolute inset-0 bg-earth-100/90 backdrop-blur-md border-b border-nature-200 shadow-sm">
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-between items-center h-20">
                        {/* Left Section: Logo and Explore Listings */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="shrink-0 flex items-center gap-2"
                            >
                                <div className="w-10 h-10 bg-nature-700 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-earth-100">
                                    <RefreshCw size={24} />
                                </div>
                                <span className="font-display font-bold text-2xl tracking-tight text-nature-800">
                                    SkillSwap
                                </span>
                            </Link>

                            {/* Explore Listings (Desktop) */}
                            <Link
                                href="/listings"
                                className="text-nature-700 hover:text-nature-500 font-medium transition-colors hidden md:block"
                            >
                                Explore Listings
                            </Link>
                        </div>

                        {/* Right Section: Auth/User Menu */}
                        <div className="hidden md:flex items-center space-x-8">

                            {auth.user
                                ? (
                                    // User is logged in - show profile menu with click-based dropdown
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href="/listings/create"
                                            className="flex items-center gap-2 bg-nature-600 text-white hover:bg-nature-700 px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
                                        >
                                            <Plus size={18} />
                                            <span>Create Listing</span>
                                        </Link>
                                        <div className="relative">
                                            {/* Dropdown button */}
                                            <button
                                                onClick={() =>
                                                    setUserMenuOpen(
                                                        !userMenuOpen
                                                    )}
                                                className="flex items-center gap-2 text-nature-700 hover:text-nature-500 font-medium transition-colors px-3 py-2"
                                                aria-haspopup="true"
                                                aria-expanded={userMenuOpen}
                                            >
                                                <User size={18} />
                                                <span>{auth.user.name}</span>
                                                <svg
                                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                                        userMenuOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    >
                                                    </path>
                                                </svg>
                                            </button>

                                            {/* Dropdown menu - only show when userMenuOpen is true */}
                                            {userMenuOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-earth-200 overflow-hidden">
                                                    <Link
                                                        href="/dashboard"
                                                        className="block w-full px-5 py-3 text-sm text-nature-700 hover:bg-earth-100 text-left"
                                                        onClick={() =>
                                                            setUserMenuOpen(
                                                                false
                                                            )}
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        href="/profile"
                                                        className="block w-full px-5 py-3 text-sm text-nature-700 hover:bg-earth-100 text-left"
                                                        onClick={() =>
                                                            setUserMenuOpen(
                                                                false
                                                            )}
                                                    >
                                                        Profile
                                                    </Link>
                                                    <Link
                                                        href="/logout"
                                                        method="post"
                                                        as="button"
                                                        className="block w-full px-5 py-3 text-sm text-red-600 font-bold hover:bg-red-50 text-left cursor-pointerWhy"
                                                        onClick={() =>
                                                            setUserMenuOpen(
                                                                false
                                                            )}
                                                    >
                                                        Logout
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                                : (
                                    // User is not logged in - show auth buttons
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href="/login"
                                            className="text-nature-700 font-semibold hover:text-nature-900 transition-colors px-4 py-2 rounded-lg hover:bg-nature-50"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="bg-nature-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-nature-800 transition-all shadow-md hover:shadow-lg"
                                        >
                                            Join Now
                                        </Link>
                                    </div>
                                )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-nature-800 hover:text-nature-600 focus:outline-none"
                            >
                                <Menu size={32} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-earth-100 border-t border-nature-200 absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                            <a
                                href="/listings"
                                className="flex items-center gap-2 py-2 text-base font-medium text-nature-700 hover:bg-nature-50 rounded-md"
                            >
                            <Telescope size={18}/>
                                Explore Listings
                            </a>

                            {auth.user
                                ? (
                                    // User is logged in - show user menu
                                    <>
                                    <Link
                                        href="/listings/create"
                                        className="text-nature-700 font-bold hover:bg-nature-50 rounded-md py-2 transition-colors flex items-center gap-2"
                                        onClick={() =>
                                            setMobileMenuOpen(false)}
                                    >
                                        <Plus size={18} />
                                        Create Listing
                                    </Link>
                                    <div className="pt-4 border-t border-nature-200 flex flex-col gap-3">
                                        <Link
                                            href="/dashboard"
                                            className="text-nature-700 hover:bg-nature-50 rounded-md py-2 transition-colors"
                                            onClick={() =>
                                                setMobileMenuOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/profile"
                                            className="text-nature-700 hover:bg-nature-50 rounded-md py-2 transition-colors"
                                            onClick={() =>
                                                setMobileMenuOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="text-red-600 font-bold bg-red-50 rounded-md py-2 transition-colors"
                                            onClick={() =>
                                                setMobileMenuOpen(false)}
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                    </>
                                )
                                : (
                                    // User is not logged in - show auth buttons
                                    <div className="pt-4 border-t border-nature-200 flex flex-col gap-3">
                                        <Link
                                            href="/login"
                                            className="block text-center text-nature-700 font-bold hover:bg-nature-50 rounded-md py-2 transition-colors"
                                            onClick={() =>
                                                setMobileMenuOpen(false)}
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block text-center bg-nature-700 text-white px-4 py-3 rounded-lg hover:bg-nature-800 transition-colors"
                                            onClick={() =>
                                                setMobileMenuOpen(false)}
                                        >
                                            Join Now
                                        </Link>
                                    </div>
                                )}
                        </div>
                    </div>
                )}
            </nav>

            {/* Page Content */}
            <main className="flex-1 pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-nature-900 text-nature-200 pt-16 pb-8 border-t border-nature-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div className="col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <RefreshCw
                                    size={24}
                                    className="text-nature-300"
                                />
                                <span className="font-display font-bold text-xl text-earth-100">
                                    SkillSwap
                                </span>
                            </div>
                            <p className="text-sm text-nature-400 leading-relaxed">
                                Connecting talent, building community, and
                                empowering growth through the power of exchange.
                            </p>
                        </div>

                        <div className="text-right justify-self-end-safe">
                            <h4 className="text-earth-100 font-bold mb-4">
                                Platform
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-nature-300 transition-colors"
                                    >
                                        How it Works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-nature-300 transition-colors"
                                    >
                                        Explore Listings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-nature-300 transition-colors"
                                    >
                                        Trust & Safety
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-right justify-self-end-safe">
                            <h4 className="text-earth-100 font-bold mb-4">
                                Community
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-nature-300 transition-colors"
                                    >
                                        Success Stories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-nature-300 transition-colors"
                                    >
                                        SDG 17 Initiative
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-nature-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-nature-500">
                        <p>
                            &copy; {new Date().getFullYear()}{" "}
                            SkillSwap. All rights reserved.
                        </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-nature-300">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-nature-300">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
