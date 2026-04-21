import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useSlideInFromTop = (isActive: SharedValue<number>, duration: number = 500) => {
  return useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(isActive.value ? 0 : -300, {duration})},
    ],
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useSlideInFromTop;
