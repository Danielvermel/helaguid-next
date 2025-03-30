const CookiesPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookies and Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Use of Cookies</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We use <span className="font-semibold">Google Tag Manager</span> to track visitors and gather
                        insights about website usage. This helps us understand how people interact with our platform,
                        enabling us to improve our services and enhance your experience.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Newsletter Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                        When you subscribe to our newsletter, we securely save your information. This allows us to keep
                        you updated with the latest news and send periodic newsletters. Your information is used solely
                        for these purposes and will not be shared with third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Managing Your Preferences</h2>
                    <p className="text-gray-600 leading-relaxed">
                        You have the option to manage your cookie preferences or unsubscribe from our newsletter at any
                        time. Please feel free to reach out to us if you have any concerns or questions about your data.
                    </p>
                </section>

                <footer className="mt-12 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} HealGuid. All Rights Reserved.
                </footer>
            </div>
        </div>
    );
};

export default CookiesPolicy;
