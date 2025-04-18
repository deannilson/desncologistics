import { APP_NAME, APP_DOMAIN } from "./utils";
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Global Shipping",
      titleTemplate: `%s | ${APP_NAME}`,
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: `Discover fast, reliable global shipping and logistics solutions with ${APP_NAME}. Explore our services and streamline your supply chain today.`,
        },
        { name: "og:locale", content: "en_US" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: APP_NAME,
        },
        {
          name: "og:description",
          content: `Discover fast, reliable global shipping and logistics solutions with ${APP_NAME}. Explore our services and streamline your supply chain today.`,
        },
        {
          name: "og:site_name",
          content: APP_NAME,
        },
        { name: "og:url", content: `https://${APP_DOMAIN}` },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
        {
          rel: "stylesheet",
          href: "/icons/fontawesome/css/all.min.css",
        },
      ],
      script: [
        {
          src: "//code.tidio.co/asjtzzjmz94bsielitdymkld2kyetin8.js",
          async: true,
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: { public: {} },
});
