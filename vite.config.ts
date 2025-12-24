import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from "node:url";
import { compression } from 'vite-plugin-compression2'
import * as path from "node:path";

const compressibleExtensions = [
    // JS ans TS
    'js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx',
    // Styles
    'css', 'less', 'scss',
    // Doc and texts
    'html', 'htm', 'json', 'xml', 'yml', 'yaml',
    'md', 'mdx', 'txt', 'text', 'map',
    // Fonts
    'woff', 'woff2', 'eot', 'ttf', 'otf',
    // Others
    'webmanifest', 'pdf', 'doc', 'docx'
].join('|');
const compressFilter = new RegExp(`\\.(${compressibleExtensions})$`, 'i');

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        // Compresión Brotli (principal)
        compression({
            algorithms: ['brotliCompress'],
            filename: '[path][base].br',
            deleteOriginalAssets: false,
            include: compressFilter,
            exclude: /\.(png|jpe?g|gif|ico|webp)$/,
            threshold: 512,
        }),
        // Compresión Gzip
        compression({
            algorithms: ['gzip'],
            filename: '[path][base].gz',
            deleteOriginalAssets: false,
            include: compressFilter,
            exclude: /\.(png|jpe?g|gif|ico|webp)$/,
            threshold: 512,
        }),
        // Compresión Deflate
        compression({
            algorithms: ['deflate'],
            filename: '[path][base].deflate',
            deleteOriginalAssets: false,
            include: compressFilter,
            exclude: /\.(png|jpe?g|gif|ico|webp)$/,
            threshold: 512,
        }),
        // Compresión Zstd
        compression({
            algorithms: ['zstd'],
            filename: '[path][base].zst',
            deleteOriginalAssets: false,
            include: compressFilter,
            exclude: /\.(png|jpe?g|gif|ico|webp)$/,
            threshold: 512,
        }),


    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
    },
    server: {
        host: '0.0.0.0',
    },
    assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.wav', '**/*.mp3', '**/*.ogg', '**/*.mp4', '**/*.webm'],
    build: {
        minify: 'esbuild',
        target: 'es2020',
        outDir: 'dist',
        emptyOutDir: true,
        chunkSizeWarningLimit: 500, // 500 KB
        sourcemap: false, // false for production
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                // JS de entrada (main) -> dist/js/
                entryFileNames: 'js/[name]-[hash].js',
                // JS chunks (code-splitting) -> dist/js/
                chunkFileNames: 'js/[name]-[hash].js',
                // Assets con lógica condicional
                assetFileNames: (assetInfo) => {
                    const fileName = assetInfo.name || ''
                    const ext = fileName.split('.').pop()?.toLowerCase() || ''
                    const baseName = path.basename(fileName, '.' + ext)
                    const isWorker = fileName.includes('workers/')

                    if (isWorker && ext === 'js') {
                        console.log(`Worker detectado: ${fileName} -> js/${baseName}-[hash].${ext}`)
                        return `js/${baseName}-[hash].${ext}`
                    } else if (ext === 'css') {
                        return `style/${baseName}-[hash].${ext}`
                    } else if (['svg', 'webp', 'png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
                        return `assets/img/${baseName}-[hash].${ext}`
                    } else if (ext === 'ico') {
                        return `assets/${baseName}-[hash].${ext}`
                    } else if (['woff', 'woff2', 'ttf', 'otf'].includes(ext)) {
                        return `assets/fonts/${baseName}-[hash].${ext}`
                    } else if (['wav', 'mp3', 'ogg'].includes(ext)) {
                        return `assets/sounds/${baseName}-[hash].${ext}`
                    } else if (['mp4', 'webm'].includes(ext)) {
                        return `assets/videos/${baseName}-[hash].${ext}`
                    } else {
                        return `assets/${baseName}-[hash].${ext}`
                    }
                }
            },
        },
    },
})
