/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Broader pattern to include all src files
    ],
    theme: {
        extend: {
            screens: {
                xs: "320px",
            },
            colors: {
                //  Primary Colors
                // p1: "#1A7C7F",
                p1: "#006D77",
                p2: "#006d77",
                p3: "#2d2d34",

                // Secondary Colors
                s1: "#ff8c42",
                s2: "ffc09a",
                s3: "#e4f577",
                s4: "#1959AD",
                s5: "#f8eb7c",

                // background Colors
                b1: "#f6f4f3",
                b2: "#ffffff",
                b3: "#f2f7f6",
                b4: "#fdfaed",
                b5: "#fffae1",
                b6: "#f3f8f8",
                b7: "#f3f0ff",
                b8: "#c3fec9",
                b9: "#e3f578",
                b10: "#fcfdf8",
                b11: "#e5f0ed",
                b12: "#fcf6ef",
                b13: "#FFFDF7",

                //  Extra Colors
                e1: "#fff8ed",
                e2: "#f6f4f3",

                black: {
                    DEFAULT: "#000000",
                    100: "#05091D",
                },
            },

            letterSpacing: {
                1: "0em",
                2: "0.0005em",
                3: "0.0009em",
                4: "0.0025em",
                5: "0.05em",
            },

            boxShadow: {
                100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
                200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
                300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
                400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
                500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                roman: ["Times New Roman", "Times", "ui-serif", "Georgia", "serif"],
                arial: ["Arial", "Helvetica", "sans-serif"],
            },
            transitionProperty: {
                borderColor: "border-color",
            },
            spacing: {
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "3/20": "15%",
                "7/20": "35%",
                "9/20": "45%",
                "11/20": "55%",
                "13/20": "65%",
                "15/20": "75%",
                "17/20": "85%",
                "19/20": "95%",
                22: "88px",
                100: "100px",
                512: "512px",
                330: "330px",
                388: "388px",
                400: "400px",
                440: "440px",
                550: "550px",
                640: "640px",
                960: "960px",
                1230: "1230px",
            },
            zIndex: {
                1: "1",
                2: "2",
                4: "4",
            },
            lineHeight: {
                12: "48px",
            },
            borderRadius: {
                14: "14px",
                20: "20px",
                40: "40px",
                half: "50%",
                "7xl": "40px",
            },
            flex: {
                50: "0 0 50%",
                320: "1px 0 320px",
                300: "0 0 300px",
                540: "0 0 540px",
                280: "0 0 280px",
                256: "0 0 256px",
                100: "0 0 100%",
            },
        },
    },
    plugins: [],
};
