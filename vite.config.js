import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            // adding `visitor` causes panic in bun
            visitor: {

            },
        },
    },
})
