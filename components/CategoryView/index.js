import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { colorFromCategory } from '../../utils/ColorUtils'
import s from './styles'

const CategoryView = ({ category, style, ...props }) => category !== 'Consolidat' ? (
  <View style={[
    s.viewCategory,
    { backgroundColor: colorFromCategory(category) },
    StyleSheet.flatten(style)
  ]}>
    <Text style={s.textCategory}>
      {category.toUpperCase()}
    </Text>
  </View>
) : (
    <Text style={[
      s.textCategory,
      { color: colorFromCategory(category) },
      StyleSheet.flatten(style)
    ]}>
      {category}
    </Text>
  )
export default CategoryView