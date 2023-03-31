// import {resolve} from 'path'
import path, {resolve} from 'path'
import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                feed: resolve(__dirname, 'pages/feed/index.html'),
                profile: resolve(__dirname, 'pages/profile/index.html'),
            },

        },
    },
    server: {
        hot: true
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },

})
