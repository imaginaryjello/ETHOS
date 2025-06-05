import css from "styled-jsx/css";
import { defineconfig } from "vite";
import React from "@vitejs/plugin-react";
export default defineconfig({
  Plugins: [React()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
