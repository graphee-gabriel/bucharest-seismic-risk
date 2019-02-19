import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { PADDING_HALF, PADDING } from '../../constants/Dimensions'
import CategoryView from '../CategoryView'
class BuildingListItem extends React.PureComponent {

  onPress = () => {
    this.props.onPress(this.props.item)
  }

  render() {
    if (this.props.item) {
      const { item: { address, expertise } } = this.props
      const { streetName, streetNumber } = address || {}
      const { category, expertName, yearExpertise } = expertise || {}
      return (
        <TouchableOpacity  {...this.props} onPress={this.onPress} style={s.viewMain}>
          <View style={s.viewText}>
            <Text style={s.textAddress}>
              {`${streetName} ${streetNumber}`}
            </Text>
            <Text style={s.textExpert}>
              {`${expertName} (${yearExpertise})`}
            </Text>
          </View>
          <CategoryView category={category} style={s.categoryView} />
        </TouchableOpacity>
      )
    }
    return null
  }
}

const s = StyleSheet.create({
  viewMain: {
    // padding: PADDING_HALF
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: PADDING_HALF,
  },
  viewText: {
    padding: PADDING_HALF,
    flex: 1,
  },
  textAddress: {
    // padding: PADDING_HALF
  },
  textExpert: {
    marginTop: PADDING_HALF / 2,
    opacity: 0.5
  },
  categoryView: {
    // flex: 1,
    margin: PADDING_HALF
  }
})

export default BuildingListItem