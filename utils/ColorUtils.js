import Colors from "../constants/Colors"

const DEFAULT_COLOR = Colors.neutralColor
const COLORS_FROM_CATEGORY = {
  'Rs1': Colors.dangerColor,
  'Rs2': Colors.tintColor,
  'Rs3': Colors.infoColor,
  'Rs4': Colors.validColor,
  'Consolidat': Colors.validColor,
  'Consolidated': Colors.validColor,
  'U1': Colors.dangerColor,
  'U2': Colors.dangerColor,
  'U3': Colors.dangerColor,
  'U2. U3': Colors.dangerColor,
  'U3. U2': Colors.dangerColor,
}
export const colorFromCategory = category => COLORS_FROM_CATEGORY[category] || DEFAULT_COLOR