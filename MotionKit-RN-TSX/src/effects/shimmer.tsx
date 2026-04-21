import React, {useEffect} from 'react';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ShimmerViewProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

export const ShimmerView: React.FC<ShimmerViewProps> = ({
  width = 200,
  height = 20,
  style,
}) => {
  const translateX = useSharedValue(-width);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, {duration: 1500}),
      -1,
      false,
    );
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <Animated.View style={[styles.container, {width, height}, style]}>
      <Animated.View
        style={[
          styles.shimmer,
          {width: width * 0.6, height},
          shimmerStyle,
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  shimmer: {
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});

export default ShimmerView;
