import React from 'react';
import Svg, { Path, Circle, Defs, Stop,LinearGradient } from 'react-native-svg'

interface ClockProps {
    style?: any,
}
const SuccessIcon = ({ style }: ClockProps) => {
    return (
        <Svg style={style} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="36" cy="36" r="36" fill="#EDEFFD" />
            <Path d="M49.9449 23.0605C48.3936 21.8786 46.2924 21.107 44.1993 23.0605C42.9517 23.8813 39.5454 27.1645 35.8108 32.0893C34.834 33.3861 33.9065 34.6173 33.0611 35.7746C29.9913 33.4436 27.57 31.7938 26.5686 31.6707C24.8696 31.014 23.031 32.8608 21.8491 34.4121C20.6671 35.9634 19.3128 38.1549 20.3962 39.6078C20.782 40.5435 22.9653 42.5052 26.0351 44.8444C29.7205 47.6433 32.3799 49.7692 33.9394 49.9662C36.3279 50.8937 38.0434 48.0702 44.9134 39.0004C48.648 34.0756 51.0283 29.9716 51.4798 28.5845C52.7602 26.0564 51.4552 24.2425 49.9449 23.0605Z" fill="#92D3EE" stroke="#4A59E3" stroke-miterlimit="10" />
            <Defs>
                <LinearGradient id="paint0_linear_915_15237" x1="13.4195" y1="14.1083" x2="62.6672" y2="61.3041" gradientUnits="userSpaceOnUse">
                    <Stop stop-color="#92D3EE" />
                    <Stop offset="1" stop-color="#929CEE" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}
export default SuccessIcon


