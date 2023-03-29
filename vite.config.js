// import {resolve} from 'path'
import path from 'path'
import {defineConfig} from 'vite';

export default defineConfig({
    // root: path.resolve(__dirname, 'src'),
    server: {
        hot: true
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },

})
