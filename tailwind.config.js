/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};
