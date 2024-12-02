import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const MenuList = () => (
  <Svg
    fill='#FFF'
    width={26}
    height={24}
    viewBox="0 0 24 24"
  >
    <Path d="M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
    <Circle cx={2} cy={5} r={2} />
    <Circle cx={2} cy={12} r={2} />
    <Circle cx={2} cy={19} r={2} />
  </Svg>
)
export default MenuList
