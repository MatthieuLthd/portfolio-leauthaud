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
                    bg: '#1d341eff', // Deepwood Shade
                    primary: '#bfb15eff', // Fern Whisper
                    secondary: '#e1ab72ff', // Earthy Drift
                    surface: '#a0291fff', // Timber Breeze
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
