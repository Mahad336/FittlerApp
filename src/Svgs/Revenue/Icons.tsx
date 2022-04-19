import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg'

interface AppleProps {
    style?: any,
    onPress?: any,
}
const BlackarrowIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.78625 1L1.16317 7.62308C1.11166 7.67142 1.07061 7.72981 1.04254 7.79464C1.01448 7.85947 1 7.92936 1 8C1 8.07064 1.01448 8.14054 1.04254 8.20536C1.07061 8.27019 1.11166 8.32858 1.16317 8.37692L7.78625 15" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const GreenarrowIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4 10V1" stroke="#41C96E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.42306 3.42308L3.99998 1L1.5769 3.42308" stroke="#41C96E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const BluecircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" fill="#4AB5E3" />
        </Svg>

    )
}
const GreencircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" fill="#41C96E" />
        </Svg>
    )
}
const YellowcircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" fill="#EAB411" />
        </Svg>

    )
}
const BigBluecircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect y="0.5" width="32" height="32" rx="10" fill="#EDF8FD" />
            <Rect x="8" y="8.5" width="16" height="16" rx="8" fill="#4AB5E3" />
        </Svg>
    )
}
const BigGreencircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="32" height="32" rx="10" fill="#EEFAF2" />
            <Rect x="8" y="8" width="16" height="16" rx="8" fill="#41C96E" />
        </Svg>

    )
}
const BigYellowcircleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="32" height="32" rx="10" fill="#FDF8E9" />
            <Rect x="8" y="8" width="16" height="16" rx="8" fill="#EAB411" />
        </Svg>
    )
}
export { BlackarrowIcon, GreenarrowIcon, BluecircleIcon, GreencircleIcon, YellowcircleIcon, BigBluecircleIcon, BigGreencircleIcon, BigYellowcircleIcon }
