import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop' }}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />
      <View style={styles.bottomCard}>
        <Text style={styles.brand}>Viorra</Text>
        <Text style={styles.tagline}>Your Beauty, Delivered</Text>
        <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'flex-end' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.25)' },
  bottomCard: { padding: 24, paddingBottom: 40, backgroundColor: 'rgba(255, 243, 240, 0.92)', borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  brand: { fontSize: 40, fontWeight: '700', color: '#6f3d37', marginBottom: 6 },
  tagline: { fontSize: 16, color: '#7f5853', marginBottom: 16 },
  cta: { marginTop: 8, backgroundColor: '#9c4a46', paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  ctaText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
