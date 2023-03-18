import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// import Markdown from "vite-plugin-md"
// import meta from '@yankeeinlondon/meta-builder'

export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/]
        }),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        // Markdown({
        //     builders: [meta()]
        // })
    ]
})