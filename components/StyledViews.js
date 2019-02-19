import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { PADDING_HALF, PADDING } from '../constants/Dimensions'
import Colors from '../constants/Colors'

export const Card = ({ style, ...props }) => (
  <View {...props} style={[{
    padding: PADDING_HALF,
    backgroundColor: 'rgba(0, 0, 0, 0.035)',
    borderRadius: PADDING_HALF,
    // borderBottomColor: 'rgba(0,0,0,0.1)',
    // borderBottomWidth: 1,
  }, StyleSheet.flatten(style)
  ]} />
)

export const Button = ({ style, onPress, color, title, ...props }) => (
  <Card {...props} style={[{
    backgroundColor: color,
    padding: 0,
  }, StyleSheet.flatten(style)
  ]}>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: PADDING, }} onPress={onPress}>
      <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  </Card>
)

Button.defaultProps = {
  color: Colors.tintColor
}