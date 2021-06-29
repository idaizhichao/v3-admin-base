import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.10.39',
        ws: true,
        rewrite: (path: any) => path.replace(/^\/api/, '/')
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs:[{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: name=> {
          name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ]
  }
})
