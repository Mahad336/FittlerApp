import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
}
const AppleIcon = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13.836 0C13.836 0 12.2001 0.0396226 10.7001 1.53962C9.20011 3.03962 9.45311 5.06037 9.45311 5.06037C9.45311 5.06037 10.938 5.33189 12.5228 3.74717C14.1075 2.16244 13.836 0 13.836 0Z" fill="#08101F"/>
        <Path d="M9.62452 6.3396C8.51885 6.33204 7.83965 5.37734 5.9566 5.37734C4.26225 5.37734 2.56373 6.47051 1.84151 7.52828C1.12264 8.58111 0.5 9.73582 0.5 12.0792C0.5 14.4226 1.62832 18.4528 4.40285 21.1811C4.878 21.6483 5.50698 21.9995 6.22454 22.0213C7.5151 22.0604 8.30756 21.0943 9.93774 21.0943C11.5679 21.0943 12.0585 22.0213 13.5302 22.0213C14.1994 22.0213 14.9626 21.7165 15.7038 20.9283C16.6547 19.917 17.8347 17.9909 18.4358 16.1434C18.4358 16.1434 15.4258 14.9809 15.4622 11.6301C15.4924 8.8528 17.8509 7.48675 17.8509 7.48675C17.8509 7.48675 16.4735 5.29053 13.5453 5.29053C11.5226 5.30565 10.6169 6.34639 9.62452 6.3396Z" fill="#08101F"/>
        </Svg>
    )
}
export default AppleIcon