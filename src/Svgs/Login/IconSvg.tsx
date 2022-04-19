import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface ClockProps {
  style?: any;
  onPress?: any;
}
const UserIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.0001 13.3845C13.9119 13.3845 15.4617 11.8347 15.4617 9.92296C15.4617 8.01121 13.9119 6.46143 12.0001 6.46143C10.0884 6.46143 8.53857 8.01121 8.53857 9.92296C8.53857 11.8347 10.0884 13.3845 12.0001 13.3845Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.0874 18.7846C6.70528 17.7704 7.57366 16.9322 8.60907 16.3505C9.64449 15.7689 10.8121 15.4634 11.9997 15.4634C13.1873 15.4634 14.3549 15.7689 15.3903 16.3505C16.4258 16.9322 17.2941 17.7704 17.912 18.7846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const UserHighlightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.9359 14.7267C13.9242 14.7267 15.5359 13.0985 15.5359 11.09C15.5359 9.08155 13.9242 7.45337 11.9359 7.45337C9.94771 7.45337 8.33594 9.08155 8.33594 11.09C8.33594 13.0985 9.94771 14.7267 11.9359 14.7267Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3361 22.0001C17.7304 20.8128 16.8128 19.817 15.6839 19.1218C14.5549 18.4266 13.2583 18.0588 11.9361 18.0588C10.614 18.0588 9.31733 18.4266 8.18841 19.1218C7.05948 19.817 6.14185 20.8128 5.53613 22.0001"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.936 17.2481C21.0714 15.7521 21.7698 13.965 21.9521 12.0889C22.1345 10.2128 21.7935 8.32258 20.9678 6.63205C20.1421 4.94151 18.8646 3.51809 17.2798 2.52279C15.695 1.52748 13.8661 1 12 1C10.1339 1 8.305 1.52748 6.72018 2.52279C5.13537 3.51809 3.85788 4.94151 3.03217 6.63205C2.20647 8.32258 1.86551 10.2128 2.04786 12.0889C2.23021 13.965 2.92858 15.7521 4.064 17.2481"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const LockIcon = ({style, onPress}: ClockProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.53809 12.6922C8.53809 12.325 8.68396 11.9728 8.94363 11.7132C9.2033 11.4535 9.55548 11.3076 9.9227 11.3076H19.615C19.9822 11.3076 20.3344 11.4535 20.5941 11.7132C20.8537 11.9728 20.9996 12.325 20.9996 12.6922V19.6153C20.9996 19.9825 20.8537 20.3347 20.5941 20.5944C20.3344 20.854 19.9822 20.9999 19.615 20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.92285 11.3077V7.84615C9.92285 6.56087 10.4334 5.32824 11.3423 4.41941C12.2511 3.51058 13.4837 3 14.769 3C16.0543 3 17.2869 3.51058 18.1958 4.41941C19.1046 5.32824 19.6152 6.56087 19.6152 7.84615V11.3077"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.76923 20.9999C7.29863 20.9999 8.53846 19.7601 8.53846 18.2307C8.53846 16.7013 7.29863 15.4614 5.76923 15.4614C4.23983 15.4614 3 16.7013 3 18.2307C3 19.7601 4.23983 20.9999 5.76923 20.9999Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.53809 18.2307H15.4612V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 18.2307V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const LockHighlightIcon = ({style, onPress}: ClockProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.76904 12.8461C7.76904 12.3973 7.94734 11.9668 8.26471 11.6495C8.58208 11.3321 9.01252 11.1538 9.46135 11.1538H21.3075C21.7563 11.1538 22.1868 11.3321 22.5041 11.6495C22.8215 11.9668 22.9998 12.3973 22.9998 12.8461V21.3077C22.9998 21.7565 22.8215 22.1869 22.5041 22.5043C22.1868 22.8217 21.7563 23 21.3075 23"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.46143 11.1538V6.92308C9.46143 5.35218 10.0855 3.84562 11.1963 2.73483C12.307 1.62404 13.8136 1 15.3845 1C16.9554 1 18.462 1.62404 19.5727 2.73483C20.6835 3.84562 21.3076 5.35218 21.3076 6.92308V11.1538"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.38462 22.9999C6.25389 22.9999 7.76923 21.4846 7.76923 19.6153C7.76923 17.7461 6.25389 16.2307 4.38462 16.2307C2.51534 16.2307 1 17.7461 1 19.6153C1 21.4846 2.51534 22.9999 4.38462 22.9999Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.76904 19.6152H16.2306V22.9998"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 19.6152V22.9998"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const CrownImage = () => {
  return (
    <Svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.5 8.14501V3.35501C1.5 2.69001 1.885 2.53001 2.355 3.00001L3.65 4.29501C3.845 4.49001 4.165 4.49001 4.355 4.29501L6.145 2.50001C6.34 2.30501 6.66 2.30501 6.85 2.50001L8.645 4.29501C8.84 4.49001 9.16 4.49001 9.35 4.29501L10.645 3.00001C11.115 2.53001 11.5 2.69001 11.5 3.35501V8.15001C11.5 9.65001 10.5 10.65 9 10.65H4C2.62 10.645 1.5 9.52501 1.5 8.14501Z"
        fill="#EAB411"
        stroke="#EAB411"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export {UserIcon, UserHighlightIcon, LockIcon, LockHighlightIcon, CrownImage};
