/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tech: {
                    bg: '#112250',
                    primary: '#E0C68F',
                    secondary: '#3C5D7D',
                    surface: '#F5F0E9',
                    accent: '#D3C9C1',
                },
                artisan: {
                    bg: '#33352C', // Deepwood Shade
                    primary: '#F5F5D3', // Fern Whisper
                    secondary: '#BB8954', // Earthy Drift
                    surface: '#4C2B12', // Timber Breeze
                    accent: '#798262', // Canopy Green
                    forest: '#7F5235', // Forest Floor (extra color from palette)
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                chango: ['Chango', 'cursive'],
                rajdhani: ['Rajdhani', 'sans-serif'],
                'space-mono': ['"Space Mono"', 'monospace'],
            },
            backgroundImage: {
                'tech-gradient': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
                'artisan-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Placeholder texture
                'tech-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Placeholder texture
            }
        },
    },
    plugins: [],
}
