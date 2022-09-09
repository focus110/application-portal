module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tb: "px",
      },
      gridTemplateColumns: {
        md: "16rem auto",
        x: "16rem auto 18rem",
        xx: "18% auto 20%",
      },
      fontFamily: {
        display: ["montserrat"],
        body: ["poppins"],
      },
      colors: {
        rectem: {
          25: "#858585",
          50: "#23268C",
          75: "#4B4C4E",
          100: "#4C4A55",
          admin: "#F5F9FA",
          black: "#0F0D1A",
          blue: "#5A5CB1",
          cornwhite: "#f0f0f0",
          green: "#25CD6B",
          grey: "#8C8B93",
          form: "#F3F3F3",
          pink: "#FE5578",
          red: "#FF3D72",
          yellow: "#FFBE57",
        },
      },
      boxShadow: {
        box: "0px 25px 100px 0px rgba(0, 0, 0, 0.08)",
      },
      letterSpacing: {
        tighten: "-0.015em",
      },
      spacing: {
        15: "60px",
      },
      height: {
        30: "120px",
        35: "140px",
        82: "328px",
        102: "408px",
        144: "576px",
        "19/20": "95%",
      },
      width: {
        70: "280px",
        91: "364px",
        102: "408px",
        120: "460px",
        144: "576px",
        "49/50": "98%",
        "11/20": "55%",
      },
      fontSize: {
        x: ["12px", "14px"],
        dp: ["14px", "16px"],
        xx: ["28px", "24px"],
      },
      zIndex: {
        9: 9,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
