import {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolateColor,
  SharedValue,
} from 'react-native-reanimated';

export const useColorPulse = (isActive: SharedValue<number>) => {
  return useAnimatedStyle(() => {
    const progress = isActive.value
      ? withRepeat(withTiming(1, {duration: 1000}), -1, true)
      : 0;
    return {
      backgroundColor: interpolateColor(
        progress,
        [0, 1],
        ['#1976D2', '#9C27B0'],
      ),
    };
  });
};

export default useColorPulse;
