import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface AppleProps {
    style?: any,
}
const BusinessName = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.6154 5.15381H2.38462C1.61991 5.15381 1 5.77372 1 6.53842V17.6153C1 18.38 1.61991 19 2.38462 19H17.6154C18.3801 19 19 18.38 19 17.6153V6.53842C19 5.77372 18.3801 5.15381 17.6154 5.15381Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.23081 1H12.7693C13.1365 1 13.4887 1.14588 13.7483 1.40554C14.008 1.66521 14.1539 2.01739 14.1539 2.38462V5.15385H5.84619V2.38462C5.84619 2.01739 5.99207 1.66521 6.25174 1.40554C6.5114 1.14588 6.86358 1 7.23081 1Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15381 10H14.8461" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15381 14.1538H14.8461" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
const AddressIcon = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.99538 17.6154L1 19V2.38462L6.99538 1V17.6154Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.99561 17.6154L13.0048 19V2.38462L6.99561 1V17.6154Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M18.9998 17.6154L13.0044 19V2.38462L18.9998 1V17.6154Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const CityIcon = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1.69238 13.4615H4.11546C4.7581 13.4615 5.37442 13.2063 5.82883 12.7518C6.28325 12.2974 6.53854 11.6811 6.53854 11.0385V8.96154C6.53854 8.3189 6.79382 7.70258 7.24824 7.24816C7.70265 6.79375 8.31897 6.53846 8.96161 6.53846C9.60425 6.53846 10.2206 6.28317 10.675 5.82876C11.1294 5.37434 11.3847 4.75803 11.3847 4.11539V1.09692" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M18.9997 9.86146C18.3064 9.50175 17.5376 9.31192 16.7566 9.30762H13.8074C13.1647 9.30762 12.5484 9.56291 12.094 10.0173C11.6396 10.4717 11.3843 11.0881 11.3843 11.7307C11.3843 12.3733 11.6396 12.9897 12.094 13.4441C12.5484 13.8985 13.1647 14.1538 13.8074 14.1538C14.2664 14.1538 14.7066 14.3361 15.0312 14.6607C15.3558 14.9853 15.5381 15.4255 15.5381 15.8845V17.0892" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}
const StateIcon = ({ style }: AppleProps) => {
    return (

        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.0769 19L19 1L1 7.92308L9.30769 10.6923L12.0769 19Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
const ZipCodeIcon = ({ style }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 12.8076H2.38462C2.01739 12.8076 1.66521 12.6618 1.40554 12.4021C1.14588 12.1424 1 11.7902 1 11.423V3.11533C1 2.74811 1.14588 2.39592 1.40554 2.13626C1.66521 1.87659 2.01739 1.73071 2.38462 1.73071H17.6154C17.9826 1.73071 18.3348 1.87659 18.5945 2.13626C18.8541 2.39592 19 2.74811 19 3.11533V3.80764" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15381 5.88452V8.65375" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M18.9998 9.80313C18.9998 11.5893 15.8844 16.2693 15.8844 16.2693C15.8844 16.2693 12.769 11.5893 12.769 9.80313C12.769 8.97688 13.0973 8.18447 13.6815 7.60022C14.2658 7.01597 15.0582 6.68774 15.8844 6.68774C16.7107 6.68774 17.5031 7.01597 18.0873 7.60022C18.6716 8.18447 18.9998 8.97688 18.9998 9.80313V9.80313Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M15.8847 10.0385C16.0759 10.0385 16.2309 9.88352 16.2309 9.69235C16.2309 9.50117 16.0759 9.34619 15.8847 9.34619C15.6936 9.34619 15.5386 9.50117 15.5386 9.69235C15.5386 9.88352 15.6936 10.0385 15.8847 10.0385Z" stroke="#08101F" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
const PhonenmberIcon = ({ style }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.4261 18.2824C13.277 18.8313 14.291 19.0706 15.2975 18.9598C16.304 18.8491 17.2418 18.3952 17.953 17.6744L18.5748 17.0665C18.8474 16.7876 19 16.4132 19 16.0233C19 15.6333 18.8474 15.2589 18.5748 14.9801L15.9357 12.3686C15.6592 12.0969 15.287 11.9446 14.8994 11.9446C14.5117 11.9446 14.1396 12.0969 13.8631 12.3686V12.3686C13.5843 12.6412 13.2098 12.7938 12.8199 12.7938C12.4299 12.7938 12.0555 12.6412 11.7767 12.3686L7.6315 8.22342C7.49322 8.08715 7.38341 7.92474 7.30846 7.74565C7.23351 7.56656 7.19491 7.37436 7.19491 7.18021C7.19491 6.98607 7.23351 6.79387 7.30846 6.61477C7.38341 6.43568 7.49322 6.27328 7.6315 6.13701V6.13701C7.90322 5.86052 8.05548 5.48837 8.05548 5.10071C8.05548 4.71306 7.90322 4.34091 7.6315 4.06442L5.00622 1.43914C4.7274 1.16654 4.35295 1.01392 3.96301 1.01392C3.57308 1.01392 3.19863 1.16654 2.91981 1.43914L2.31185 2.06092C1.59107 2.77215 1.13715 3.70987 1.02643 4.71641C0.915715 5.72295 1.15494 6.73692 1.70389 7.58782C4.56413 11.8031 8.20345 15.433 12.4261 18.2824V18.2824Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
export { BusinessName, AddressIcon, CityIcon, StateIcon, ZipCodeIcon, PhonenmberIcon }
