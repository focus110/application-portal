module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["montserrat"],
        body: ["poppins"],
      },
      colors: {
        rectem: {
          50: "#23268C",
          75: '#4B4C4E',
          100: "#4C4A55",
          grey: "#8C8B93",
          form: "#F3F3F3",
          black: "#0F0D1A",
          admin: "#F5F9FA",
          blue: "#5A5CB1",
          cornwhite: "#f0f0f0",
        },
      },
      boxShadow: {
        box: "0px 25px 100px 0px rgba(0, 0, 0, 0.08)",
      },
      letterSpacing: {
        tighten: '-0.015em',
      },
      height: {
        35: '140px',
        82: '328px',
        102: '408px', 
        144: '576px',
        '19/20': '95%', 
      },
      width: {
        91: '364px',
        102: '408px', 
        120: '460px', 
        144: '576px', 
        '49/50': '98%',
      },
      fontSize: {
        x: ['12px', '14px'],
        xx: ['28px', '24px'],
      },
    },
  },
  plugins: [],
};
