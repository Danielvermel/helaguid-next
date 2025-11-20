import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-GB">
            <Head>
                {/* Preconnect hints for faster DNS/TLS */}
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                {/* Remove if you do NOT load Facebook Pixel anywhere */}
                <link rel="preconnect" href="https://connect.facebook.net" />

                {/* existing comments or tags below */}
                {/* <meta charSet="utf-8" /> */}
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

                {/* Google Consent Mode - Default Consent Script */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'analytics_storage': 'denied',
                            'functionality_storage': 'denied',
                            'personalization_storage': 'denied',
                            'security_storage': 'granted',
                            'wait_for_update': 2000
                        });
                        gtag('set', 'ads_data_redaction', true);
                        gtag('set', 'url_passthrough', true);
                        `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
