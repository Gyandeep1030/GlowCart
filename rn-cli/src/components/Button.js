import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, style, textStyle, variant = 'primary' }) {
  const isOutline = variant === 'outline';
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.base, isOutline ? styles.outline : styles.primary, style]}>
      <Text style={[styles.text, isOutline ? styles.outlineText : styles.primaryText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: { paddingVertical: 14, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: '#9c4a46' },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#9c4a46' },
  text: { fontWeight: '700' },
  primaryText: { color: '#fff' },
  outlineText: { color: '#9c4a46' },
});
