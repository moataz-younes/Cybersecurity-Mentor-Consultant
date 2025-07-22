import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Cybersecurity-Mentor-Consultant/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
