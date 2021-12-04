import React from "react";
import {
  Text,
  TouchableOpacity
} from 'react-native'

import {COLORS, SIZES, FONTS} from '../constants'

const TextButton = ({label, customContainerStyle, customLabelStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...customLabelStyle}}>
        {label}
      </Text>
 
    </TouchableOpacity>
  )
}

export default TextButton;