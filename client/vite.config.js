import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000", // Backend cục bộ
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [react()],
    build: {
        outDir: "dist", // Thư mục output (mặc định là 'dist')
    },
});
