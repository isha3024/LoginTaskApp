import {color, fontSize, size, fonts} from '../../theme';

export const mainContainer = () => ({
  backgroundColor: color.white,
})

export const label = () => ({
  color: color.black,
  marginBottom: size.moderateScale(8),
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsRegular,
  paddingLeft: size.moderateScale(5)
})

export const input = () => ({
  borderColor: color.primaryLight,
  borderWidth: size.moderateScale(1),
  borderRadius: size.moderateScale(8),
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(13),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.poppinsRegular,
  color: color.black,
  letterSpacing: size.moderateScale(1)
})

export const focused = () => ({
  borderWidth: size.moderateScale(1),
  borderColor: color.primary,
  borderRadius: size.moderateScale(8),
  fontSize: fontSize.verySmallMedium,
  fontFamily: fonts.poppinsRegular,
  color: color.black,
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(13),
  letterSpacing: size.moderateScale(1)
})