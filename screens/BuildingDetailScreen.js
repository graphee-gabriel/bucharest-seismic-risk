import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native' 
import { Location, Icon, Permissions } from 'expo'
import CategoryView from '../components/CategoryView'
import CategoryDescription from '../components/CategoryDescription'
import CategoryTitle from '../components/CategoryTitle'
import data from '../assets/data/building-list.json'
import TextWithLabel from '../components/TextWithLabel'
import Map from '../components/Map'

import { Card } from '../components/StyledViews'
import { Bold } from '../components/StyledText'

import { PADDING_HALF, ICON_SMALL, PADDING } from '../constants/Dimensions'

export default class BuildingDetailScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    latitude: null,
    longitude: null,
  }

  async componentDidMount() {
    const isIos = Platform.OS === 'ios'
    let { status } = (isIos && { status: 'granted' }) || await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const { address } = this.props.navigation.getParam('item') || {}
      const fullAdress = address.streetName + ' ' + address.streetNumber + ', Bucuresti'
      Location.geocodeAsync(fullAdress).then((answer) => {
        if (answer && answer.length) {
          const {
            latitude,
            longitude
          } = answer[0]
          this.setState({ latitude, longitude })
        }
      })
    }
  }

  onPressBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { latitude, longitude } = this.state
    const { address, expertise, building } = this.props.navigation.getParam('item') || {}
    const { streetName, streetNumber } = address || {}
    const { category, expertName, yearExpertise, observations } = expertise || {}
    const { yearConstruction, apartmentCount, area, heightRegime } = building || {}
    const expertExpertiseCount = data.filter(({ expertise }) => (expertise || {}).expertName === expertName).length
    return (
      <SafeAreaView style={s.viewMain}>
        <ScrollView>
          <View style={s.viewTitle}>
            <TouchableOpacity style={s.touchableOpacityBack} onPress={this.onPressBack}>
              <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={ICON_SMALL} />
            </TouchableOpacity>
            <Text style={s.textTitle}>
              {streetName}
            </Text>
            <Text style={s.textNumber}>
              {streetNumber}
            </Text>
          </View>
          <Map
            latitude={latitude}
            longitude={longitude}
            height={140}
          />
          <View style={s.viewContent}>
            <Card style={s.viewCard}>
              <View style={s.viewExpertiseTitle}>
                <CategoryView category={category} style={s.categoryView} />
                <CategoryTitle category={category} style={s.categoryTitle} />
              </View>
              <CategoryDescription category={category} style={s.categoryDescription} />
            </Card>
            <View style={s.viewSection}>
              <TextWithLabel style={s.textWithLabel} label="Expertised in: ">{yearExpertise}</TextWithLabel>
              <TextWithLabel style={s.textWithLabel} label="Expert: ">{expertName}</TextWithLabel>
              <TextWithLabel style={s.textWithLabel} label="Track Record: ">{expertExpertiseCount} expertises</TextWithLabel>
              <View style={s.viewExtras}>
                <Text style={s.textExtras}>
                  Observations: {observations || 'none'}
                </Text>
                <Text style={s.textExtras}>
                  This building was built in <Bold>{yearConstruction}</Bold> and holds <Bold>{apartmentCount}</Bold> apartments. In terms of height, it is classified as <Bold>{heightRegime}</Bold>, occupying a total surface of <Bold>{area}m</Bold>.
            </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const s = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: PADDING,
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: PADDING_HALF,
    // marginBottom: PADDING,
  },
  touchableOpacityBack: {
    padding: PADDING
  },
  divider: {
    flex: 1,
    maxHeight: 1,
    // margin: PADDING_HALF,
    // marginBottom: PADDING*2,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  viewContent: {
    padding: PADDING_HALF
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    padding: PADDING_HALF,
  },
  textWithLabel: {
    padding: PADDING_HALF,
  },
  viewExtras: {
    padding: PADDING_HALF,
  },
  textExtras: {
    padding: PADDING_HALF,
  },
  textNumber: {
    fontWeight: 'bold',
    fontSize: 50,
    paddingHorizontal: PADDING_HALF,
  },
  viewCard: {
    margin: PADDING_HALF,
  },
  categoryView: {
    margin: PADDING_HALF
  },
  categoryDescription: {
    margin: PADDING_HALF
  },
  viewExpertiseTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTitle: {
    margin: PADDING_HALF
  },
})
