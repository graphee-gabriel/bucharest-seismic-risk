import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import s from './styles'
import Strings from '../../constants/Strings'

const CategoryTitle = ({ category, style, ...props }) => (
  <View style={[
    s.viewCategory,
    StyleSheet.flatten(style)
  ]}>
    <Text style={s.textCategory}>
      {Strings.category.titleFromCategory[category] || Strings.category.titleFallback}
    </Text>
  </View>
)

export default CategoryTitle