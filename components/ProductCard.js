import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LocalImage from './LocalImage';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ item, onPress }) {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
        <LocalImage uri={item.thumbnail} style={styles.image} resizeMode="contain" fallback={require('../assets/images/react-logo.png')} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.price}>${item.price?.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.heart} activeOpacity={0.8} accessibilityLabel="Add to wishlist">
        <Ionicons name="heart-outline" size={20} color="#B2404B" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'relative', flex: 1 },
  card: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#EED7D2' },
  image: { width: '100%', height: 140, backgroundColor: '#FFFFFF' },
  info: { padding: 12 },
  name: { fontWeight: '700', color: '#241c1a', marginBottom: 6, fontSize: 16 },
  price: { color: '#1f1f1f', opacity: 0.9 },
  heart: { position: 'absolute', right: 10, bottom: 8, width: 36, height: 36, borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 },
});
