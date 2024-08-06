import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Dukandar",
      customCss: [
        "./src/tailwind.css",
        "./src/styles/katex.css",
        "./src/styles/index.css",
      ],
      social: {
        github: "https://github.com/rat-tub/rakathon-idea-submission",
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 4,
      },
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
