import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import environment from "vite-plugin-environment";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    solid(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" })
  ],
})
