const tailwindcss = require("tailwindcss");
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
      gridTemplateRows: {
        12: "repeat(12, minmax(0,1fr))",
      },
      inset: {
        17: "68px",
        26: "104px",
      },
      backgroundImage: {
        bt: "url('../../assets/images/biotech-bkg 1.png')",
        admission: "url('../../assets/images/admission-bkg.jpg')",
        ai_ml: "url('../../assets/images/ai.jpg')",
        ai_ds: "url('../../assets/images/.jpg')",
        arch: "url('../../assets/images/archi.jpg')",
        chem: "url('../../assets/images/chemical.jpg')",
        chy: "url('../../assets/images/chemistry.jpg')",
        cse: "url('../../assets/images/cse.jpg')",
        cv: "url('../../assets/images/cv.jpg')",
        cs_ai: "url('../../assets/images/ai.jpg')",
        cs_cs: "url('../../assets/images/admission-bkg.jpg')",
        eee: "url('../../assets/images/eee.jpg')",
        ece: "url('../../assets/images/ece.jpg')",
        ete: "url('../../assets/images/ete.jpg')",
        eie: "url('../../assets/images/eie.jpg')",
        hss: "url('../../assets/images/hss.jpg')",
        iem: "url('../../assets/images/iem.jpg')",
        ise: "url('../../assets/images/ise.jpg')",
        mba: "url('../../assets/images/mba.jpg')",
        mca: "url('../../assets/images/mca.jpg')",
        mat: "url('../../assets/images/mat.jpg')",
        mech: "url('../../assets/images/mech.jpg')",
        phy: "url('../../assets/images/phy.jpg')",
        ml: "url('../../assets/images/ml.jpg')",
        exam: "url('../../assets/images/exam-bkg.jpg')",
        lib: "url('../../assets/images/lib.jpg')",
        hostel: "url('../../assets/images/hostel-gallery-placeholder.png')",
        internet: "url('../../assets/images/internet.jpg')",
        gym: "url('../../assets/images/gym.jpg')",
        other_facilities: "url('../../assets/images/admission-bkg.jpg')",
        sports: "url('../../assets/images/sports.jpg')",
        placement: "url('../../assets/images/placement-bkg.jpg')",
        about: "url('../../assets/images/about.jpg')",
        contact: "url('../../assets/images/contact-us.jpg')",
        deca: "url('../../assets/images/deca.jpg')",
        spdc: "url('../../assets/images/spdc.jpg')",
        edc: "url('../../assets/images/edc.jpg')",
        nss: "url('../../assets/images/nss.jpg')",
        proctor: "url('../../assets/images/proctor.jpg')",
        cocurricular: "url('../../assets/images/cocu.jpg')",
        alumni: "url('../../assets/images/alumni.jpg')",
        aatce: "url('../../assets/images/aatce.jpg')",
        teqip: "url('../../assets/images/teqip.jpg')",
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
      // fontFamily: {
      //   body: "Gotham Book",
      //   heading: "Gotham Bold",
      //   lightBody: "Gotham Book",
      //   quoto: "Gotham Book Italic",
      // },
      fontFamily: {
        // body: "Flama Regular",
        body: "Flama Light",
        heading: "Flama Bold",
        book: "Gotham Medium",
        lightBody: "Flama Regular",
        quoto: "Flama Italic",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
