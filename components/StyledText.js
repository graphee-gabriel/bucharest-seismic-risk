import React from 'react'
import { StyleSheet, Text } from 'react-native'

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
  }
}

export const Bold = ({
  style,
  ...props
}) => <Text {...props} style={[
  { fontWeight: 'bold' },
  StyleSheet.flatten(style)
]} />