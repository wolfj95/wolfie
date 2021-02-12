import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
  {
    name: 'Reem Kufi',
    styles: [
      '400',
    ],
  },
  {
    name: 'Sanchez',
    styles: [
      '400',
    ],
  },
],
  headerFontFamily: [
    "Reem Kufi",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Sanchez", "Georgia", "serif"],
})

export const { scale, rhythm, options } = typography
export default typography
