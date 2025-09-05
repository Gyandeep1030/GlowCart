import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { fetchProduct } from '../services/api';
import Button from '../components/Button';
import { BagContext } from '../context/BagContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function ProductDetails({ navigation, route }) {
  const { id } = route.params || {};
  const { addToBag } = useContext(BagContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchProduct(id)
      .then((json) => mounted && setItem(json))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="#9c4a46" size="large" />
      </View>
    );
  if (!item)
    return (
      <View style={styles.loader}>
        <Text>Not found</Text>
      </View>
    );

  const oldPrice = (item.price * (1 + (item.discountPercentage || 0) / 100)).toFixed(2);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Image Section */}
        <View style={styles.imageWrap}>
          <Image source={{ uri: item.thumbnail }} style={styles.image} />
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Image source={require('../../assets/icons/back.png')} style={{ width: 22, height: 15, tintColor: '#6f3d37' }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cart}
            onPress={() => {}}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Image source={require('../../assets/icons/cart.png')} style={{ width: 24, height: 30, tintColor: '#6f3d37' }} />
          </TouchableOpacity>
        </View>

        {/* Product Content */}
        <View style={styles.content}>
          <Text style={styles.badge}>{item.brand || 'Essence'}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>

          <View style={styles.ratingRow}>
            <View style={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name={i < Math.floor(item.rating) ? 'star' : i < item.rating ? 'star-half-o' : 'star-o'}
                  size={18}
                  color="#ffb400"
                />
              ))}
            </View>
            <Text style={styles.ratingText}>{item.rating.toFixed(2)}/5</Text>
          </View>

          <Text style={styles.soldBy}>
            Sold by : <Text style={styles.seller}>{item.brand || 'Essence'}</Text>
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
            <Text style={styles.oldPrice}>${oldPrice}</Text>
          </View>

          <Button title="Add to Bag" onPress={() => addToBag(item)} style={styles.addToBagButton} />
        </View>

        {/* Highlights Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightsRow}>
            <View style={styles.highlightColumn}>
              <Text style={styles.highlightLabel}>Width</Text>
              <Text style={styles.highlightValue}>{item.width || '15.14'}</Text>
            </View>
            <View style={styles.highlightColumn}>
              <Text style={styles.highlightLabel}>Height</Text>
              <Text style={styles.highlightValue}>{item.height || '13.08'}</Text>
            </View>
          </View>
          <View style={styles.highlightsRow}>
            <View style={styles.highlightColumn}>
              <Text style={styles.highlightLabel}>Warranty</Text>
              <Text style={styles.highlightValue}>1 week</Text>
            </View>
            <View style={styles.highlightColumn}>
              <Text style={styles.highlightLabel}>Shipping</Text>
              <Text style={styles.highlightValue}>In 3-5 business days</Text>
            </View>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
          {item.reviews?.length ? (
            item.reviews.map((review, index) => (
              <View key={index} style={styles.reviewCard}>
                <Image source={{ uri: review.avatar }} style={styles.reviewAvatar} />
                <View style={styles.reviewContent}>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewEmail}>{review.email}</Text>
                  <View style={styles.reviewStars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name={i < review.rating ? 'star' : 'star-o'}
                        size={16}
                        color="#ffb400"
                      />
                    ))}
                  </View>
                  <Text style={styles.reviewText}>{review.comment}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noReviews}>No reviews yet</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const PADDING = 16;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff0f0' },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  imageWrap: {
    marginTop:'50',
    backgroundColor: '#f6e7e4',
    width: '100%',
    aspectRatio: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  image: { width: width * 0.8, height: '80%', resizeMode: 'contain', borderRadius: 16 },
  back: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  cart: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  content: { paddingHorizontal: PADDING, paddingTop: 16 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0ddd9',
    color: '#6f3d37',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 8,
    fontWeight: '700',
  },
  title: { fontSize: 22, fontWeight: '800', color: '#6f3d37', marginBottom: 8 },
  desc: { color: '#7f5853', marginBottom: 8, fontSize: 14, lineHeight: 20 },

  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  stars: { flexDirection: 'row', marginRight: 8 },
  ratingText: { fontWeight: '700', color: '#6f3d37' },

  soldBy: { fontWeight: '400', color: '#6f3d37', marginBottom: 8 },
  seller: { fontWeight: '700' },

  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  price: { fontSize: 22, fontWeight: '800', color: '#9c4a46', marginRight: 8 },
  oldPrice: { color: '#8a6f6a', textDecorationLine: 'line-through', marginTop: 3 },

  addToBagButton: { marginTop: 8, borderRadius: 12, height: 48 },

  section: {
    backgroundColor: '#fff',
    marginHorizontal: PADDING,
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0ddd9',
  },
  sectionTitle: { fontWeight: '800', color: '#6f3d37', marginBottom: 8, fontSize: 16 },

  highlightsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  highlightColumn: { flex: 1, alignItems: 'center' },
  highlightLabel: { fontWeight: '700', color: '#6f3d37', marginBottom: 4 },
  highlightValue: { color: '#7f5853' },

  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#fff0f0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  reviewAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  reviewContent: { flex: 1 },
  reviewName: { fontWeight: '700', color: '#6f3d37' },
  reviewEmail: { fontSize: 12, color: '#7f5853', marginBottom: 4 },
  reviewStars: { flexDirection: 'row', marginBottom: 4 },
  reviewText: { color: '#7f5853' },
  noReviews: { textAlign: 'center', color: '#7f5853', marginTop: 8 },
});
