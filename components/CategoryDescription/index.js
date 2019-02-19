import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import s from './styles'
import Strings from '../../constants/Strings'

const CategoryDescription = ({ category, style, ...props }) => (
  <View style={[
    s.viewCategory,
    StyleSheet.flatten(style)
  ]}>
    <Text style={s.textCategory}>
      {Strings.category.descriptionFromCategory[category] || Strings.category.descriptionFallback}
    </Text>
  </View>
)

export default CategoryDescription