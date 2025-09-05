import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#f0ddd9', width: '48%' },
  image: { width: '100%', height: 120 },
  info: { padding: 10 },
  name: { fontWeight: '600', color: '#5a3a35', marginBottom: 4 },
  price: { color: '#9c4a46', fontWeight: '700' },
});
