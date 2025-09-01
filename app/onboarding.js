import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../assets/images/image1.png')}
        style={styles.topImage}
        resizeMode="contain"
      />
      <View style={styles.bottomPanel}>
        <Text style={styles.brand}>Viorra</Text>
        <Text style={styles.tagline}>Your Beauty, Delivered.</Text>
        <TouchableOpacity style={styles.cta} onPress={() => router.push('/login')} activeOpacity={0.9}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#C9A7A2', alignItems: 'center' },
  topImage: {
    width: '100%',
    height: height * 1,
    marginTop: -100,
  },
  bottomPanel: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  brand: {
    color: '#fff',
    fontFamily: 'Italiana',
    fontWeight: '400',
    fontSize: 56,
    letterSpacing: -0.2,
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,

  },
  tagline: {
    fontSize: 21,
    color: '#fff',
    opacity: 0.98,
    marginBottom: 28,
    textAlign: 'center',
    fontWeight: '400',
  },
  cta: {
    width: Math.min(0.8 * width, 195),
    height: 52,
    backgroundColor: '#C04A52',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#a94753',
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 16,
    elevation: 4,
  },
  ctaText: { color: '#fff', fontSize: 22, fontWeight: '500',  },
  progressTrack: {
    height: 8,
    width: 120,
    backgroundColor: 'rgba(255,255,255,0.45)',
    borderRadius: 999,
    marginTop: 0,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: 42,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 999,
  },
});
