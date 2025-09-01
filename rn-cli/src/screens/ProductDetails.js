import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { fetchProduct } from '../services/api';
import Button from '../components/Button';
import { BagContext } from '../context/BagContext';

export default function ProductDetails({ navigation, route }) {
  const { id } = route.params || {};
  const { addToBag } = useContext(BagContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchProduct(id).then((json) => mounted && setItem(json)).finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <View style={styles.loader}><ActivityIndicator color="#9c4a46" /></View>;
  if (!item) return <View style={styles.loader}><Text>Not found</Text></View>;

  const oldPrice = (item.price * (1 + (item.discountPercentage || 0) / 100)).toFixed(2);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.imageWrap}>
          <Image source={{ uri: item.thumbnail }} style={styles.image} />
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Text style={{ color: '#6f3d37', fontWeight: '700' }}>{'<'} Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}> 
          <Text style={styles.badge}>{item.brand || 'Essence'}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.rating}>⭐ {item.rating}  ·  {item.reviews?.length || 2385} reviews</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
            <Text style={styles.oldPrice}>${oldPrice}</Text>
          </View>
          <Button title="Add to Bag" onPress={() => addToBag(item)} style={{ marginTop: 8 }} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightRow}>
            <Text style={styles.highlight}>Width: 8cm</Text>
            <Text style={styles.highlight}>Height: 14cm</Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.highlight}>Warranty: 1 year</Text>
            <Text style={styles.highlight}>Shipping: 2-5 business days</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
          {[1,2,3].map((i) => (
            <View key={i} style={styles.reviewCard}>
              <Text style={styles.reviewName}>Shopper {i}</Text>
              <Text style={styles.reviewStars}>⭐⭐⭐⭐☆</Text>
              <Text style={styles.reviewText}>Loved the texture and finish.</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff7f5' },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  imageWrap: { backgroundColor: '#f6e7e4', height: 320, justifyContent: 'center', alignItems: 'center' },
  image: { width: '90%', height: 260, resizeMode: 'contain' },
  back: { position: 'absolute', top: 16, left: 16, padding: 8, backgroundColor: '#fff', borderRadius: 20 },
  content: { backgroundColor: '#fff7f5', padding: 16 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#f0ddd9', color: '#6f3d37', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: '800', color: '#6f3d37', marginBottom: 8 },
  desc: { color: '#7f5853', marginBottom: 8 },
  rating: { color: '#6f3d37', marginBottom: 12 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  price: { fontSize: 22, fontWeight: '800', color: '#9c4a46' },
  oldPrice: { color: '#8a6f6a', textDecorationLine: 'line-through', marginTop: 3 },
  section: { backgroundColor: '#fff', marginHorizontal: 16, marginTop: 12, padding: 14, borderRadius: 12, borderWidth: 1, borderColor: '#f0ddd9' },
  sectionTitle: { fontWeight: '800', color: '#6f3d37', marginBottom: 8 },
  highlightRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  highlight: { color: '#7f5853' },
  reviewCard: { backgroundColor: '#fff7f5', padding: 12, borderRadius: 12, marginBottom: 8 },
  reviewName: { fontWeight: '700', color: '#6f3d37' },
  reviewStars: { marginVertical: 2 },
  reviewText: { color: '#7f5853' },
});
