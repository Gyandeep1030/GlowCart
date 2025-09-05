import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Wishlist() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <Text style={styles.text}>Save your favorite products here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff7f5', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: '#6f3d37', marginBottom: 8 },
  text: { color: '#7f5853' },
});
