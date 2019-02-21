import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Bold } from './StyledText'
// import { PADDING_HALF } from '../constants/Dimensions'

const TextBuildingDetails = ({
  yearConstruction,
  apartmentCount,
  heightRegime,
  area,
  style,
  ...props
}) => (
    <Text
      {...props}
      style={[
        s.text,
        StyleSheet.flatten(style)
      ]}
    >
      This building was built in <Bold>{yearConstruction}</Bold> and holds <Bold>{apartmentCount}</Bold> apartments. In terms of height, it is classified as <Bold>{heightRegime}</Bold>, occupying a total surface of <Bold>{area}m</Bold>.
    </Text>
  )


const s = StyleSheet.create({
  text: {
    // padding: PADDING_HALF
  },
})

export default TextBuildingDetails