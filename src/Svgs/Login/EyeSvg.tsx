import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface ClockProps {
    style?: any,
    onPress?:any,
}
const EyeIcon = ({ style,onPress }: ClockProps) => {
    return (

        <Svg style={style} onPress={onPress} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18.6426 6.07048C18.8727 6.32539 19 6.65657 19 6.99994C19 7.34332 18.8727 7.67449 18.6426 7.9294C17.186 9.497 13.8704 12.549 10 12.549C6.12956 12.549 2.81403 9.497 1.35741 7.9294C1.12735 7.67449 1 7.34332 1 6.99994C1 6.65657 1.12735 6.32539 1.35741 6.07048C2.81403 4.50289 6.12956 1.45093 10 1.45093C13.8704 1.45093 17.186 4.50289 18.6426 6.07048Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.0001 9.77436C11.5324 9.77436 12.7746 8.53217 12.7746 6.99985C12.7746 5.46753 11.5324 4.22534 10.0001 4.22534C8.46778 4.22534 7.22559 5.46753 7.22559 6.99985C7.22559 8.53217 8.46778 9.77436 10.0001 9.77436Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
export default EyeIcon
