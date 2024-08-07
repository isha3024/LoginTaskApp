export const color = {
  primary: 'rgb(66, 133, 244)',
  semiPrimaryTrans: 'rgb(66, 133, 244, 0.3)',
  primaryLight: 'rgb(179, 206, 250)',
  white: 'rgb(250, 249, 246)',
  black: 'rgb(11, 18, 21)',
  transparent: 'rgba(0,0,0,0)',
  semiTransBlack: 'rgba(11, 18, 21, 0.5)',
  placeholderColor: 'rgb(115, 106, 106)',
  customTransparent: opacity => `rgba(0, 0, 0,${opacity ?? 1})`,
  customWhite: opacity => `rgba(250, 249, 246,${opacity ?? 1})`,
  customBlack: opacity => `rgba(11, 18, 21,${opacity ?? 1})`,
};
