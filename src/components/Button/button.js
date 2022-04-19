import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = ({ disabled,text,marginBottom, fontWeight,fontSize,marginHorizontal ,backgroundColor, onPress, marginTop, color, elevation, flex,height,width,borderWidth,borderColor }) => {
  

    
    return (
        <>
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ marginBottom: marginBottom,marginHorizontal:marginHorizontal,flex: flex,alignSelf:'center', backgroundColor: backgroundColor,borderWidth:borderWidth, height: height,width:width, borderRadius: 30, justifyContent: 'center', marginTop: marginTop, elevation: elevation,borderColor:'#4AB5E3'}}>
            <Text style={{ color: color, fontSize: fontSize, textAlign: 'center', fontWeight: fontWeight }}> {text}</Text>
        </TouchableOpacity>
        </>
    )
}

export default Button;
