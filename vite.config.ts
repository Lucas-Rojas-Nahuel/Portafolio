import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// o @vitejs/plugin-react
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    tailwindcss(),
    visualizer({ open: true, filename: "bundle-analysis.html" }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Esta función corta el bloque gigante de node_modules
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Ponemos react y react-dom en su propio chunk estratégico
            if (id.includes("react-dom") || id.includes("react/")) {
              return "react-core";
            }
            // Agrupamos las librerías de iconos en otro chunk separado
            if (id.includes("react-icons") || id.includes("lucide-react")) {
              return "icons";
            }
            // Todo el resto de dependencias pesadas de terceros irá a vendor
            return "vendor";
          }
        },
      },
    },
  },
});
