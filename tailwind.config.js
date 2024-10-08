/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
      },
      safelist: [
        'tw-justify-start',
        'tw-justify-center',
        'tw-justify-end',
        'tw-text-gold',
        "tw-w-1\\/12", "tw-w-2\\/12", "tw-w-3\\/12", "tw-w-4\\/12", "tw-w-5\\/12", "tw-w-6\\/12", "tw-w-7\\/12", "tw-w-8\\/12", "tw-w-9\\/12", "tw-w-10\\/12", "tw-w-11\\/12", "tw-w-12\\/12",
        "tw-w-1\\/6", "tw-w-2\\/6", "tw-w-3\\/6", "tw-w-4\\/6", "tw-w-5\\/6", "tw-w-6\\/6",
        "tw-object-cover", "tw-object-contain", "tw-object-fill", "tw-object-none", "tw-object-scale-down",
        "tw-aspect-none", "tw-aspect-square", "tw-aspect-16\\/9", "tw-aspect-4\\/3", "tw-aspect-3\\/2", "tw-aspect-4\\/5", "tw-aspect-5\\/4", "tw-aspect-5\\/6", "tw-aspect-7\\/6", "tw-aspect-16\\/10", "tw-aspect-16\\/15", "tw-aspect-3\\/4", "tw-aspect-2\\/3", "tw-aspect-3\\/5", "tw-aspect-9\\/16", "tw-aspect-1\\/1"
      ],
      backgroundImage: {
        "cta-button-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 50%)",
        "cta-button-shadow":
          "linear-gradient(154deg, #FFFFFF 29%, rgba(255, 255, 255, 0) 80%)",
        benefit: "url('/img/benefit-bg.svg')",
        "benefit-mobile": "url('/img/benefit-mobile-bg.svg')",
        "dotted-line": "url('/img/dotted-line.svg')",
      },
      colors: {
        "absolute-zero": "#0057B8",
        cadet: "#5B6770",
        cultured: "#F4F4F4",
        "primary-gray": "#333333",
        "outline-gray": "#796E65",
        "separator-gray": "#21262B",
        "light-gray": "#707070",
        "bright-gray": "#EDEDED",
        platinum: "#E4E4E4",
        "primary-red": "#CB333B",
        "primary-dark-red": "#B52E33",
        teal: "#00BFB3",
        "gold": "#C6663A",
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        modalSlideIn: {
          from: { opacity: 0.5, transform: "translateY(80%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideIn: "slideIn 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        modalSlideIn: "modalSlideIn 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        fadeOut: "fadeOut 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animated"),
  ],
};
