import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// this proxy use for fetch the backend server to send data and retrive data 

// https://vitejs.dev/config/
export default defineConfig({

  server: {

    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
})
