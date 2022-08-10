import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    srcDir: 'src/',
    modules: [
        ['@nuxtjs/strapi'],
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt',
    },
    components: {
        global: true,
        dirs: ['@/components/global'],
    },
    css: [
        '@/assets/styles/main.scss',
    ],
    buildModules: [],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});
