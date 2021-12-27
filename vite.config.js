import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   build:{
     outDir:'./docs'
   },
  plugins: [vue()],
    server:{
      proxy:{
          '/api':{
              target:'http://127.0.0.1:5132',
              changeOrigin:true,
              rewrite:(path)=>path.replace(/^\/api/,''),
          }
      }
    }
})
