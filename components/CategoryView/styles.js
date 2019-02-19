import { StyleSheet } from 'react-native'
import { ICON_MEDIUM } from '../../constants/Dimensions'

const s = StyleSheet.create({
  viewCategory: {
    borderRadius: ICON_MEDIUM/2,
    width: ICON_MEDIUM,
    height: ICON_MEDIUM,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCategory: {
    color: 'white',
    fontWeight: 'bold',
  }
})

export default s