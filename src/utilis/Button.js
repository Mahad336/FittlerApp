import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ text, height, width, backgroundColor,borderWidth, onPress, margin, borderRadius, marginTop, marginHorizontal, color, fontSize, fontWeight }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ alignItems: "center",justifyContent:'center',borderWidth:borderWidth, height: height, width: width, borderRadius: borderRadius, margin: margin, backgroundColor: backgroundColor, marginHorizontal: marginHorizontal, marginTop: marginTop }}>
            <Text style={{ color: color, fontSize: fontSize, textAlign: 'center', fontWeight: fontWeight }}> {text}</Text>
        </TouchableOpacity>
    )
}
export default Button