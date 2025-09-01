import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LocalImage from '../../components/LocalImage';

const Row = ({ label }) => (
  <View style={styles.row}><Text style={styles.rowText}>{label}</Text><Text style={styles.chev}>›</Text></View>
);

export default function Profile() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.header}> 
          <LocalImage uri={'https://i.pravatar.cc/150?img=12'} style={styles.avatar} fallback={require('../../assets/images/icon.png')} />
          <View>
            <Text style={styles.name}>Chloe</Text>
            <Text style={styles.email}>chloe@example.com</Text>
          </View>
        </View>
        <View style={styles.card}>
          {['Address','Order History','Language','Notifications','Contact Us','Get Help','Privacy Policy','Terms and Conditions','Logout'].map((x) => (
            <Row key={x} label={x} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff7f5' },
  header: { padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  name: { fontSize: 18, fontWeight: '800', color: '#6f3d37' },
  email: { color: '#7f5853' },
  card: { backgroundColor: '#fff', marginHorizontal: 16, marginTop: 8, borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#f0ddd9' },
  row: { paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f5e6e2', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowText: { color: '#5a3a35', fontWeight: '600' },
  chev: { color: '#9c4a46', fontSize: 18 },
});
