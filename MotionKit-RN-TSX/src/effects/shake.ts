import {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export const useShake = (isActive: SharedValue<number>) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        translateX: isActive.value
          ? withRepeat(
              withSequence(
                withTiming(10, {duration: 50}),
                withTiming(-10, {duration: 50}),
                withTiming(0, {duration: 50}),
              ),
              3,
              false,
            )
          : 0,
      },
    ],
  }));
};

export default useShake;
