import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
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
    return () => { mounted = false; };
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((p) => p.title.toLowerCase().includes(q));
  }, [query, data]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}> 
        <Text style={styles.h1}>Best Products</Text>
        <TouchableOpacity><Text style={styles.filter}>Filter ⌄</Text></TouchableOpacity>
      </View>
      <View style={styles.searchWrap}>
        <TextInput value={query} onChangeText={setQuery} placeholder="Search" style={styles.search} />
        <View style={styles.filtersRow}>
          <FilterChip label="All" active={!query} onPress={() => setQuery('')} />
          <FilterChip label="Under $20" onPress={() => setQuery('')} filterKey="price<20" />
          <FilterChip label="Essence" onPress={() => setQuery('essence')} />
        </View>
      </View>
      {loading ? (
        <View style={styles.loader}><ActivityIndicator color="#9c4a46" /></View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.grid}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={() => navigation.navigate('ProductDetails', { id: item.id })} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      )}
    </SafeAreaView>
  );
}

function FilterChip({ label, onPress, active }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.chip, active ? styles.chipActive : null]}>
      <Text style={[styles.chipText, active ? styles.chipTextActive : null]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff7f5' },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  h1: { fontSize: 22, fontWeight: '800', color: '#6f3d37' },
  filter: { color: '#9c4a46', fontWeight: '600' },
  searchWrap: { paddingHorizontal: 16, paddingBottom: 8 },
  search: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#f0ddd9', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10 },
  filtersRow: { flexDirection: 'row', gap: 8, marginTop: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, borderWidth: 1, borderColor: '#f0ddd9', backgroundColor: '#fff' },
  chipActive: { backgroundColor: '#9c4a46', borderColor: '#9c4a46' },
  chipText: { color: '#6f3d37', fontWeight: '600' },
  chipTextActive: { color: '#fff' },
  grid: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16, gap: 12 },
  loader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
