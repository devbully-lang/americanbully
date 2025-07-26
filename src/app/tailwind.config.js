



import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // --- THIS 'colors' OBJECT IS THE FIX ---
      // It defines the custom color names used by the futuristic Navbar.
      colors: {
        'theme-accent': {
          DEFAULT: '#e14e00', // Your primary brand orange
          glow: '#ff6a00',    // A brighter version for glow effects
        },
        'theme-dark': '#0a0a0a',   // A deep, rich black for the panel
        'theme-light': '#F1F1EA', // Your primary light background color
      },
      // --- END OF THE FIX ---

      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'neumorphic': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
      }
    },
  },
  plugins: [
    typography
  ],
};

export default config;
// This Tailwind CSS configuration file sets up custom colors, animations, keyframes, background images, and box shadows.
// It includes a plugin for typography and specifies the content paths for Tailwind to scan for class names.
// The 'colors' object is extended to include custom theme colors, which are used in the futuristic Navbar.
// The animations and keyframes provide visual effects for elements, enhancing the user interface with smooth transitions.
// The background images and box shadows add depth and style to the design, creating a modern and appealing aesthetic.
// The configuration is set to support dark mode and includes paths for content files to ensure proper styling across the application.
// The 'typography' plugin enhances text styles, making it easier to create readable and visually appealing content.
// Overall, this configuration file is designed to create a cohesive and stylish user interface with a futuristic theme, leveraging Tailwind CSS's utility-first approach to styling.
// The 'darkMode' is set to 'class', allowing for easy toggling between light and dark themes based on a class on the HTML element.
// The 'content' array specifies where Tailwind should look for class names, ensuring that styles are applied correctly throughout the application.
// The 'extend' property allows for adding  custom styles without overriding the default Tailwind styles, providing flexibility in design.
// The 'animation' and 'keyframes' sections define custom animations that can be applied to elements, enhancing user interactions with smooth transitions.
// The 'backgroundImage' section allows for custom gradient backgrounds, adding visual interest to the design.
// The 'boxShadow' section defines custom shadows that can be applied to elements, creating a sense of depth and dimension in the user interface.
// This configuration file is designed to create a cohesive and stylish user interface with a futuristic theme, leveraging Tailwind CSS's utility-first approach to styling.