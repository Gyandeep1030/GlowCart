import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Offers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offers</Text>
      <Text style={styles.text}>Special deals will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff7f5', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: '#6f3d37', marginBottom: 8 },
  text: { color: '#7f5853' },
});
