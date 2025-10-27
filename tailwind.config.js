const { Container } = require('lucide-react');

/** @type {import('tailwind.css').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      // ...
    ],
    prefix: "",
    theme: {
      Container:{
        center: true,
        padding: "15px",
      },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1200px",
        },
      fontFamily: {
        primary: "var(--font-jetbrains-mono)",
      },
      extend:{
        colors: {
            primary: '#1c1C22',
            accent:{DEFAULT:'#00ff99',hover:"#00e187"},
        }
      }
      },
      extend: {
        fontFamily: {
          primary: ["var(--font-jetbrains-mono)", "monospace"],
        },
      },
    }
    // ...autres options si besoin...
  