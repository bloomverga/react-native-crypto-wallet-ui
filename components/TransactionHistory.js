import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'

import {COLORS, SIZES, FONTS, icons } from "../constants"

const TransactionHistory = ({customContainerStyle, history}) => {
  
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base
      }}
      onPress={() => console.log(item)}
    >
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary
        }}
      />
      <View
        style={{ flex:1, marginLeft: SIZES.radius}}
      >
        <Text style={{ ...FONTS.h3}}>{item.description}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.date}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: item.type == "B" ? COLORS.green : COLORS.black,
            ...FONTS.h3
          }}
        >{item.amount}</Text>
        <Image 
          source={icons.right_arrow}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray
          }}
        />
      </View>
    </TouchableOpacity>
  )

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle
      }}
    >
      <Text
        style={{...FONTS.h2}}
      >
        Transaction history
      </Text>
      <FlatList
        contentContainerStyle={{marginTop: SIZES.radius}}
        scrollEnabled={false}
        data={history}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View style={{width: "100%", height: 1, backgroundColor: COLORS.lightGray}}></View>
          )
        }}
      />
    </View>
  )
}

export default TransactionHistory;