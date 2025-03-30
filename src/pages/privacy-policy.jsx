// src/pages/privacy-policy.js
import Head from "next/head";
import CookiesPolicy from "../components/CookiesPolicy";

import Meta from "../components/Meta";

export default function Privacy() {
    return (
        <>
            <Meta
                title="Privacy Policy | How HealGuid Protects Your Personal Health Data"
                description="Your privacy matters. Discover how HealGuid safeguards your personal health information, maintains confidentiality, and securely connects you with trusted holistic practitioners."
                path="privacy-policy"
            />

            <main className="overflow-hidden">
                {/* <Header data={{ menus: menus, type: "Privacy" }} /> */}
                <CookiesPolicy />
            </main>
        </>
    );
}
