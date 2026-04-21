import {useEffect} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export const usePathMotion = (isActive: SharedValue<number>) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (isActive.value) {
      progress.value = withRepeat(withTiming(1, {duration: 2000}), -1, false);
    }
  }, []);

  return useAnimatedStyle(() => {
    const angle = progress.value * 2 * Math.PI;
    return {
      transform: [
        {translateX: Math.sin(angle) * 50},
        {translateY: Math.cos(angle) * 30},
      ],
    };
  });
};

export default usePathMotion;
