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

export const forgetPass = () => ({
  marginTop: size.moderateScale(10),
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
});

export const regsiterText = () => ({
  color: color.black,
  fontSize: fontSize.verySmallMedium,
  marginBottom: size.moderateScale(5),
  fontFamily: fonts.robotoRegualr
});

export const link = () => ({
  color: color.primary,
  fontSize: fontSize.verySmallMedium,
  fontFamily: fonts.robotoRegualr
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

export const buttonContainer = () => ({
  marginTop: size.moderateScale(70),
  paddingHorizontal: size.moderateScale(60),
  paddingVertical: size.moderateScale(40),
});

export const inputBottom = () => ({
  marginBottom: size.moderateScale(30),
});
