export default {
  content: ["index.html", "script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#095665"
      },
      transitionProperty: {
        "height": "height",
        "padding": "padding",
      },
      animation: {
        appear: "appear 1 forwards 1s"
      },
      backgroundImage: {
        divider: "url(./media/divider.svg)",
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
            "letter-spacing": "20px",
          },
          to: {
            opacity: "1",
            "letter-spacing": "8px",
          },
        },
      },
    },
  },
};
