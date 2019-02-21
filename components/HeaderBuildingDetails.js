import React from 'react'
import { StyleSheet, Text, Platform, TouchableOpacity, View } from 'react-native'
import { Icon } from 'expo'
import { PADDING_HALF, PADDING, ICON_SMALL } from '../constants/Dimensions'

const HeaderBuildingDetails = ({
  streetName,
  streetNumber,
  onPressBack,
  area,
  style,
  ...props
}) => (
    <View
      {...props}
      style={[
        s.viewHeader,
        StyleSheet.flatten(style)
      ]}
    >
      <TouchableOpacity style={s.touchableOpacityBack} onPress={onPressBack}>
        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={ICON_SMALL} />
      </TouchableOpacity>
      <Text style={s.textTitle}>
        {streetName}
      </Text>
      <Text style={s.textNumber}>
        {streetNumber}
      </Text>
    </View>
  )


const s = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: PADDING_HALF,
    // marginBottom: PADDING,
  },
  touchableOpacityBack: {
    padding: PADDING
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    padding: PADDING_HALF,
  },
  textNumber: {
    fontWeight: 'bold',
    fontSize: 50,
    paddingHorizontal: PADDING_HALF,
  },
})

export default HeaderBuildingDetails