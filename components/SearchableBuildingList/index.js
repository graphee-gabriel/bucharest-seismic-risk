import React from 'react'
import { StyleSheet, View, FlatList, TextInput, Text, Image } from 'react-native'
import { Icon } from 'expo'

import BuildingListItem from './BuildingListItem'

import data from '../../assets/data/building-list.json'
import { PADDING, ICON_MEDIUM_BIG, PADDING_HALF, ICON_MEDIUM } from '../../constants/Dimensions'
import { filterBuildings, sortByStreetNumber } from '../../utils/SearchUtils'
import Strings from '../../constants/Strings'
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';

const EMPTY_ICON_MEDIUM = ICON_MEDIUM + PADDING_HALF
const EMPTY_ICON_MEDIUM_BIG = ICON_MEDIUM_BIG + PADDING_HALF

data.sort((a, b) => {
  const streetA = (a.address || {}).streetName.split(' ')[1]
  const streetB = (b.address || {}).streetName.split(' ')[1]
  if (streetA < streetB) { return -1 }
  if (streetA > streetB) { return 1 }
  return 0
})

class SearchableBuildingList extends React.Component {

  state = {
    filteredData: data
  }

  renderItem = ({ item }) => <BuildingListItem onPress={this.onPressItem} item={item} />

  keyExtractor = ({ address: { streetName, streetNumber }, expertise: { certNumber } }) => `${streetName}_${streetNumber}_${certNumber}`

  onPressItem = item => {
    if (this.props.onPressItem) {
      this.props.onPressItem(item)
    } else {
      console.warn("You did not implement the onPressItem prop")
      console.warn("Clicked on item: ", item)
    }
  }

  onChangeText = (text) => {
    let filteredData
    if (text) {
      const filterData = filterBuildings(text)
      filteredData = data.filter(filterData).sort(sortByStreetNumber)
    }
    this.setState({
      text,
      filteredData: text ? (filteredData || []) : data
    })
  }

  render() {
    const { text, filteredData } = this.state
    return (
      <View style={s.viewMain}>
        <TextInput
          style={s.textInput}
          onChangeText={this.onChangeText}
          value={text}
        />
        {text ? (
          filteredData && filteredData.length ? (
            <FlatList
              style={s.flatList}
              data={filteredData}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          ) : (
              <View style={s.viewEmpty}>
                <Text style={s.textEmpty}>
                  {Strings.search.buildingListLabelNoResults}
                </Text>
                <View style={s.viewIcon}>
                  <Icon.Ionicons
                    name="ios-warning"
                    size={EMPTY_ICON_MEDIUM}
                    color={'white'}
                  />
                </View>
              </View>
            )
        ) : (
            <View style={s.viewEmpty}>
              <Text style={s.textEmpty}>
                {Strings.search.buildingListLabel}
              </Text>
              <Image
                style={s.image}
                source={Images.appIcon}
              />
            </View>
          )}
      </View>
    )
  }
}

const ICON_STYLE = {
  margin: PADDING,
  borderRadius: PADDING_HALF,
  width: EMPTY_ICON_MEDIUM_BIG,
  height: EMPTY_ICON_MEDIUM_BIG,
  alignSelf: 'center',
}
const s = StyleSheet.create({
  viewMain: {
    flex: 1,
  },
  textInput: {
    padding: PADDING,
    margin: PADDING,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: PADDING / 4,
    borderWidth: 1
  },
  flatList: {
    flex: 1,
  },
  viewEmpty: {
    margin: PADDING,
    flex: 1,
  },
  textEmpty: {
    padding: PADDING,
    textAlign: 'center',
    opacity: 0.6
  },
  viewIcon: {
    ...ICON_STYLE,
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: PADDING_HALF,
    // paddingHorizontal: PADDING
  },
  image: ICON_STYLE,
})

export default SearchableBuildingList