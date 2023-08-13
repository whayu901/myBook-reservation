import React from 'react';
import { View } from 'react-native';

import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BlurView } from '@react-native-community/blur';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type BlurBackdropProps = BottomSheetBackdropProps & {
  disappearsOnIndex?: number;
  appearsOnIndex?: number;
};

const BlurBackdrop: React.FC<BlurBackdropProps> = ({
  animatedIndex,
  disappearsOnIndex = -1,
  appearsOnIndex = 0,
}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: interpolate(
      animatedIndex.value,
      [-1, disappearsOnIndex, appearsOnIndex],
      [0, 0, 1],
      Extrapolate.CLAMP,
    ),
    flex: 1,
    pointerEvents: 'none',
  }));
  return (
    <Animated.View style={containerAnimatedStyle}>
      <BlurView
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View
        className="absolute inset-x-0 inset-y-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      />
    </Animated.View>
  );
};

export default BlurBackdrop;
