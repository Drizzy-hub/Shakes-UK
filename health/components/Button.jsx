import React from 'react';
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

// import { disabledGrey, primaryBlue, textSecondary } from '../constants/colors';
import colors from './pallets';
import Text from './Text';

export default function Button({
  text,
  onPress,
  style,
  textStyle,
  loading,
  disabled,
  outlined,
  backgroundColor = colors.btn,
  color = '#fff',
  children,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderRadius: 12,
        borderWidth: outlined ? 1 : 0,
        height: 43,
        justifyContent: 'center',
        opacity: 1,
        paddingHorizontal: 20,
        width: '100%',
        ...style,
      }}
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" animating color={color} />
      ) : (
        children ?? (
          <Text
            style={{
              color: colors.whiteText,
              // color: disabled
              //   ? textSecondary
              //   : outlined
              //   ? backgroundColor
              //   : color,
              fontSize: 14,
              fontWeight: '700',
              textAlign: 'center',
              ...textStyle,
            }}
          >
            {text}
          </Text>
        )
      )}
    </TouchableOpacity>
  );
}

/**
 * Component for FAB
 * @component
 *
 * @param {function} onPress
 * @param {boolean} disabled
 * @param {string} backgroundColor
 * @param {object} style
 * @param {JSX.Element} children
 *
 * @returns {JSX.Element}
 */

const shadowColor = '#00000055';
