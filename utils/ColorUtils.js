import Colors from "../constants/Colors"

const DEFAULT_COLOR = '#c9c9c9'
const COLORS_FROM_CATEGORY = {
  'Rs1': Colors.dangerColor,
  'Rs2': Colors.tintColor,
  'Rs3': Colors.infoColor,
  'Rs4': Colors.validColor,
  'Consolidat': Colors.validColor,
  'Consolidated': Colors.validColor,
  'U1': DEFAULT_COLOR,
  'U2': DEFAULT_COLOR,
  'U3': DEFAULT_COLOR,
}
export const colorFromCategory = category => COLORS_FROM_CATEGORY[category] || DEFAULT_COLOR