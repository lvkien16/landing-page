import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // Thư mục output (mặc định là 'dist')
    },
});
