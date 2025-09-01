import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LocalImage from '../../components/LocalImage';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    import('../../utils/api').then(({ fetchProduct }) =>
      fetchProduct(id)
        .then((json) => { if (mounted) setItem(json); })
        .finally(() => { if (mounted) setLoading(false); })
    );
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <View style={styles.loader}><ActivityIndicator color="#b74a4a" /></View>;
  if (!item) return <View style={styles.loader}><Text>Not found</Text></View>;

  const oldPrice = (item.price * 1.17).toFixed(2);

  const renderStars = (value = 0) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const name = value >= i ? 'star' : value >= i - 0.5 ? 'star-half' : 'star-outline';
      stars.push(<Ionicons key={i} name={name} size={16} color="#2c1f1c" style={{ marginRight: 2 }} />);
    }
    return <View style={{ flexDirection: 'row', alignItems: 'center' }}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 28 }}>
        <View style={styles.imageCard}>
          <LocalImage uri={item.thumbnail} style={styles.image} resizeMode="contain" fallback={require('../../assets/images/react-logo.png')} />
          <TouchableOpacity accessibilityRole="button" style={styles.iconBtn} onPress={() => router.push('/(tabs)/home')}>
            <Image source={require('../../assets/images/ep_back.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.chip}><Text style={styles.chipText}>View Similar</Text></View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <View style={styles.ratingRow}>
            {renderStars(item.rating)}
            <Text style={styles.ratingText}>{Number(item.rating).toFixed(2)}/5</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.sold}>Sold by :  <Text style={{ fontWeight: '600' }}>{item.brand || 'Essence'}</Text></Text>

          <View style={styles.buyRow}>
            <View>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.oldPrice}>${oldPrice}</Text>
            </View>
            <TouchableOpacity style={styles.primary} activeOpacity={0.9}>
              <Text style={styles.primaryText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highGrid}>
            <View style={[styles.cell, { borderRightWidth: 1 }]}>
              <Text style={styles.cellTitle}>Width</Text>
              <Text style={styles.cellValue}>15.14</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellTitle}>Height</Text>
              <Text style={styles.cellValue}>13.08</Text>
            </View>
            <View style={[styles.cell, { borderTopWidth: 1, borderRightWidth: 1 }]}>
              <Text style={styles.cellTitle}>Warranty</Text>
              <Text style={styles.cellValue}>1 week</Text>
            </View>
            <View style={[styles.cell, { borderTopWidth: 1 }]}>
              <Text style={styles.cellTitle}>Shipping</Text>
              <Text style={styles.cellValue}>In 3-5 business days</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
          {[1,2].map((i) => (
            <View key={i} style={styles.reviewCard}>
              <View style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={styles.reviewName}>{i === 1 ? 'Eleanor Collins' : 'Lucas Gordon'}</Text>
                    <Text style={styles.reviewEmail}>{i === 1 ? 'eleanor.c@gmail.com' : 'lucas.gordon@gmail.com'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>{Array.from({ length: 5 }).map((_, k) => (
                    <Ionicons key={k} name={k < 4 ? 'star' : 'star-outline'} size={14} color="#2c1f1c" />
                  ))}</View>
                </View>
                <Text style={styles.reviewText}>{i === 1 ? 'Would not recommend…' : 'Very satisfied!'}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FBE6E0' },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  imageCard: { margin: 16, borderRadius: 18, overflow: 'hidden', backgroundColor: '#fff', elevation: 1, shadowColor: '#000', shadowOpacity: 0.08, shadowOffset: { width: 0, height: 4 }, shadowRadius: 10 },
  image: { width: '100%', height: 260, resizeMode: 'contain', backgroundColor: '#FFFFFF' },
  iconBtn: { position: 'absolute', top: 12, left: 12, width: 34, height: 34, borderRadius: 18, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, zIndex: 2 },
  chip: { alignSelf: 'flex-start', paddingHorizontal: 12, height: 28, borderRadius: 999, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#EED7D2', marginBottom: 8 },
  chipText: { color: '#7f4f4b', fontWeight: '600' },

  content: { paddingHorizontal: 16, paddingTop: 8 },
  title: { fontSize: 20, fontWeight: '700', color: '#1f1a19', marginBottom: 6 },
  desc: { color: '#594c49', marginBottom: 8 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  ratingText: { color: '#2c1f1c' },
  divider: { height: 1, backgroundColor: '#E3CFC9', marginVertical: 10 },
  sold: { color: '#3f2f2c', marginBottom: 10 },

  buyRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 6 },
  price: { fontSize: 28, fontWeight: '800', color: '#2c1f1c' },
  oldPrice: { color: '#8a6f6a', textDecorationLine: 'line-through', marginTop: 4 },
  primary: { backgroundColor: '#C85B60', height: 48, paddingHorizontal: 22, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  primaryText: { color: '#fff', fontWeight: '700', fontSize: 16 },

  section: { backgroundColor: '#FBE6E0', marginHorizontal: 16, marginTop: 14, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: '#EED7D2' },
  sectionTitle: { fontWeight: '800', color: '#2c1f1c', marginBottom: 12, fontSize: 18 },

  highGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: '50%', paddingVertical: 10, paddingHorizontal: 8, borderColor: '#EED7D2' },
  cellTitle: { color: '#66524d' },
  cellValue: { color: '#2c1f1c', fontWeight: '600', marginTop: 2 },

  reviewCard: { flexDirection: 'row', gap: 12, backgroundColor: '#fff', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#EED7D2', marginBottom: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#f3d9d6' },
  reviewName: { fontWeight: '700', color: '#2c1f1c' },
  reviewEmail: { color: '#7c6a66', fontSize: 12 },
  reviewText: { color: '#2c1f1c', marginTop: 10 },
});
