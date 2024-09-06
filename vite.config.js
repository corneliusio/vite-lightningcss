import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            // adding `visitor` cases panic in bun
            visitor: {

            },
        },
    },
})
