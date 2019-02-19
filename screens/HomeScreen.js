import React from 'react'
import {
  StyleSheet,
  SafeAreaView
} from 'react-native'
// import Map from '../components/Map'
import SearchableBuildingList from '../components/SearchableBuildingList'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }



  onPressItem = item => {
    this.props.navigation.push('BuildingDetail', {
      item
    })
  }

  render() {
    return (
      <SafeAreaView style={s.viewMain}>
        <SearchableBuildingList
          onPressItem={this.onPressItem}
        />
      </SafeAreaView>
    )
  }
}

const s = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
