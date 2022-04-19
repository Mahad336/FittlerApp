import React from 'react';
import Svg, {
  Path,
  Circle,
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';

// interface ClockProps {
//   style?: any;
//   onPress?: any;
// }
const DownarrowIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.5 1L4.81154 4.31154C4.83571 4.33729 4.8649 4.35782 4.89732 4.37185C4.92973 4.38589 4.96468 4.39313 5 4.39313C5.03532 4.39313 5.07027 4.38589 5.10268 4.37185C5.1351 4.35782 5.16429 4.33729 5.18846 4.31154L8.5 1"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const BellIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
      <Path
        d="M21 13.5059C22.3128 13.5059 23.5719 14.0274 24.5002 14.9557C25.4285 15.884 25.95 17.143 25.95 18.4559C25.95 23.9597 27.9577 25.0443 28.5 25.0443H13.5C14.0538 25.0443 16.05 23.9482 16.05 18.4559C16.05 17.143 16.5715 15.884 17.4998 14.9557C18.4281 14.0274 19.6872 13.5059 21 13.5059V13.5059Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.269 27.1558C19.3688 27.5389 19.5928 27.8781 19.906 28.1202C20.2192 28.3623 20.6039 28.4936 20.9998 28.4936C21.3957 28.4936 21.7804 28.3623 22.0936 28.1202C22.4068 27.8781 22.6308 27.5389 22.7306 27.1558"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="26"
        cy="17"
        r="4"
        fill="#C92519"
        stroke="white"
        stroke-width="2"
      />
      <Rect x="1" y="1" width="40" height="40" rx="20" stroke="#F2F3F5" />
    </Svg>
  );
};
const TimeIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.5 5.19238V7.50007L9.84462 10.2324"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const CalenderIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.42308 4.34619C3.17826 4.34619 2.94347 4.44344 2.77036 4.61655C2.59725 4.78966 2.5 5.02445 2.5 5.26927V13.577C2.5 13.8218 2.59725 14.0566 2.77036 14.2297C2.94347 14.4028 3.17826 14.5 3.42308 14.5H13.5769C13.8217 14.5 14.0565 14.4028 14.2296 14.2297C14.4027 14.0566 14.5 13.8218 14.5 13.577V5.26927C14.5 5.02445 14.4027 4.78966 14.2296 4.61655C14.0565 4.44344 13.8217 4.34619 13.5769 4.34619H11.7308"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.26953 2.5V6.19231"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.731 2.5V6.19231"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.26953 4.34619H9.88492"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.8078 11.269H6.19238"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.5 8.03857H14.5"
        stroke="#08101F"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const CrossIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13 1L1 13"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 1L13 13"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const NotactiveIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill="white"
      />
      <Path
        d="M10 18.5C5.30558 18.5 1.5 14.6944 1.5 10H-1.5C-1.5 16.3513 3.64873 21.5 10 21.5V18.5ZM18.5 10C18.5 14.6944 14.6944 18.5 10 18.5V21.5C16.3513 21.5 21.5 16.3513 21.5 10H18.5ZM10 1.5C14.6944 1.5 18.5 5.30558 18.5 10H21.5C21.5 3.64873 16.3513 -1.5 10 -1.5V1.5ZM10 -1.5C3.64873 -1.5 -1.5 3.64873 -1.5 10H1.5C1.5 5.30558 5.30558 1.5 10 1.5V-1.5Z"
        fill="#F2F3F5"
      />
    </Svg>
  );
};
const ActiveIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 10C0 4.47715 4.47715 0 10 0V0C15.5228 0 20 4.47715 20 10V10C20 15.5228 15.5228 20 10 20V20C4.47715 20 0 15.5228 0 10V10Z"
        fill="#4AB5E3"
      />
      <Circle cx="9.99984" cy="9.99984" r="3.33333" fill="white" />
      <Path
        d="M10 19C5.02944 19 1 14.9706 1 10H-1C-1 16.0751 3.92487 21 10 21V19ZM19 10C19 14.9706 14.9706 19 10 19V21C16.0751 21 21 16.0751 21 10H19ZM10 1C14.9706 1 19 5.02944 19 10H21C21 3.92487 16.0751 -1 10 -1V1ZM10 -1C3.92487 -1 -1 3.92487 -1 10H1C1 5.02944 5.02944 1 10 1V-1Z"
        fill="#4AB5E3"
      />
    </Svg>
  );
};
const DotIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 2 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="1" cy="1" r="1" fill="#798293" />
      <Circle cx="1" cy="7" r="1" fill="#798293" />
      <Circle cx="1" cy="13" r="1" fill="#798293" />
    </Svg>
  );
};
const EditIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.999878 19H16.2239"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.30409 14.156L5.1521 14.9034L5.8441 10.696L15.1584 1.40938C15.2871 1.27966 15.4401 1.1767 15.6088 1.10644C15.7774 1.03618 15.9583 1 16.141 1C16.3237 1 16.5046 1.03618 16.6733 1.10644C16.842 1.1767 16.995 1.27966 17.1237 1.40938L18.5907 2.87642C18.7204 3.00508 18.8234 3.15815 18.8937 3.32681C18.9639 3.49546 19.0001 3.67636 19.0001 3.85906C19.0001 4.04177 18.9639 4.22266 18.8937 4.39131C18.8234 4.55997 18.7204 4.71304 18.5907 4.8417L9.30409 14.156Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const DeleteIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.69226 5.1543H18.3076"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.76904 5.1543H16.2306V17.6158C16.2306 17.9831 16.0847 18.3352 15.825 18.5949C15.5654 18.8546 15.2132 19.0005 14.846 19.0005H5.15366C4.78644 19.0005 4.43425 18.8546 4.17459 18.5949C3.91492 18.3352 3.76904 17.9831 3.76904 17.6158V5.1543Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.53845 5.15385V4.46154C6.53845 3.54348 6.90315 2.66303 7.55231 2.01386C8.20148 1.3647 9.08193 1 9.99999 1C10.918 1 11.7985 1.3647 12.4477 2.01386C13.0968 2.66303 13.4615 3.54348 13.4615 4.46154V5.15385"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.9231 7.92383V15.5392"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.0767 7.92383V15.5392"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export {
  DownarrowIcon,
  BellIcon,
  TimeIcon,
  CalenderIcon,
  CrossIcon,
  NotactiveIcon,
  ActiveIcon,
  DotIcon,
  EditIcon,
  DeleteIcon,
};
