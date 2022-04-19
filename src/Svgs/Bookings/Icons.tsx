import React from 'react';
import Svg, { Circle, Defs, Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
    stroke?: any,
}
const BlackDotIcon = ({ style, stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.00002 5.15385C4.14707 5.15385 5.07694 4.22398 5.07694 3.07692C5.07694 1.92987 4.14707 1 3.00002 1C1.85297 1 0.923096 1.92987 0.923096 3.07692C0.923096 4.22398 1.85297 5.15385 3.00002 5.15385Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.00002 12.0767C4.14707 12.0767 5.07694 11.1468 5.07694 9.99977C5.07694 8.85272 4.14707 7.92285 3.00002 7.92285C1.85297 7.92285 0.923096 8.85272 0.923096 9.99977C0.923096 11.1468 1.85297 12.0767 3.00002 12.0767Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.00002 19C4.14707 19 5.07694 18.0702 5.07694 16.9231C5.07694 15.7761 4.14707 14.8462 3.00002 14.8462C1.85297 14.8462 0.923096 15.7761 0.923096 16.9231C0.923096 18.0702 1.85297 19 3.00002 19Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const SortIcon = ({ style, stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 7H21" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" />
            <Path d="M6 12H18" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" />
            <Path d="M10 17H14" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" />
        </Svg>

    )
}
const CalenderIcon = ({ style, stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="11.6666" cy="11" r="3" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.66663 6.66683H7.33329" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.99996 1.3335V3.3335" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11 1.3335V3.3335" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.66667 13.3335H4C2.89543 13.3335 2 12.4381 2 11.3335V4.3335C2 3.22893 2.89543 2.3335 4 2.3335H12C13.1046 2.3335 14 3.22893 14 4.3335V6.00016" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.66663 9.33333H5.33329" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11.5953 9.98877V11.1578L12.5168 11.7199" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
export { BlackDotIcon, SortIcon, CalenderIcon }
