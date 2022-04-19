import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface ClockProps {
    style?: any,
    onPress?: any,
}
const HideEyeIcon = ({ style,onPress}: ClockProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M20.9694 9.61255C21.6137 10.189 22.1562 10.7486 22.5632 11.1894C22.8443 11.5009 23 11.9057 23 12.3254C23 12.7451 22.8443 13.1499 22.5632 13.4614C20.7828 15.3774 16.7305 19.1075 12 19.1075H11.3218" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.69298 17.6324C4.72894 16.5324 2.95429 15.1241 1.43684 13.4613C1.15565 13.1498 1 12.745 1 12.3253C1 11.9057 1.15565 11.5009 1.43684 11.1893C3.21714 9.27338 7.26947 5.54321 12 5.54321C13.8647 5.58219 15.6897 6.08944 17.307 7.01833" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M21.3257 3L2.6748 21.6509" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.60925 14.7161C8.97243 14.0831 8.61267 13.2233 8.60889 12.3254C8.60889 11.426 8.96616 10.5635 9.60211 9.92755C10.2381 9.2916 11.1006 8.93433 12 8.93433C12.8979 8.93811 13.7576 9.29787 14.3907 9.93469" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M14.95 14.021C14.6482 14.5369 14.2153 14.9639 13.6953 15.2587" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
    )
}
export default HideEyeIcon


