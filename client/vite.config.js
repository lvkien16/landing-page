import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "https://ohshiec-6vc3zox04-lvkien16s-projects.vercel.app/", // Backend cục bộ
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
