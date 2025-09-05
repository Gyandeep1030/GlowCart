import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

export default function Home({ navigation }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((p) => mounted && setData(p))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((p) => p.title.toLowerCase().includes(q));
  }, [query, data]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <Text style={styles.brand}>Viorra</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Notifications"
              style={styles.iconBtn}
            >
              <Image source={require('../../assets/icons/notificationicon.png')} style={{width: 22, height: 22, tintColor: '#6f3d37'}} />
              <View style={styles.dot} />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Cart"
              style={styles.iconBtn}
            >
              <Image source={require('../../assets/icons/cart.png')} style={{width: 18, height: 22, tintColor: '#6f3d37'}} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <View style={styles.searchInputWrapper}>
            <Icon name="search" size={18} color="#9c4a46" style={styles.searchIcon} />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search for all products"
              placeholderTextColor="#b38a86"
              style={styles.search}
              accessibilityLabel="Search for products"
              returnKeyType="search"
              clearButtonMode="while-editing"
              autoCorrect={false}
            />
          </View>
        </View>
      </View>

      {/* Product Section */}
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.h1}>Best Products</Text>
          <TouchableOpacity
            style={styles.filterButton}
            accessibilityRole="button"
            accessibilityLabel="Apply filter"
            activeOpacity={0.7}
          >
            <Text style={styles.filter}>Apply Filter</Text>
            <Icon name="caret-down" size={14} color="#9c4a46" style={styles.caretIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.countText}>{list.length} products</Text>

        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#9c4a46" />
          </View>
        ) : (
          <FlatList
            data={list}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.grid}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
            ListEmptyComponent={() => (
              <View style={styles.emptyWrap}>
                <Text style={styles.emptyTitle}>No results</Text>
                <Text style={styles.emptySubtitle}>Try a different search term.</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const PADDING = 16;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ffffff' },
  topBar: { backgroundColor: '#ffffff', marginTop: 30 },
  section: {
    flex: 1,
    backgroundColor: '#fee8e2',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  brandRow: {
    paddingHorizontal: PADDING,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: { fontSize: 28, color: '#9c4a46', fontWeight: '800', letterSpacing: 0.5 , fontFamily:'Italiana' },
  iconRow: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { marginLeft: 16, padding: 4 },
  dot: {
    position: 'absolute',
    right: 6,
    top: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff4d4f',
  },

  header: {
    paddingHorizontal: PADDING,
    paddingTop: 16,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: { fontSize: 22, fontWeight: '800', color: '#6f3d37' },
  filterButton: { flexDirection: 'row', alignItems: 'center', padding: 4, gap: 4 },
  filter: { color: '#9c4a46', fontWeight: '600' },
  caretIcon: { marginTop: 2, },

  searchWrap: { paddingHorizontal: PADDING, paddingTop: 8, paddingBottom: 12 },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f0ddd9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: { marginRight: 10 },
  search: { flex: 1, fontSize: 16, color: '#1a1a1a' },

  countText: { paddingHorizontal: PADDING, paddingBottom: 8, color: '#9c4a46' },
  grid: { paddingHorizontal: PADDING, paddingTop: 6, paddingBottom: 24 },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  emptyWrap: { alignItems: 'center', marginTop: 40 },
  emptyTitle: { fontSize: 16, fontWeight: '700', color: '#6f3d37' },
  emptySubtitle: { marginTop: 6, color: '#9c4a46' },
});
