import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Your preferred accent color. Indigo is closest to Starlight’s defaults.
                accent: colors.gray,
                // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
                gray: colors.black,
            },
            fontFamily: {
                // Your preferred text font. Starlight uses a system font stack by default.
                //sans: ["Arial"', '"PT Sans"', '"Baskerville"'],
                sans: ['"PT Sans"', '"Atkinson Hyperlegible"'],
                // Your preferred code font. Starlight uses system monospace fonts by default.
                mono: ['"IBM Plex Mono"'],
            },
        },
    },
    plugins: [starlightPlugin()],
};
