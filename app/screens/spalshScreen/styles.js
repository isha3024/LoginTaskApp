import { color, size, fontSize, fonts } from "../../theme";

export const splash = () => ({
  flex: 1,
  backgroundColor: color.white,
  justifyContent: 'center',
  alignItems: 'center'
})

export const splashText = () => ({
  fontSize: fontSize.middleLarge,
  fontFamily: fonts.poppinsExBold,
  color: color.primary
})