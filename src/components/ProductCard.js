import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
          <Image source={require('../../assets/icons/wishlist.png')} style={[styles.heartIcon, {width: 22, height: 18, tintColor: '#9a9a9a'}]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f2dfda',
    width: '48%',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
      android: { elevation: 1 },
    }),
  },
  image: { width: '100%', aspectRatio: 1 },
  info: { padding: 12 },
  name: { fontSize: 16, fontWeight: '600', color: '#1a1a1a', marginBottom: 6 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { color: '#6f6f6f', fontWeight: '700' },
  heartIcon: { marginLeft: 8 },
});
