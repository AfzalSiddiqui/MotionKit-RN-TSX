import {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export const usePulse = (isActive: SharedValue<number>) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        scale: isActive.value
          ? withRepeat(
              withSequence(
                withTiming(1.15, {duration: 400}),
                withTiming(1.0, {duration: 400}),
              ),
              -1,
              true,
            )
          : 1,
      },
    ],
  }));
};

export default usePulse;
