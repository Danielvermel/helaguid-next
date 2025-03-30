import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Meta from "../components/Meta";

export default function NotFound() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex,follow" />
            </Head>

            <Meta
                title="Page Not Found | HealGuid - Return to Wellness"
                description="Oops! The page you're looking for doesn't exist. Let HealGuid guide you back to your wellness journey."
            />

            <main className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex flex-col items-center justify-center px-4 py-8">
                <div className="text-center max-w-md w-full">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <Image
                            src="/images/logos/healGuid.webp"
                            alt="HealGuid Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* 404 Heading */}
                    <h1 className="text-7xl md:text-9xl font-bold text-orange-500 mb-6 drop-shadow-md">404</h1>

                    {/* Illustration */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/videos/404/meditate-girl.gif"
                            alt="Person meditating, representing finding peace after being lost"
                            width={300}
                            height={300}
                            className="rounded-2xl max-h-72 object-cover"
                        />
                    </div>

                    {/* Error Messages */}
                    <div className="mb-10">
                        <p className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">
                            Oops! You've wandered off the wellness path.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 mb-6">
                            Don't worry, just like in holistic healing, sometimes we need to pause and redirect.
                        </p>
                    </div>

                    {/* Return Home Button */}
                    <Link
                        href="/"
                        className="inline-block bg-orange-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full 
                        transition duration-300 ease-in-out transform hover:scale-105 
                        focus:outline-none focus:ring-2 focus:ring-teal-500 
                        text-base md:text-lg shadow-md"
                        aria-label="Return to HealGuid Home Page"
                    >
                        Return to Wellness Journey
                    </Link>
                </div>
            </main>
        </>
    );
}
