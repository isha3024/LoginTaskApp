import { size, color, fontSize, fonts } from "../../theme";

export const rootContainer = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
})

export const text = () => ({
  fontSize: fontSize.large,
  fontFamily: fonts.poppinsExBold,
  color: color.black
})