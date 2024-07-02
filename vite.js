import { defineConfig } from "vite";
import dns from "node:dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  server: {
    proxy: {
      "/load": "http://localhost:3000",
      "/sync": "http://localhost:3000",
    },
  },
});
