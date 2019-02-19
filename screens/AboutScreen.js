import React from 'react'
import { ScrollView, View, StyleSheet, Text, Linking, SafeAreaView, Image } from 'react-native'
import Strings from '../constants/Strings'
import { PADDING_HALF, PADDING, ICON_MEDIUM_BIG } from '../constants/Dimensions'
import Colors from '../constants/Colors'
import { Button } from '../components/StyledViews'
import Images from '../constants/Images';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    // title: 'About',
    header: null
  }

  onPressCompany = () => {
    Linking.openURL(Strings.about.urlCompany)
  }


  onPressZeceLaRece = () => {
    Linking.openURL(Strings.about.urlZeceLaRece)
  }

  render() {
    return (
      <SafeAreaView style={s.viewSafeArea}>
        <ScrollView>
          <View style={s.viewMain}>
            <View style={s.viewTile}>
              <Image
                style={s.image}
                source={Images.appIcon}
              />
              <Text style={s.textTitle}>
                {Strings.about.title}
              </Text>
            </View>
            <Text style={s.textDescription}>
              {Strings.about.description}
            </Text>
            <Text style={s.textLabel}>
              {Strings.about.labelCompany}
            </Text>
            <Button
              title={Strings.about.nameCompany}
              color={Colors.tintColor}
              onPress={this.onPressCompany}
              style={s.buttonLink}
            />
            <Text style={[s.textLabel, { marginTop: PADDING }]}>
              {Strings.about.labelZeceLaRece}
            </Text>
            <Button
              title={Strings.about.nameZeceLaRece}
              color={Colors.tintColor}
              onPress={this.onPressZeceLaRece}
              style={s.buttonLink}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const s = StyleSheet.create({
  viewSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    padding: PADDING_HALF,
  },
  viewMain: {
    flex: 1,
    padding: PADDING_HALF,
  },
  viewTile: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  image: {
    margin: PADDING_HALF,
    width: ICON_MEDIUM_BIG + PADDING_HALF,
    height: ICON_MEDIUM_BIG + PADDING_HALF,
    borderRadius: PADDING_HALF,
  },
  textTitle: {
    padding: PADDING_HALF,
    fontSize: 20,
    fontWeight: 'bold'
  },
  textDescription: {
    padding: PADDING_HALF
  },
  textLabel: {
    padding: PADDING_HALF,
    opacity: 0.6
  },
  buttonLink: {
    margin: PADDING_HALF,
    // textAlign: 'left',
  },
  touchableOpacity: {
    padding: PADDING_HALF
  }
})
