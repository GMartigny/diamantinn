export default {
  content: ["index.html", "script.js"],
  theme: {
    extend: {
      transitionProperty: {
        "height": "height",
        "padding": "padding",
      },
      animation: {
        appear: "appear 1 forwards 1s"
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
