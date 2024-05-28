/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'translucent-red': '#dc35454d',
                'bright-red': '#dc3545',
                'translucent-gray-red': '#8a8787cc',
                'translucent-black': '#0000002b',
            },
            spacing: {
                'screen-30': '30vh',
                'screen-50': '50vh',
                'screen-70': '70vh',
            },
            backgroundImage: {
                logo: 'url(./hra-logo.jpg)',
            },
            keyframes: {
                glide: {
                    '100%': { 'background-position-x': '100%' },
                },
            },
            animation: {
                glide: 'glide 20s linear infinite alternate',
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
                'custom-black': '2px 0 5px rgb(var(--textshadow-black))',
                'custom-white': '0 0.5px 1px rgb(var(--textshadow-white))',
            },
            gridTemplateRows: {
                auto: 'auto',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
