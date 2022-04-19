import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface ClockProps {
    style?: any,
    onPress?: any,
    tintColor? : any
}
const Greytickicon = ({ style, onPress , tintColor }: ClockProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={tintColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke={tintColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

const TickIcon = ({ style, onPress }: ClockProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#41C96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#41C96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

const Closetickicon = ({ style, onPress }: ClockProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#C92519" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.16992 14.8299L14.8299 9.16992" stroke="#C92519" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M14.8299 14.8299L9.16992 9.16992" stroke="#C92519" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
export  {Greytickicon,TickIcon,Closetickicon}


