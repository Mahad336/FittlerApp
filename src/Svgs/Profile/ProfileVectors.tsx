import React from 'react';
import Svg, {Circle, Defs, Path, Rect} from 'react-native-svg';

interface AppleProps {
  style?: any;
  onPress?: any;
}
const ProfileIconCount = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="16"
        cy="16"
        r="15"
        fill="#EDF8FD"
        stroke="white"
        stroke-width="2"
      />
      <Path
        d="M5.63625 19H11.1912V17.746H7.77025L9.35425 16.47C10.6523 15.469 11.1143 14.666 11.1143 13.665C11.1143 12.268 9.97025 11.311 8.47425 11.311C7.25325 11.311 6.34025 11.85 5.62525 12.785L6.51625 13.61C7.06625 12.95 7.63825 12.543 8.43025 12.543C9.11225 12.543 9.71725 12.983 9.71725 13.698C9.71725 14.314 9.37625 14.886 8.41925 15.656L5.63625 17.878V19ZM14.9592 19.132C16.6862 19.132 17.8632 18.12 17.8632 16.558C17.8632 15.04 16.7082 14.182 15.3662 14.182C14.7172 14.182 14.2222 14.38 13.8372 14.644L13.9032 12.697H17.4562V11.443H12.6162L12.5062 15.458L13.4412 15.854C13.8702 15.524 14.3872 15.326 14.9812 15.326C15.8832 15.326 16.4882 15.843 16.4882 16.613C16.4882 17.35 15.9052 17.944 14.9812 17.944C14.2222 17.944 13.5292 17.559 12.9462 16.987L12.1322 17.966C12.8032 18.67 13.7272 19.132 14.9592 19.132ZM24.1808 14.754H22.1678V12.708H20.9688V14.754H18.9558V15.898H20.9688V17.933H22.1678V15.898H24.1808V14.754Z"
        fill="#4AB5E3"
      />
    </Svg>
  );
};

const ProfileCameraIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="1" y="1" width="24" height="24" rx="12" fill="#4AB5E3" />
      <Path
        d="M19 11.154C19 10.9092 18.9027 10.6744 18.7296 10.5013C18.5565 10.3282 18.3217 10.2309 18.0769 10.2309H16.2308L14.8462 8.38477H11.1538L9.76923 10.2309H7.92308C7.67826 10.2309 7.44347 10.3282 7.27036 10.5013C7.09725 10.6744 7 10.9092 7 11.154V16.6925C7 16.9373 7.09725 17.1721 7.27036 17.3452C7.44347 17.5183 7.67826 17.6155 7.92308 17.6155H18.0769C18.3217 17.6155 18.5565 17.5183 18.7296 17.3452C18.9027 17.1721 19 16.9373 19 16.6925V11.154Z"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13 15.5386C14.1471 15.5386 15.0769 14.6087 15.0769 13.4617C15.0769 12.3146 14.1471 11.3848 13 11.3848C11.853 11.3848 10.9231 12.3146 10.9231 13.4617C10.9231 14.6087 11.853 15.5386 13 15.5386Z"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="12"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
};
const ProfileBackIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.78625 1L1.16317 7.62308C1.11166 7.67142 1.07061 7.72981 1.04254 7.79464C1.01448 7.85947 1 7.92936 1 8C1 8.07064 1.01448 8.14054 1.04254 8.20536C1.07061 8.27019 1.11166 8.32858 1.16317 8.37692L7.78625 15"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileEmailIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 13H11.1493"
        stroke="#4AB5E3"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.53606 9.77067L3.76807 10.2689L4.2294 7.46401L10.4389 1.27292C10.5247 1.18644 10.6268 1.1178 10.7392 1.07096C10.8516 1.02412 10.9722 1 11.094 1C11.2158 1 11.3364 1.02412 11.4489 1.07096C11.5613 1.1178 11.6633 1.18644 11.7491 1.27292L12.7271 2.25095C12.8136 2.33672 12.8823 2.43877 12.9291 2.55121C12.976 2.66364 13.0001 2.78424 13.0001 2.90604C13.0001 3.02784 12.976 3.14844 12.9291 3.26088C12.8823 3.37331 12.8136 3.47536 12.7271 3.56113L6.53606 9.77067Z"
        stroke="#4AB5E3"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileWalletIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.9231 10.691V7.92172C16.9231 7.5545 16.7772 7.20232 16.5175 6.94265C16.2579 6.68299 15.9057 6.53711 15.5385 6.53711H2.38462C2.01739 6.53711 1.66521 6.68299 1.40554 6.94265C1.14588 7.20232 1 7.5545 1 7.92172V17.614C1 17.9813 1.14588 18.3334 1.40554 18.5931C1.66521 18.8528 2.01739 18.9986 2.38462 18.9986H15.5385C15.9057 18.9986 16.2579 18.8528 16.5175 18.5931C16.7772 18.3334 16.9231 17.9813 16.9231 17.614V14.1525"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.62451 3.07563L13.4753 1.0264C13.5635 1.00155 13.6558 0.994822 13.7467 1.00664C13.8376 1.01845 13.9252 1.04856 14.0041 1.09514C14.083 1.14173 14.1517 1.20382 14.206 1.27768C14.2603 1.35153 14.299 1.43562 14.3199 1.52486L14.7076 3.07563"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3077 10.6914H14.8461C14.4638 10.6914 14.1538 11.0014 14.1538 11.3837V13.4606C14.1538 13.843 14.4638 14.1529 14.8461 14.1529H18.3077C18.69 14.1529 19 13.843 19 13.4606V11.3837C19 11.0014 18.69 10.6914 18.3077 10.6914Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileSubscriptionIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 3.84638L14.8462 8.00022L10 1.07715L5.15385 8.00022L1 3.84638V12.8464C1 13.3972 1.21882 13.9255 1.60832 14.315C1.99782 14.7045 2.52609 14.9233 3.07692 14.9233H16.9231C17.4739 14.9233 18.0022 14.7045 18.3917 14.315C18.7812 13.9255 19 13.3972 19 12.8464V3.84638Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileCardIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.42285H2.38462C1.61991 1.42285 1 2.04276 1 2.80747V13.1921C1 13.9568 1.61991 14.5767 2.38462 14.5767H17.6154C18.3801 14.5767 19 13.9568 19 13.1921V2.80747C19 2.04276 18.3801 1.42285 17.6154 1.42285Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 6.26855H19"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 11.1152H15.5383"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileNotificationIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 1.00684C11.5754 1.00684 13.0862 1.63266 14.2002 2.74662C15.3142 3.86059 15.94 5.37145 15.94 6.94684C15.94 13.5514 18.3492 14.853 19 14.853H1C1.66462 14.853 4.06 13.5376 4.06 6.94684C4.06 5.37145 4.68582 3.86059 5.79979 2.74662C6.91375 1.63266 8.42461 1.00684 10 1.00684V1.00684Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.92297 17.3867C8.04266 17.8464 8.3115 18.2535 8.68736 18.544C9.06321 18.8345 9.52484 18.9922 9.9999 18.9922C10.475 18.9922 10.9366 18.8345 11.3124 18.544C11.6883 18.2535 11.9571 17.8464 12.0768 17.3867"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileChangePasswordIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6153 13.0186H12.7691C12.0044 13.0186 11.3845 13.6385 11.3845 14.4032V17.6155C11.3845 18.3802 12.0044 19.0001 12.7691 19.0001H17.6153C18.38 19.0001 18.9999 18.3802 18.9999 17.6155V14.4032C18.9999 13.6385 18.38 13.0186 17.6153 13.0186Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9063 13.0458V11.8412C17.7792 11.2152 17.4396 10.6524 16.945 10.2481C16.4504 9.84388 15.8313 9.62305 15.1925 9.62305C14.5537 9.62305 13.9346 9.84388 13.44 10.2481C12.9454 10.6524 12.6058 11.2152 12.4786 11.8412V13.0458"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.9232 10.6923H2.38474C2.01751 10.6923 1.66533 10.5464 1.40567 10.2868C1.146 10.0271 1.00012 9.67491 1.00012 9.30769V2.38462C1.00012 2.01739 1.146 1.66521 1.40567 1.40554C1.66533 1.14588 2.01751 1 2.38474 1H14.8463C15.2135 1 15.5657 1.14588 15.8253 1.40554C16.085 1.66521 16.2309 2.01739 16.2309 2.38462V5.15385"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.84648 6.53891C6.22883 6.53891 6.53879 6.22896 6.53879 5.8466C6.53879 5.46425 6.22883 5.1543 5.84648 5.1543C5.46413 5.1543 5.15417 5.46425 5.15417 5.8466C5.15417 6.22896 5.46413 6.53891 5.84648 6.53891Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3847 6.53891C11.767 6.53891 12.077 6.22896 12.077 5.8466C12.077 5.46425 11.767 5.1543 11.3847 5.1543C11.0023 5.1543 10.6924 5.46425 10.6924 5.8466C10.6924 6.22896 11.0023 6.53891 11.3847 6.53891Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileLogoutIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.8462 16.3846V19.4615C14.8462 19.8696 14.6841 20.2609 14.3955 20.5494C14.107 20.8379 13.7157 21 13.3077 21H2.53846C2.13044 21 1.73912 20.8379 1.4506 20.5494C1.16209 20.2609 1 19.8696 1 19.4615V2.53846C1 2.13044 1.16209 1.73912 1.4506 1.4506C1.73912 1.16209 2.13044 1 2.53846 1H13.3077C13.7157 1 14.107 1.16209 14.3955 1.4506C14.6841 1.73912 14.8462 2.13044 14.8462 2.53846V5.61538"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2307 11H20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9229 7.92383L20.9998 11.0008L17.9229 14.0777"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileDotsIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 6 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.00002 5.15385C4.14707 5.15385 5.07694 4.22398 5.07694 3.07692C5.07694 1.92987 4.14707 1 3.00002 1C1.85297 1 0.923096 1.92987 0.923096 3.07692C0.923096 4.22398 1.85297 5.15385 3.00002 5.15385Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.00002 12.0767C4.14707 12.0767 5.07694 11.1468 5.07694 9.99977C5.07694 8.85272 4.14707 7.92285 3.00002 7.92285C1.85297 7.92285 0.923096 8.85272 0.923096 9.99977C0.923096 11.1468 1.85297 12.0767 3.00002 12.0767Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.00002 18.9995C4.14707 18.9995 5.07694 18.0697 5.07694 16.9226C5.07694 15.7756 4.14707 14.8457 3.00002 14.8457C1.85297 14.8457 0.923096 15.7756 0.923096 16.9226C0.923096 18.0697 1.85297 18.9995 3.00002 18.9995Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ProfileForwardIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 1.33301L5.41538 5.74839C5.44972 5.78062 5.47709 5.81955 5.4958 5.86277C5.51451 5.90598 5.52417 5.95258 5.52417 5.99967C5.52417 6.04677 5.51451 6.09337 5.4958 6.13658C5.47709 6.1798 5.44972 6.21873 5.41538 6.25096L1 10.6663"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileCircle = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="48" cy="48" r="48" fill="#EDF8FD" />
      <Path
        d="M40.3973 56.9932H55.6163C56.3804 56.9932 56.9999 56.3737 56.9999 55.6096V40.3905C56.9999 39.6264 56.3804 39.007 55.6163 39.007H40.3973C39.6331 39.007 39.0137 39.6264 39.0137 40.3905V55.6096C39.0137 56.3737 39.6331 56.9932 40.3973 56.9932Z"
        stroke="#4AB5E3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M51.1061 47.3082C52.4433 47.3082 53.5273 46.2242 53.5273 44.887C53.5273 43.5498 52.4433 42.4658 51.1061 42.4658C49.7689 42.4658 48.6849 43.5498 48.6849 44.887C48.6849 46.2242 49.7689 47.3082 51.1061 47.3082Z"
        stroke="#4AB5E3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M51.3136 56.9934C50.8681 54.6206 49.5941 52.4832 47.7188 50.9627C45.8435 49.4422 43.489 48.6375 41.0753 48.6921C40.379 48.6902 39.684 48.7551 39 48.8858"
        stroke="#4AB5E3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M56.9862 52.0263C55.8718 51.65 54.7035 51.4583 53.5273 51.459C52.0385 51.4558 50.5648 51.7571 49.1968 52.3445"
        stroke="#4AB5E3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileBusinessIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.7692 3.76953H2.46152C1.69682 3.76953 1.0769 4.38944 1.0769 5.15415V17.6157C1.0769 18.3804 1.69682 19.0003 2.46152 19.0003H10.7692C11.5339 19.0003 12.1538 18.3804 12.1538 17.6157V5.15415C12.1538 4.38944 11.5339 3.76953 10.7692 3.76953Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84625 7.23047H9.38471"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84625 10.6924H9.38471"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84625 14.1543H6.61548"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.53839 1H13.5384C13.9056 1 14.2578 1.14588 14.5175 1.40554C14.7771 1.66521 14.923 2.01739 14.923 2.38462V15.5385"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileEmailIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.73047H2.38462C1.61991 1.73047 1 2.35038 1 3.11508V14.8843C1 15.649 1.61991 16.2689 2.38462 16.2689H17.6154C18.3801 16.2689 19 15.649 19 14.8843V3.11508C19 2.35038 18.3801 1.73047 17.6154 1.73047Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 3.46094L9.11385 10.384C9.36264 10.5912 9.6762 10.7047 10 10.7047C10.3238 10.7047 10.6374 10.5912 10.8862 10.384L19 3.46094"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfilePhoneIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.4261 18.2821C13.277 18.8311 14.291 19.0703 15.2975 18.9596C16.304 18.8489 17.2418 18.395 17.953 17.6742L18.5748 17.0662C18.8474 16.7874 19 16.413 19 16.023C19 15.6331 18.8474 15.2586 18.5748 14.9798L15.9357 12.3684C15.6592 12.0966 15.287 11.9444 14.8994 11.9444C14.5117 11.9444 14.1396 12.0966 13.8631 12.3684V12.3684C13.5843 12.6409 13.2098 12.7936 12.8199 12.7936C12.4299 12.7936 12.0555 12.6409 11.7767 12.3684L7.6315 8.22317C7.49322 8.0869 7.38341 7.9245 7.30846 7.74541C7.23351 7.56632 7.19491 7.37411 7.19491 7.17997C7.19491 6.98583 7.23351 6.79362 7.30846 6.61453C7.38341 6.43544 7.49322 6.27304 7.6315 6.13677V6.13677C7.90322 5.86028 8.05548 5.48813 8.05548 5.10047C8.05548 4.71281 7.90322 4.34066 7.6315 4.06418L5.00622 1.43889C4.7274 1.1663 4.35295 1.01367 3.96301 1.01367C3.57308 1.01367 3.19863 1.1663 2.91981 1.43889L2.31185 2.06067C1.59107 2.7719 1.13715 3.70963 1.02643 4.71617C0.915715 5.72271 1.15494 6.73668 1.70389 7.58758C4.56413 11.8029 8.20345 15.4328 12.4261 18.2821V18.2821Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAddressIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.99538 17.6154L1 19V2.38462L6.99538 1V17.6154Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.99536 17.6154L13.0046 19V2.38462L6.99536 1V17.6154Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 17.6154L13.0046 19V2.38462L19 1V17.6154Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const PaymentBackIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.78625 1L1.16317 7.62308C1.11166 7.67142 1.07061 7.72981 1.04254 7.79464C1.01448 7.85947 1 7.92936 1 8C1 8.07064 1.01448 8.14054 1.04254 8.20536C1.07061 8.27019 1.11166 8.32858 1.16317 8.37692L7.78625 15"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const PaymentDotsIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 6 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 5.15385C4.14706 5.15385 5.07693 4.22398 5.07693 3.07692C5.07693 1.92987 4.14706 1 3 1C1.85295 1 0.92308 1.92987 0.92308 3.07692C0.92308 4.22398 1.85295 5.15385 3 5.15385Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 12.0767C4.14706 12.0767 5.07693 11.1468 5.07693 9.99977C5.07693 8.85272 4.14706 7.92285 3 7.92285C1.85295 7.92285 0.92308 8.85272 0.92308 9.99977C0.92308 11.1468 1.85295 12.0767 3 12.0767Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 18.9995C4.14706 18.9995 5.07693 18.0697 5.07693 16.9226C5.07693 15.7756 4.14706 14.8457 3 14.8457C1.85295 14.8457 0.92308 15.7756 0.92308 16.9226C0.92308 18.0697 1.85295 18.9995 3 18.9995Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileTinNumberIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38455 19L17.6153 19C18.38 19 18.9999 18.3801 18.9999 17.6154L18.9999 2.38461C18.9999 1.61991 18.38 1 17.6153 1L2.38455 1C1.61985 1 0.999939 1.61991 0.999939 2.38461L0.999939 17.6154C0.999939 18.3801 1.61985 19 2.38455 19Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.46149 4.46191H7.23072"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.46149 7.92285H10.6923"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.2307 7.92285L12.0769 14.8459L7.23072 12.0767L4.46149 16.2305"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAccountHolderIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 11.385C11.9118 11.385 13.4616 9.83521 13.4616 7.92345C13.4616 6.0117 11.9118 4.46191 10 4.46191C8.08827 4.46191 6.53848 6.0117 6.53848 7.92345C6.53848 9.83521 8.08827 11.385 10 11.385Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.08762 16.7851C4.70549 15.7708 5.57387 14.9326 6.60929 14.351C7.6447 13.7694 8.81233 13.4639 9.99992 13.4639C11.1875 13.4639 12.3551 13.7694 13.3906 14.351C14.426 14.9326 15.2944 15.7708 15.9122 16.7851"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAccountNumberIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.091 8.15901C10.9697 9.03769 10.9697 10.4623 10.091 11.341C9.21231 12.2197 7.78769 12.2197 6.90901 11.341C6.03033 10.4623 6.03033 9.03769 6.90901 8.15901C7.78769 7.28033 9.21231 7.28033 10.091 8.15901"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 18.5V5.541C2 4.414 2.914 3.5 4.041 3.5H20C21.105 3.5 22 4.395 22 5.5V18.5C22 19.605 21.105 20.5 20 20.5H4C2.895 20.5 2 19.605 2 18.5Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 9.5H19"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.4 13.5H15"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.095 16.5C11.92 16.061 11.65 15.667 11.303 15.346V15.346C10.716 14.802 9.946 14.5 9.146 14.5H7.854C7.054 14.5 6.284 14.802 5.697 15.346V15.346C5.35 15.667 5.08 16.061 4.905 16.5"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAccountRoutingNumberIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.1543H2.38462C1.61991 1.1543 1 1.77421 1 2.53891V9.46199C1 10.2267 1.61991 10.8466 2.38462 10.8466H17.6154C18.3801 10.8466 19 10.2267 19 9.46199V2.53891C19 1.77421 18.3801 1.1543 17.6154 1.1543Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 6.69321C5.53615 6.69321 5.8461 6.38325 5.8461 6.0009C5.8461 5.61855 5.53615 5.30859 5.15379 5.30859C4.77144 5.30859 4.46149 5.61855 4.46149 6.0009C4.46149 6.38325 4.77144 6.69321 5.15379 6.69321Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.30782 6.69321C9.69017 6.69321 10.0001 6.38325 10.0001 6.0009C10.0001 5.61855 9.69017 5.30859 9.30782 5.30859C8.92547 5.30859 8.61551 5.61855 8.61551 6.0009C8.61551 6.38325 8.92547 6.69321 9.30782 6.69321Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4616 7.38477H15.5386"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ManageCardIcon = ({style}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.1599 19.0898C15.4799 14.7898 15.4799 9.19984 12.1599 4.89984"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.6399 22C20.3199 15.94 20.3199 8.06 15.6399 2"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.50984 17.2109C10.9498 14.0609 10.9498 9.95093 8.50984 6.80093"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.85014 14.5996C6.07014 13.0196 6.07014 10.9696 4.85014 9.3896"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
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
const AddCardHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.42285H2.38462C1.61991 1.42285 1 2.04276 1 2.80747V13.1921C1 13.9568 1.61991 14.5767 2.38462 14.5767H17.6154C18.3801 14.5767 19 13.9568 19 13.1921V2.80747C19 2.04276 18.3801 1.42285 17.6154 1.42285Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 6.26855H19"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 11.1152H15.5383"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const AddCardIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.42285H2.38462C1.61991 1.42285 1 2.04276 1 2.80747V13.1921C1 13.9568 1.61991 14.5767 2.38462 14.5767H17.6154C18.3801 14.5767 19 13.9568 19 13.1921V2.80747C19 2.04276 18.3801 1.42285 17.6154 1.42285Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 6.26855H19"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 11.1152H15.5383"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const AddCardExpiryIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15405 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8464 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15405 3.76953H12.0771"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 14.1543H6.53833"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 9.30762H19"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const AddCardCVVIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6153 13.0186H12.7691C12.0044 13.0186 11.3845 13.6385 11.3845 14.4032V17.6155C11.3845 18.3802 12.0044 19.0001 12.7691 19.0001H17.6153C18.38 19.0001 18.9999 18.3802 18.9999 17.6155V14.4032C18.9999 13.6385 18.38 13.0186 17.6153 13.0186Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9062 13.0458V11.8412C17.7791 11.2152 17.4395 10.6524 16.9449 10.2481C16.4503 9.84388 15.8311 9.62305 15.1924 9.62305C14.5536 9.62305 13.9344 9.84388 13.4398 10.2481C12.9453 10.6524 12.6056 11.2152 12.4785 11.8412V13.0458"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.92308 10.6923H2.38462C2.01739 10.6923 1.66521 10.5464 1.40554 10.2868C1.14588 10.0271 1 9.67491 1 9.30769V2.38462C1 2.01739 1.14588 1.66521 1.40554 1.40554C1.66521 1.14588 2.01739 1 2.38462 1H14.8462C15.2134 1 15.5656 1.14588 15.8252 1.40554C16.0849 1.66521 16.2308 2.01739 16.2308 2.38462V5.15385"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.84636 6.53891C6.22871 6.53891 6.53867 6.22896 6.53867 5.8466C6.53867 5.46425 6.22871 5.1543 5.84636 5.1543C5.46401 5.1543 5.15405 5.46425 5.15405 5.8466C5.15405 6.22896 5.46401 6.53891 5.84636 6.53891Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3847 6.53891C11.767 6.53891 12.077 6.22896 12.077 5.8466C12.077 5.46425 11.767 5.1543 11.3847 5.1543C11.0023 5.1543 10.6924 5.46425 10.6924 5.8466C10.6924 6.22896 11.0023 6.53891 11.3847 6.53891Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const AddCardExpiryHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15405 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8464 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15405 3.76953H12.0771"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 14.1543H6.53833"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 9.30762H19"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const AddCardCVVHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6153 13.0186H12.7691C12.0044 13.0186 11.3845 13.6385 11.3845 14.4032V17.6155C11.3845 18.3802 12.0044 19.0001 12.7691 19.0001H17.6153C18.38 19.0001 18.9999 18.3802 18.9999 17.6155V14.4032C18.9999 13.6385 18.38 13.0186 17.6153 13.0186Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.9062 13.0458V11.8412C17.7791 11.2152 17.4395 10.6524 16.9449 10.2481C16.4503 9.84388 15.8311 9.62305 15.1924 9.62305C14.5536 9.62305 13.9344 9.84388 13.4398 10.2481C12.9453 10.6524 12.6056 11.2152 12.4785 11.8412V13.0458"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.92308 10.6923H2.38462C2.01739 10.6923 1.66521 10.5464 1.40554 10.2868C1.14588 10.0271 1 9.67491 1 9.30769V2.38462C1 2.01739 1.14588 1.66521 1.40554 1.40554C1.66521 1.14588 2.01739 1 2.38462 1H14.8462C15.2134 1 15.5656 1.14588 15.8252 1.40554C16.0849 1.66521 16.2308 2.01739 16.2308 2.38462V5.15385"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.84636 6.53891C6.22871 6.53891 6.53867 6.22896 6.53867 5.8466C6.53867 5.46425 6.22871 5.1543 5.84636 5.1543C5.46401 5.1543 5.15405 5.46425 5.15405 5.8466C5.15405 6.22896 5.46401 6.53891 5.84636 6.53891Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3847 6.53891C11.767 6.53891 12.077 6.22896 12.077 5.8466C12.077 5.46425 11.767 5.1543 11.3847 5.1543C11.0023 5.1543 10.6924 5.46425 10.6924 5.8466C10.6924 6.22896 11.0023 6.53891 11.3847 6.53891Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const EditProfileBusinessHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.7692 3.76953H2.46155C1.69685 3.76953 1.07693 4.38944 1.07693 5.15415V17.6157C1.07693 18.3804 1.69685 19.0003 2.46155 19.0003H10.7692C11.5339 19.0003 12.1539 18.3804 12.1539 17.6157V5.15415C12.1539 4.38944 11.5339 3.76953 10.7692 3.76953Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84628 7.23047H9.38474"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84628 10.6924H9.38474"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.84628 14.1543H6.61551"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.53842 1H13.5384C13.9056 1 14.2578 1.14588 14.5175 1.40554C14.7772 1.66521 14.923 2.01739 14.923 2.38462V15.5385"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileEmailHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.73047H2.38462C1.61991 1.73047 1 2.35038 1 3.11508V14.8843C1 15.649 1.61991 16.2689 2.38462 16.2689H17.6154C18.3801 16.2689 19 15.649 19 14.8843V3.11508C19 2.35038 18.3801 1.73047 17.6154 1.73047Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 3.46094L9.11385 10.384C9.36264 10.5912 9.6762 10.7047 10 10.7047C10.3238 10.7047 10.6374 10.5912 10.8862 10.384L19 3.46094"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfilePhoneHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.4261 18.2821C13.277 18.8311 14.291 19.0703 15.2975 18.9596C16.304 18.8489 17.2418 18.395 17.953 17.6742L18.5748 17.0662C18.8474 16.7874 19 16.413 19 16.023C19 15.6331 18.8474 15.2586 18.5748 14.9798L15.9357 12.3684C15.6592 12.0966 15.287 11.9444 14.8994 11.9444C14.5117 11.9444 14.1396 12.0966 13.8631 12.3684V12.3684C13.5843 12.6409 13.2098 12.7936 12.8199 12.7936C12.4299 12.7936 12.0555 12.6409 11.7767 12.3684L7.6315 8.22317C7.49322 8.0869 7.38341 7.9245 7.30846 7.74541C7.23351 7.56632 7.19491 7.37411 7.19491 7.17997C7.19491 6.98583 7.23351 6.79362 7.30846 6.61453C7.38341 6.43544 7.49322 6.27304 7.6315 6.13677V6.13677C7.90322 5.86028 8.05548 5.48813 8.05548 5.10047C8.05548 4.71281 7.90322 4.34066 7.6315 4.06418L5.00622 1.43889C4.7274 1.1663 4.35295 1.01367 3.96301 1.01367C3.57308 1.01367 3.19863 1.1663 2.91981 1.43889L2.31185 2.06067C1.59107 2.7719 1.13715 3.70963 1.02643 4.71617C0.915715 5.72271 1.15494 6.73668 1.70389 7.58758C4.56413 11.8029 8.20345 15.4328 12.4261 18.2821V18.2821Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAddressHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.99538 17.6154L1 19V2.38462L6.99538 1V17.6154Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.99539 17.6154L13.0046 19V2.38462L6.99539 1V17.6154Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 17.6154L13.0046 19V2.38462L19 1V17.6154Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileTinNumberHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38455 19L17.6153 19C18.38 19 18.9999 18.3801 18.9999 17.6154L18.9999 2.38461C18.9999 1.61991 18.38 1 17.6153 1L2.38455 1C1.61985 1 0.999939 1.61991 0.999939 2.38461L0.999939 17.6154C0.999939 18.3801 1.61985 19 2.38455 19Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.46149 4.46191H7.23072"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.46149 7.92285H10.6923"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.2307 7.92285L12.0769 14.8459L7.23072 12.0767L4.46149 16.2305"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAccountNumberHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.09099 6.15901C9.96967 7.03769 9.96967 8.46231 9.09099 9.34099C8.21231 10.2197 6.78769 10.2197 5.90901 9.34099C5.03033 8.46231 5.03033 7.03769 5.90901 6.15901C6.78769 5.28033 8.21231 5.28033 9.09099 6.15901"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 16.5V3.541C1 2.414 1.914 1.5 3.041 1.5H19C20.105 1.5 21 2.395 21 3.5V16.5C21 17.605 20.105 18.5 19 18.5H3C1.895 18.5 1 17.605 1 16.5Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14 7.5H18"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.4 11.5H14"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.095 14.5C10.92 14.061 10.65 13.667 10.303 13.346V13.346C9.71603 12.802 8.94603 12.5 8.14603 12.5H6.85403C6.05403 12.5 5.28403 12.802 4.69703 13.346V13.346C4.35003 13.667 4.08003 14.061 3.90503 14.5"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileAccounHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.0001 11.385C11.9118 11.385 13.4616 9.83521 13.4616 7.92345C13.4616 6.0117 11.9118 4.46191 10.0001 4.46191C8.0883 4.46191 6.53851 6.0117 6.53851 7.92345C6.53851 9.83521 8.0883 11.385 10.0001 11.385Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.08759 16.7851C4.70546 15.7708 5.57384 14.9326 6.60926 14.351C7.64467 13.7694 8.8123 13.4639 9.99989 13.4639C11.1875 13.4639 12.3551 13.7694 13.3905 14.351C14.4259 14.9326 15.2943 15.7708 15.9122 16.7851"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EditProfileRoutingHighLightIcon = ({style}: ClockProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.1543H2.38462C1.61991 1.1543 1 1.77421 1 2.53891V9.46199C1 10.2267 1.61991 10.8466 2.38462 10.8466H17.6154C18.3801 10.8466 19 10.2267 19 9.46199V2.53891C19 1.77421 18.3801 1.1543 17.6154 1.1543Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 6.69321C5.53615 6.69321 5.8461 6.38325 5.8461 6.0009C5.8461 5.61855 5.53615 5.30859 5.15379 5.30859C4.77144 5.30859 4.46149 5.61855 4.46149 6.0009C4.46149 6.38325 4.77144 6.69321 5.15379 6.69321Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.30779 6.69321C9.69014 6.69321 10.0001 6.38325 10.0001 6.0009C10.0001 5.61855 9.69014 5.30859 9.30779 5.30859C8.92544 5.30859 8.61548 5.61855 8.61548 6.0009C8.61548 6.38325 8.92544 6.69321 9.30779 6.69321Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4617 7.38477H15.5386"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const SubscriptionScreenRadioButton = ({style ,onPress}: ClockProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="white"
      />
      <Path
        d="M12 22.8C6.03533 22.8 1.2 17.9647 1.2 12H-1.2C-1.2 19.2902 4.70984 25.2 12 25.2V22.8ZM22.8 12C22.8 17.9647 17.9647 22.8 12 22.8V25.2C19.2902 25.2 25.2 19.2902 25.2 12H22.8ZM12 1.2C17.9647 1.2 22.8 6.03533 22.8 12H25.2C25.2 4.70984 19.2902 -1.2 12 -1.2V1.2ZM12 -1.2C4.70984 -1.2 -1.2 4.70984 -1.2 12H1.2C1.2 6.03533 6.03533 1.2 12 1.2V-1.2Z"
        fill="#F2F3F5"
      />
    </Svg>
  );
};
const SubscriptionScreenHighLightRadioButton = ({style ,onPress}: ClockProps) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="#4AB5E3"
      />
      <Circle cx="12" cy="12" r="4" fill="white" />
      <Path
        d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z"
        fill="#4AB5E3"
      />
    </Svg>
  );
};
export {
  ProfileIconCount,
  ProfileCameraIcon,
  ProfileBackIcon,
  ProfileEmailIcon,
  ProfileWalletIcon,
  ProfileSubscriptionIcon,
  ProfileCardIcon,
  ProfileNotificationIcon,
  ProfileChangePasswordIcon,
  ProfileLogoutIcon,
  ProfileDotsIcon,
  ProfileForwardIcon,
  EditProfileCircle,
  EditProfileBusinessIcon,
  EditProfileEmailIcon,
  EditProfilePhoneIcon,
  EditProfileAddressIcon,
  PaymentBackIcon,
  PaymentDotsIcon,
  EditProfileTinNumberIcon,
  EditProfileAccountHolderIcon,
  EditProfileAccountNumberIcon,
  EditProfileAccountRoutingNumberIcon,
  ManageCardIcon,
  UserIcon,
  UserHighlightIcon,
  AddCardIcon,
  AddCardHighLightIcon,
  AddCardExpiryIcon,
  AddCardExpiryHighLightIcon,
  AddCardCVVIcon,
  AddCardCVVHighLightIcon,
  EditProfileBusinessHighLightIcon,
  EditProfileEmailHighLightIcon,
  EditProfilePhoneHighLightIcon,
  EditProfileAddressHighLightIcon,
  EditProfileTinNumberHighLightIcon,
  EditProfileAccountNumberHighLightIcon,
  EditProfileAccounHighLightIcon,
  EditProfileRoutingHighLightIcon,
  SubscriptionScreenRadioButton,
  SubscriptionScreenHighLightRadioButton,
};
