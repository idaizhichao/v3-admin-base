import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.10.39',
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
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
    alias: {
      '@': resolve(__dirname, 'src'),
      '@util': resolve(__dirname, 'src/util'),
      '@api': resolve(__dirname, 'src/api'),
      '@component': resolve(__dirname, 'src/component'),
      '@route': resolve(__dirname, 'src/route')
    }
  }
})
