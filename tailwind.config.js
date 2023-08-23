/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    content: {
      copy: 'url("assets/copy-icon.svg")',
      refresh: 'url("assets/refresh-icon.svg")',
    },
  },
};
export const plugins = [];
