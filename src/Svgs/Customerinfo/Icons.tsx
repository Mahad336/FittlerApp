import React from 'react';
import Svg, { Path,Rect } from 'react-native-svg'

interface AppleProps {
    style?: any,
    onPress?: any,
}
const LeftarrowIcon = ({ style, onPress }: AppleProps) => {
    return (

        <Svg style={style} onPress={onPress} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.78625 1L1.16317 7.62308C1.11166 7.67142 1.07061 7.72981 1.04254 7.79464C1.01448 7.85947 1 7.92936 1 8C1 8.07064 1.01448 8.14054 1.04254 8.20536C1.07061 8.27019 1.11166 8.32858 1.16317 8.37692L7.78625 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
const WhitedotIcon = ({ style, onPress }: AppleProps) => {
    return (

        <Svg style={style} onPress={onPress} viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.00002 5.15385C4.14707 5.15385 5.07694 4.22398 5.07694 3.07692C5.07694 1.92987 4.14707 1 3.00002 1C1.85297 1 0.923096 1.92987 0.923096 3.07692C0.923096 4.22398 1.85297 5.15385 3.00002 5.15385Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.00002 12.0769C4.14707 12.0769 5.07694 11.1471 5.07694 10C5.07694 8.85297 4.14707 7.9231 3.00002 7.9231C1.85297 7.9231 0.923096 8.85297 0.923096 10C0.923096 11.1471 1.85297 12.0769 3.00002 12.0769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.00002 19C4.14707 19 5.07694 18.0702 5.07694 16.9231C5.07694 15.7761 4.14707 14.8462 3.00002 14.8462C1.85297 14.8462 0.923096 15.7761 0.923096 16.9231C0.923096 18.0702 1.85297 19 3.00002 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const PremiumIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.5 2.42319L7.42308 4.50011L5 1.03857L2.57692 4.50011L0.5 2.42319V6.92319C0.5 7.19861 0.609409 7.46274 0.804158 7.65749C0.998908 7.85224 1.26304 7.96165 1.53846 7.96165H8.46154C8.73696 7.96165 9.00109 7.85224 9.19584 7.65749C9.39059 7.46274 9.5 7.19861 9.5 6.92319V2.42319Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const DocIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} onPress={onPress} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M11.0769 12.0769C11.0769 12.3217 10.9797 12.5565 10.8066 12.7296C10.6335 12.9027 10.3987 13 10.1539 13H1.84616C1.60134 13 1.36655 12.9027 1.19344 12.7296C1.02033 12.5565 0.92308 12.3217 0.92308 12.0769V1.92308C0.92308 1.67826 1.02033 1.44347 1.19344 1.27036C1.36655 1.09725 1.60134 1 1.84616 1H6.46154L11.0769 5.61538V12.0769Z" stroke="#4AB5E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M3.69243 4.69238H5.53858" stroke="#4AB5E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M3.69243 7.46143H8.30781" stroke="#4AB5E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M3.69243 10.231H8.30781" stroke="#4AB5E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
const ChatIcon = ({ style, onPress }: AppleProps) => {
    return (
      <Svg
        style={style}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect width="40" height="40" rx="20" fill="#6EC4E9" />
        <Path
          d="M19.9973 11.0024C18.3699 11.0029 16.773 11.4449 15.3768 12.2812C13.9806 13.1175 12.8374 14.3168 12.0689 15.7515C11.3005 17.1861 10.9355 18.8023 11.013 20.428C11.0905 22.0536 11.6074 23.6278 12.5088 24.9829L11 28.9971L16.0524 28.0836C17.2689 28.6781 18.604 28.9903 19.9581 28.997C21.3122 29.0037 22.6503 28.7047 23.8727 28.1223C25.0951 27.5399 26.1703 26.689 27.0181 25.6332C27.8659 24.5774 28.4645 23.3438 28.7692 22.0245C29.0739 20.7051 29.0769 19.334 28.778 18.0133C28.479 16.6927 27.8858 15.4565 27.0426 14.397C26.1994 13.3375 25.128 12.482 23.9081 11.8942C22.6882 11.3065 21.3514 11.0016 19.9973 11.0024V11.0024Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.8447 17.9233H24.15"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.8447 22.0762H21.3816"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
}
const SimplPremiumIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.5 2.42319L7.42308 4.50011L5 1.03857L2.57692 4.50011L0.5 2.42319V6.92319C0.5 7.19861 0.609409 7.46274 0.804158 7.65749C0.998908 7.85224 1.26304 7.96165 1.53846 7.96165H8.46154C8.73696 7.96165 9.00109 7.85224 9.19584 7.65749C9.39059 7.46274 9.5 7.19861 9.5 6.92319V2.42319Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export {
  LeftarrowIcon,
  WhitedotIcon,
  PremiumIcon,
  DocIcon,
  ChatIcon,
  SimplPremiumIcon,
};
