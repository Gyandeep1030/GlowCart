import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    import('../../utils/api').then(({ fetchProducts }) =>
      fetchProducts()
        .then((items) => { if (isMounted) setData(items); })
        .finally(() => { if (isMounted) setLoading(false); })
    );
    return () => { isMounted = false; };
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((p) => p.title.toLowerCase().includes(q));
  }, [query, data]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>Viorra</Text>
        <View style={styles.actions}>
          <View style={styles.bellWrap}>
            <Ionicons name="notifications-outline" size={22} color="#4b3a36" />
            <View style={styles.dot} />
          </View>
          <MaterialCommunityIcons name="bag-outline" size={24} color="#4b3a36" />
        </View>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#8e817e" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search for all products"
            placeholderTextColor="#9a8f8d"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.sectionHead}>
        <View style={styles.headingWrap}>
          <Text style={styles.h1}>Best Products</Text>
          <Text style={styles.count}>{list.length} products</Text>
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Apply Filter</Text>
          <Ionicons name="chevron-down" size={18} color="#3f2f2c" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loader}><ActivityIndicator color="#b74a4a" /></View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.grid}
          numColumns={2}
          columnWrapperStyle={{ gap: 18 }}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={() => router.push(`/product/${item.id}`)} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FBE6E0' },
  topBar: { paddingHorizontal: 18, paddingTop: 6, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff' },
  brand: { fontFamily: 'Italiana', fontSize: 34, color: '#B2404B' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  bellWrap: { position: 'relative' },
  dot: { position: 'absolute', right: -2, top: -2, width: 8, height: 8, borderRadius: 6, backgroundColor: '#d84b57' },

  searchRow: { paddingHorizontal: 18, paddingBottom: 12, paddingTop: 10, backgroundColor: '#ffffff' },
  searchBox: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#EED7D2', borderRadius: 28, paddingHorizontal: 14, height: 44 },
  searchInput: { flex: 1 },

  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, paddingTop: 10, paddingBottom: 8 },
  headingWrap: { flex: 1, alignItems: 'flex-start' },
  h1: { fontFamily: 'Inter', fontWeight: '500', fontSize: 24, lineHeight: 21, letterSpacing: -0.32, textAlign: 'left', color: '#2c1f1c' },
  count: { color: '#8d7a75', marginTop: 6, textAlign: 'left' },
  filterBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#fff', borderWidth: 1, borderColor: '#EED7D2', paddingHorizontal: 14, height: 36, borderRadius: 10 },
  filterText: { color: '#3f2f2c', fontWeight: '600' },

  grid: { paddingHorizontal: 18, paddingBottom: 16, paddingTop: 4 },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
