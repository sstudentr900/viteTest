import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ command })=>{
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      }),
    ],
    resolve:{
      alias:{
        '@':fileURLToPath(new URL('./src',import.meta.url))
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          //自動導入樣式
          additionalData:`@import "@/styles/var.scss";`
        }
      }
    }
  }
})
