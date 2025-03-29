import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 确保引入 path 模块

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 这里使用 path.resolve
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A', // 修改主题颜色
        },
        javascriptEnabled: true,
      },
    },
  },
});
