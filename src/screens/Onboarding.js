import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');
const IMAGE_HEIGHT = height * 0.6; // Top section height ~60%

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* TOP IMAGE SECTION */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/image1.png')} // <-- Your image here
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        <Text style={styles.brand}>Viorra</Text>
        <Text style={styles.tagline}>Your Beauty, Delivered.</Text>

        <TouchableOpacity
          style={styles.cta}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>

        {/* Pagination */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8cfc9', // fallback color to blend with image
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: '#C9A7A2'
  },
  image: {
    marginTop: '10%',
    height: '100%',
    width: '100%',
  },
  bottomSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 32,
    backgroundColor: '#C9A7A2',
  },
  brand: {
    fontSize: 42,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'serif', // replace with custom font like PlayfairDisplay for exact match
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.85,
    marginBottom: 28,
  },
  cta: {
    backgroundColor: '#B34C4C',
    paddingVertical: 14,
    paddingHorizontal: 64,
    borderRadius: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  ctaText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    height: 6,
    width: 28,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 40,
  },
});
