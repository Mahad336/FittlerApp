import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
}
const EmailIcon = ({ style }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 98 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M88.2001 72.2956C95.5501 68.9636 96.8486 51.8626 96.8486 39.0001C96.8486 26.1376 95.4031 9.03656 88.2001 5.70456C84.5741 2.37256 65.1701 1.46606 49.0001 1.46606C32.8301 1.46606 13.5241 2.37256 9.8001 5.70456C2.5971 9.03656 1.2251 26.1376 1.2251 39.0001C1.2251 51.8626 2.5971 68.9636 9.8001 72.2956C13.4506 75.6276 32.8546 76.5341 49.0001 76.5341C65.1456 76.5341 84.5006 75.7501 88.2001 72.2956Z" fill="#DBF0F9" stroke="#4AB5E3" stroke-width="2" stroke-miterlimit="10"/>
        <Path d="M11.4414 21.8501C20.3839 31.1846 33.3444 41.2786 37.3379 43.0181C40.9678 44.7983 44.957 45.7239 48.9999 45.7239C53.0428 45.7239 57.0321 44.7983 60.6619 43.0181C64.6309 41.4501 77.5914 31.2826 86.5339 21.8501" stroke="#4AB5E3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        <Path d="M35.3538 42.4055L18.3018 59.482" stroke="#4AB5E3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        <Path d="M62.6465 42.4055L79.723 59.482" stroke="#4AB5E3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        <Path d="M71.1729 8.44856C75.5753 8.43987 79.9452 9.20274 84.0844 10.7026" stroke="#4AB5E3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        </Svg>
    )
}
export default EmailIcon
