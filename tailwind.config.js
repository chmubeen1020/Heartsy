/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7028E4",     // emerald-500 #7028E4
        secondary: "#6366f1",   // indigo-500
        background: "#09090b",  // zinc-950
        foreground: "#ffffff",
        Sidebar: "#FAFAFA"
      },
    },
  },
  plugins: [],
};
