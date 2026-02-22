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
                    bg: '#284139',
                    primary: '#809076',
                    secondary: '#F8D794',
                    surface: '#ad6c3c',
                    accent: '#111A19',
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
