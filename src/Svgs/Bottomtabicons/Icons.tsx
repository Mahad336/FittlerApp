import React from 'react';
import Svg, { Circle, Defs, Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
    stroke?: any,
}
const HomeIcon = ({ style,stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 24 20" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 11.6364L11.6364 1L22.2727 11.6364" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.27295 8.36377V19.0001H19.0002V8.36377" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11.6367 19V12.4546" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
const OfficeIcon = ({ style,stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.6154 5.15381H2.38462C1.61991 5.15381 1 5.77372 1 6.53842V17.6153C1 18.38 1.61991 19 2.38462 19H17.6154C18.3801 19 19 18.38 19 17.6153V6.53842C19 5.77372 18.3801 5.15381 17.6154 5.15381Z" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.23081 1H12.7693C13.1365 1 13.4887 1.14588 13.7483 1.40554C14.008 1.66521 14.1539 2.01739 14.1539 2.38462V5.15385H5.84619V2.38462C5.84619 2.01739 5.99207 1.66521 6.25174 1.40554C6.5114 1.14588 6.86358 1 7.23081 1Z" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15381 10H14.8461" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15381 14.1538H14.8461" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const MessageIcon = ({ style,stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" stroke={stroke}  clip-rule="evenodd" d="M9.99712 0.250002C11.464 0.249167 12.9122 0.579419 14.2337 1.21614C15.5552 1.8529 16.716 2.77973 17.6295 3.92755C18.543 5.07537 19.1856 6.41457 19.5095 7.84532C19.8334 9.27608 19.8301 10.7615 19.5 12.1908C19.1699 13.6201 18.5214 14.9565 17.6029 16.1004C16.6844 17.2442 15.5196 18.1659 14.1953 18.7969C12.871 19.4279 11.4213 19.7518 9.95439 19.7446C8.57092 19.7377 7.20573 19.4365 5.94927 18.8619L1.13346 19.7327C0.867835 19.7808 0.596887 19.6823 0.424008 19.475C0.251129 19.2677 0.202991 18.9835 0.297963 18.7308L1.67501 15.0671C0.827762 13.6759 0.34158 12.0925 0.263857 10.4613C0.179943 8.70009 0.575298 6.94915 1.40781 5.39491C2.24033 3.84068 3.47883 2.54136 4.9914 1.63534C6.50391 0.729365 8.23383 0.250588 9.99691 0.250002M9.9978 1.75L9.99736 1L9.99759 1.75C8.50576 1.75047 7.04199 2.15557 5.76219 2.92216C4.48238 3.68875 3.43447 4.78812 2.73007 6.10317C2.02567 7.41823 1.69116 8.89972 1.76216 10.3899C1.83316 11.88 2.30702 13.323 3.13326 14.5651C3.26682 14.7659 3.29569 15.0186 3.21084 15.2444L2.16702 18.0215L5.91891 17.3431C6.07606 17.3147 6.23817 17.3372 6.38165 17.4073C7.49683 17.9522 8.72063 18.2384 9.96182 18.2446C11.203 18.2507 12.4296 17.9767 13.5501 17.4428C14.6706 16.9089 15.6562 16.129 16.4333 15.1612C17.2105 14.1934 17.7592 13.0626 18.0385 11.8533C18.3178 10.6439 18.3205 9.38707 18.0465 8.17649C17.7725 6.96591 17.2287 5.8328 16.4558 4.86162C15.6829 3.89043 14.7007 3.10623 13.5826 2.56746C12.4644 2.0287 11.239 1.74927 9.9978 1.75Z" fill="#798293" />
            <Path fill-rule="evenodd" stroke={stroke} clip-rule="evenodd" d="M5.09473 7.9209C5.09473 7.50668 5.43051 7.1709 5.84473 7.1709H14.15C14.5642 7.1709 14.9 7.50668 14.9 7.9209C14.9 8.33511 14.5642 8.6709 14.15 8.6709H5.84473C5.43051 8.6709 5.09473 8.33511 5.09473 7.9209Z" fill="#798293" />
            <Path fill-rule="evenodd" stroke={stroke} clip-rule="evenodd" d="M5.09473 12.0737C5.09473 11.6595 5.43051 11.3237 5.84473 11.3237H11.3816C11.7958 11.3237 12.1316 11.6595 12.1316 12.0737C12.1316 12.4879 11.7958 12.8237 11.3816 12.8237H5.84473C5.43051 12.8237 5.09473 12.4879 5.09473 12.0737Z" fill="#798293" />
        </Svg>
    )
}
const ProfileIcon = ({ style,stroke }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.0001 11.3845C11.9119 11.3845 13.4617 9.83472 13.4617 7.92296C13.4617 6.01121 11.9119 4.46143 10.0001 4.46143C8.08836 4.46143 6.53857 6.01121 6.53857 7.92296C6.53857 9.83472 8.08836 11.3845 10.0001 11.3845Z" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.0874 16.7846C4.70528 15.7704 5.57366 14.9322 6.60907 14.3505C7.64449 13.7689 8.81211 13.4634 9.99971 13.4634C11.1873 13.4634 12.3549 13.7689 13.3903 14.3505C14.4258 14.9322 15.2941 15.7704 15.912 16.7846" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke={stroke}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}
export { HomeIcon, OfficeIcon,MessageIcon,ProfileIcon }
