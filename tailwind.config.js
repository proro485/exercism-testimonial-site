module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      inherit: "inherit",

      transparent: "transparent",

      white: "#FFFFFF",
      overlayWhite: "#FBFCFE",

      blue: "#2E57E8",
      black: "#000000",

      darkPurple: "#130B43",
      lightPurple: "#5C5589",
      lighterPurple: "#C8D5EF",
      faintPurple: "#F0F3F9",
      anotherFaintPurple: "#CBC9D9",
      yetAnotherFaintPurple: "#D5E0F7",

      trackDropDownText: "#3D3B45",
      trackDropDownBorder: "#A9A6BD",
      trackDropDownActiveBorder: "#6A6781",

      testimonialPurpleHoverBg: "#F4F7FD",
      testimonialPurpleBorder: "#EAECF3",
      testimonialPurpleContent: "#3F3A5A",

      purplePaginationBg: "#E0E0ED",
      purplePaginationBgActive: "#E1EBFF",
      purplePaginationText: "#76709F",
      purplePaginationBorder: "#D5D8E4",
    },
    boxShadow: {
      darker: "0px 4px 42px 0px rgba(79,114,205,0.3)",
      dark: "0px 4px 42px 0px rgba(79,114,205,0.25)",
      medium: "0px 4px 42px 0px rgba(79,114,205,0.2)",
      light: "0px 4px 42px 0px rgba(79,114,205,0.15)",

      blueish: "0px 0px 2px 2px rgba(46,87,232,0.25)"
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
