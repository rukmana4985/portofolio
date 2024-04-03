import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: "https://portofolio-5rzpofnxe-rukmana4985s-projects.vercel.app/",
  integrations: [tailwind(), icon()],
  output: 'hybrid',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: 'cookie'
    }
  },
});
