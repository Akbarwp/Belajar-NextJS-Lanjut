import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'dark-blue': '#06142E',
                'blue': '#1B3358',
                'dark-purple': '#473E66',
                'purple': '#BD83B8',
                'bone-pink': '#F5D7DB',
                'orange': '#F1916D',
            }
        },
    },
    plugins: [
        require("daisyui")
    ],
}
export default config
