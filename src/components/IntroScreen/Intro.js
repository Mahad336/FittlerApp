import React from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Introo = ({
  ref,
  data,
  renderItem,
  renderNextButton,
  renderSkipButton,
  renderDoneButton,
  onSkip,
  onDone,
  onSlideChange,
}) => {
  return (
    <>
      <AppIntroSlider
        ref={ref}
        data={data}
        activeDotStyle={{backgroundColor: '#FFFFFF', height: 8, width: 8}}
        dotStyle={{backgroundColor: 'grey', width: 8, height: 8}}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={onSlideChange}
        onDone={onDone}
        onSkip={onSkip}
        showNextButton={true}
        showSkipButton={false}
        showDoneButton={true}
        bottomButton
      />
    </>
  );
};
const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
});
export default Introo;
