/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'gel-blue': 'var(--gel-color-blue)',
                'gel-blue-dark': 'var(--gel-color-blue-dark)',
                'gel-gray': 'var(--gel-color-gray)',
                'gel-gray-light': 'var(--gel-color-gray-light)',
                'gel-gray-lighter': 'var(--gel-color-gray-lighter)',
                'gel-purple': 'var(--gel-color-purple)',
                'gel-brown': 'var(--gel-color-brown)',
                'gel-red': 'var(--gel-color-red)',
                'gel-red-dark': 'var(--gel-color-red-dark)',
                'gel-red-light': 'var(--gel-color-red-light)',
                'gel-green': 'var(--gel-color-green)',
                'gel-green-dark': 'var(--gel-color-green-dark)',
                'gel-yellow': 'var(--gel-color-yellow)',
            },
        },
    },
    plugins: [],
};
