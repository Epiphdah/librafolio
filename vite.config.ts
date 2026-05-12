import { defineConfig } from "vite";
import path from "path";

const port = Number(process.env.PORT) || 5173;

// base path fallback (important pour Vercel)
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
base: basePath,
plugins: [],
root: path.resolve(import.meta.dirname),
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
},
server: {
port,
strictPort: false,
host: "0.0.0.0",
allowedHosts: true,
},
preview: {
port,
host: "0.0.0.0",
allowedHosts: true,
},
});
