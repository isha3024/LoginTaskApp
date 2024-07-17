import { color, size, fonts, fontSize } from "../../theme";

export const mainBtnContainer = () => ({
  paddingVertical: size.moderateScale(10),
  backgroundColor: color.primary,
  borderRadius: size.moderateScale(10),
  alignItem: 'center',
  justifyContent: 'center'
})

export const btnText = () => ({
  textAlign: 'center',
  fontSize: fontSize.medium,
  fontFamily: fonts.poppinsSemiBold,
  letterSpacing: size.moderateScale(2),
  color: color.white
})