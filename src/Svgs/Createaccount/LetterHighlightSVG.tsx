import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface ClockProps {
    style?: any,
}
const EmailHighlightIcon = ({ style }: ClockProps) => {
    return (
        <Svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20.4615 4H3.53846C2.68879 4 2 4.68879 2 5.53846V18.6154C2 19.4651 2.68879 20.1538 3.53846 20.1538H20.4615C21.3112 20.1538 22 19.4651 22 18.6154V5.53846C22 4.68879 21.3112 4 20.4615 4Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M2 5.9231L11.0154 13.6154C11.2918 13.8457 11.6402 13.9718 12 13.9718C12.3598 13.9718 12.7082 13.8457 12.9846 13.6154L22 5.9231" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
export default EmailHighlightIcon


