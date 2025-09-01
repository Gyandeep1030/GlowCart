import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabBarBackground() {
  return <View style={styles.bg} />;
}

export function useBottomTabOverflow() {
  return 0;
}

const styles = StyleSheet.create({
  bg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
  },
});
