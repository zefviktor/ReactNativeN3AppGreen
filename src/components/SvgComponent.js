import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM6.023 12.836l3.995 4.319a1 1 0 0 0 1.51-.047l6.582-8.073a1.121 1.121 0 0 0-1.653-1.51l-5.665 5.539a.5.5 0 0 1-.63.056l-2.765-1.88a1.06 1.06 0 0 0-1.374 1.596Z"
      fill="#81B578"
    />
  </Svg>
)

export default SvgComponent
