import * as React from 'react';
import Svg, {Path, Defs, G, ClipPath} from 'react-native-svg';
export const Person = props => {
  return (
    <Svg
      width={props.width ?? 12}
      height={props.height ?? 12}
      viewBox="0 0 12 12"
      fill={props.fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_8_4324)" fill={props.fill ?? '#F9AB00'}>
        <Path d="M6 6a3 3 0 100-6 3 3 0 000 6zm0-5a2 2 0 110 4 2 2 0 010-4zM6 7a4.505 4.505 0 00-4.5 4.5.5.5 0 001 0 3.5 3.5 0 117 0 .5.5 0 001 0A4.505 4.505 0 006 7z" />
      </G>
      <Defs>
        <ClipPath id="clip0_8_4324">
          <Path fill={props.fill ?? '#fff'} d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
