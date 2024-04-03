import React from 'react';
import { Text as RNText } from 'react-native';
import pallets from './pallets';

const getFontFamily = (weight) => {
  switch (weight) {
    case '300':
      return 'Poppins-Regular';
    case '500':
      return 'Roboto-Medium';
    case '600':
      return 'Poppins-Medium';
    case '700':
      return 'Poppins-Bold';
    default:
      return 'Poppins-Regular';
  }
};

const Text = ({
  children,
  style,
  fontWeight = '400',
  color,
  fontSize,
  textAlign,
  lineHeight,
  ...props
}) => {
  const size = fontSize || 13;

  return (
    <RNText
      maxFontSizeMultiplier={1.3}
      minimumFontScale={0.7}
      style={[
        {
          color: color || pallets.text,
          fontSize: size,
          lineHeight,
          // lineHeight: (style?.fontSize ?? size) * 1.5,
          textAlign,
        },
        { fontFamily: getFontFamily(fontWeight) },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
export default Text;
