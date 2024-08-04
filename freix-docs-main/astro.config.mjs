import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Freix',
            logo: {
                light: './src/assets/freix-150x150.png',
                dark: './src/assets/freix-dark-150x150.png',
            },
            customCss: [
                './src/tailwind.css',
                './src/styles/katex.css',
                './src/styles/index.css',
            ],
            social: {
                github: 'https://github.com/hackfest-dev/HF24-svelte-2',
            },
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 4,
            },
            sidebar: [
                {
                    label: 'Home',
                    link: '/',
                },
                {
                    label: 'About',
                    autogenerate: {
                        directory: '/about',
                    },
                },
                {
                    label: 'Research',
                    autogenerate: {
                        directory: '/research',
                    },
                },
                {
                    label: 'Technical Details',
                    autogenerate: {
                        directory: '/technical',
                    },
                },
            ],
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
