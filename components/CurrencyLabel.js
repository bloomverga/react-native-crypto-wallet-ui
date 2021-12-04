import React from "react";

import {
  View,
  Image,
  Text,
  Vibration,
} from 'react-native'

import { dummyData, COLORS, SIZES, FONTS, icons} from '../constants'

const CurrencyLabel = ({icon, currency, code}) => {
  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width: 25,
          height: 25,
          marginTop: 5
        }}
      />
      <View
        style={{marginLeft: SIZES.base}}
      >
        <Text style={{...FONTS.h3}}>{currency}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
      </View>
    </View>
  )
}

export default CurrencyLabel;