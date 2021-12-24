const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      inset: {
        17: "68px",
        26: "104px",
      },
      backgroundImage: {
        bt: "url('../../assets/images/biotech-bkg 1.png')",
        admission: "url('../../assets/images/admission-bkg.jpg')",
        homeBanner: "url('../../assets/images/msrit-campus.jpg')",
        homeBannerJnanam: "url('../../assets/images/image 1.png')",
        samMsr: "url('../../assets/images/sam-msr.png')",
        rightSideHome: "url('../../assets/images/right-side.png')",
        star: "url('../../assets/images/star.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          ramaiah: "#361c6a",
        },
        pink: {
          // ramaiah: "#992361",
          ramaiah: "rgba(157,29,89,1)",
        },
        orange: {
          // ramaiah: "#E34A21",
          ramaiah: "rgba(222,63,15,1)",
        },
        gray: {
          menu: "#C1B3B0",
          deptHeader: "#E2E2E2",
          homeSection: "#DDDDDD",
          homeBannerGray: "rgba(243, 244, 246, .8)",
        },
      },
      fontFamily: {
        body: "Gotham Book",
        heading: "Gotham Bold",
        lightBody: "Gotham Book",
        quoto: "Gotham Book Italic",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
