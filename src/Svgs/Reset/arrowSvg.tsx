import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
}
const ArrowIcon = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8 1L1.16831 7.62308C1.11518 7.67142 1.07283 7.72981 1.04388 7.79464C1.01494 7.85947 1 7.92936 1 8C1 8.07064 1.01494 8.14054 1.04388 8.20536C1.07283 8.27019 1.11518 8.32858 1.16831 8.37692L8 15" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
export default ArrowIcon
