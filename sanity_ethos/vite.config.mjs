import css from "styled-jsx/css";
import { defineconfig } from "vite";

export default defineconfig({
  Plugins: [react()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
