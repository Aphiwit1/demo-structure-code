import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"),
  //     "@assets": path.resolve(__dirname, "src/assets/"),
  //     "@components": path.resolve(__dirname, "src/components/"),
  //     "@features": path.resolve(__dirname, "src/features/"),
  //     "@libs": path.resolve(__dirname, "src/libs/"),
  //     "@client": path.resolve(__dirname, "src/client/"),
  //     "@config": path.resolve(__dirname, "src/config/"),
  //     "@hooks": path.resolve(__dirname, "src/hooks/"),
  //     "@interfaces": path.resolve(__dirname, "src/interfaces/"),
  //     "@models": path.resolve(__dirname, "src/models/"),
  //     "@constant": path.resolve(__dirname, "src/constant/"),
  //   },
  // },
});
