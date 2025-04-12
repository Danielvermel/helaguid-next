// src/pages/_app.js
import { useEffect } from "react";
import "../styles/global.css";

// This component initializes our Google Analytics and other tracking
function initializeAnalytics() {
    if (typeof window !== "undefined") {
        // Google Tag Manager initialization code similar to what you have in index.html
        const loadGTM = () => {
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l !== "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-K476PRB8");
        };

        // HotJar initialization
        (function (c, s, q, u, a, r, e) {
            c.hj =
                c.hj ||
                function () {
                    (c.hj.q = c.hj.q || []).push(arguments);
                };
            c._hjSettings = { hjid: a };
            r = s.getElementsByTagName("head")[0];
            e = s.createElement("script");
            e.async = true;
            e.src = q + c._hjSettings.hjid + u;
            r.appendChild(e);
        })(window, document, "https://static.hj.contentsquare.net/c/csq-", ".js", 5350678);

        // Load GTM after LCP
        if ("PerformanceObserver" in window) {
            const observer = new PerformanceObserver((entryList, obs) => {
                if (entryList.getEntries().length > 0) {
                    loadGTM();
                    obs.disconnect();
                }
            });
            observer.observe({ type: "largest-contentful-paint", buffered: true });
        } else {
            window.addEventListener("load", loadGTM);
        }
    }
}

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        initializeAnalytics();
    }, []);

    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-K476PRB8"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
