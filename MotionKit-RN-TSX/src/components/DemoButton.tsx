import React from 'react';
import {Text, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import AnimatedView, {EffectHook, TriggerType} from '../core/AnimatedView';

interface DemoButtonProps {
  title: string;
  effect: EffectHook;
  trigger?: TriggerType;
  style?: StyleProp<ViewStyle>;
}

const DemoButton: React.FC<DemoButtonProps> = ({
  title,
  effect,
  trigger = 'onTap',
  style,
}) => (
  <AnimatedView effect={effect} trigger={trigger} style={[styles.button, style]}>
    <Text style={styles.text}>{title}</Text>
  </AnimatedView>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DemoButton;
