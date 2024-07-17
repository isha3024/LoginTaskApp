import {color, size, fonts, fontSize} from '../../theme';

export const rootContainer = () => ({
  flex: 1,
  backgroundColor: color.white,
});

export const image = () => ({
  width: size.moderateScale(260),
  height: size.moderateScale(100),
  marginLeft: size.moderateScale(30),
});

export const logoContainer = () => ({
  marginTop: size.moderateScale(20),
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: size.moderateScale(15),
});

export const inputContainer = () => ({
  paddingHorizontal: size.moderateScale(50),
  paddingVertical: size.moderateScale(20),
  marginBottom: size.moderateScale(70),
});

export const titleView = () => ({
  paddingVertical: size.moderateScale(20),
  marginBottom: size.moderateScale(30),
});

export const input = () => ({
  marginBottom: size.moderateScale(30),
  marginTop: size.moderateScale(20),
});

export const textContainer = () => ({
  marginBottom: size.moderateScale(30),
});

export const subtitle = () => ({
  fontSize: fontSize.small,
  color: color.black,
  fontFamily: fonts.poppinsSemiBold
});

export const text = () => ({
  fontSize: fontSize.verySmall,
  color: color.black,
  fontFamily: fonts.poppinsRegular,
  marginTop: size.moderateScale(5)
});

export const buttonContainer = () => ({
  marginTop: size.moderateScale(90),
  paddingHorizontal: size.moderateScale(60),
  paddingVertical: size.moderateScale(40),
});