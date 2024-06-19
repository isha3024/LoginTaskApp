import {color, fontSize, size, fonts} from '../../theme';

export const mainContainer = () => ({
  backgroundColor: color.white,
  marginBottom: size.moderateScale(40)
})

export const label = () => ({
  color: color.black,
  marginBottom: size.moderateScale(8),
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsRegular,
  paddingLeft: size.moderateScale(5)
})

export const input = () => ({
  borderColor: color.primary,
  borderWidth: 1,
  height: size.moderateScale(45),
  borderRadius: size.moderateScale(8),
  paddingVertical: size.moderateScale(13),
  paddingHorizontal: size.moderateScale(13),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.poppinsRegular,
  color: color.black,
})

export const focused = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.primary
})