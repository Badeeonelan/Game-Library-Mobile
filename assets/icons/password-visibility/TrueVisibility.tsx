import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/shared/tokens";

const TrueVisibility = () => (
  <Svg viewBox="0 0 512 512" style={{width: 24, height: 24}} fill={Colors.gray}>
    <Path d="M499.4 250.8c-51-86.3-143.6-140.4-243.4-140.4S63.5 164.5 12.6 250.8c-2.1 3.1-2.1 7.3 0 10.4 51 86.3 143.6 140.4 243.4 140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zM256 380.8C165.5 380.8 81.2 333 34.4 256 81.2 179 165.5 131.2 256 131.2S430.8 179 477.6 256C430.8 333 346.5 380.8 256 380.8z" />
    <Path d="M256 162.4c-52 0-93.6 41.6-93.6 93.6 0 52 41.6 93.6 93.6 93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0 166.4c-40.6 0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8 32.3 72.8 72.8-32.2 72.8-72.8 72.8z" />
    <Path d="M256 214.4v20.8c11.4 0 20.8 9.4 20.8 20.8s-9.4 20.8-20.8 20.8-20.8-9.4-20.8-20.8h-20.8c0 22.9 18.7 41.6 41.6 41.6 22.9 0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z" />
  </Svg>
)
export default TrueVisibility