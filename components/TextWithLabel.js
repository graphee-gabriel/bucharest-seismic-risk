import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { PADDING_HALF } from '../constants/Dimensions'

const TextWithLabel = ({
  label,
  children,
  style,
  ...props
}) => (
    <View {...props}
      style={[
        s.viewSection,
        StyleSheet.flatten(style)
      ]}
    >
      <Text style={s.textLabel}>{label}</Text>
      <Text style={s.text}>{children}</Text>
    </View>
  )


const s = StyleSheet.create({
  textLabel: {
    marginHorizontal: PADDING_HALF,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: PADDING_HALF,
  },
})

export default TextWithLabel