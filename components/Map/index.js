import React from 'react'
import { Text, Button, StyleSheet, View, ActivityIndicator, Platform } from 'react-native'
import { MapView, Permissions } from 'expo'
import Colors from '../../constants/Colors'
import { PADDING_HALF } from '../../constants/Dimensions';

const defaultPosition = {
  latitude: 44.439663,
  longitude: 26.096306,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default class Map extends React.Component {
  static defaultProps = {
    showDelay: Platform.select({
      ios: 500,
      android: 150
    })
  }

  state = {
    show: false
  }

  componentDidMount() {
    this.checkForPermission(false)
  }

  async checkForPermission(shouldAsk) {
    const isIos = Platform.OS === 'ios'
    let { status } = (isIos && { status: 'granted' }) || await Permissions[shouldAsk ? 'askAsync' : 'getAsync'](Permissions.LOCATION)
    if (status === 'granted') {
      setTimeout(() => {
        this.setState({
          permissionGranted: true,
          show: true
        })
      }, this.props.showDelay)
    } else {
      this.setState({ permissionGranted: false, show: true })
    }
  }

  onPressEnable = () => {
    this.checkForPermission(true)
  }

  render() {
    const { show, permissionGranted } = this.state
    const { latitude, longitude, height } = this.props
    return show ? (
      permissionGranted ? (
        <MapView
          style={{ flex: 1, height, maxHeight: height }}
          initialRegion={defaultPosition}
          region={latitude && longitude ? {
            latitude,
            longitude,
            latitudeDelta: 0.0072,
            longitudeDelta: 0.0071,
          } : defaultPosition}
        >
          {latitude && longitude && (
            <MapView.Marker
              coordinate={{
                latitude,
                longitude
              }}
              title={'Place'}
            />
          )}
        </MapView>
      ) : (
          <View style={[s.view, { height, maxHeight: height }]}>
            <Text style={s.marginHalf}>{`Plase enable locations services for us to localise this building from its adress`}</Text>
            <Button
              style={s.marginHalf}
              title="Enable"
              color={Colors.tintColor}
              onPress={this.onPressEnable}
            />
          </View>
        )
    ) : (
        <View style={[s.view, { height, maxHeight: height }]}>
          <ActivityIndicator size="large" />
        </View>
      )
  }
}

const s = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDING_HALF
  },
  marginHalf: {
    margin: PADDING_HALF
  }
})