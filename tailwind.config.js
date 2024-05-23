/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'translucent-red': '#dc35454d',
                'bright-red': '#dc3545',
            },
        },
    },
    plugins: [],
}
