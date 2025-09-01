import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const BASE_WIDTH = 390; // iPhone 14 Pro logical width
const rs = (n) => Math.round((width / BASE_WIDTH) * n);

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const onLogin = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello Again!</Text>
          <Text style={styles.subtitle}>Welcome back you’ve been missed.</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Enter your email Id"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#9f8f8c"
            />
            <Ionicons name="mail-outline" size={rs(20)} color="#9f8f8c" style={styles.iconRight} />
          </View>

          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry={!show}
              placeholderTextColor="#9f8f8c"
            />
            <MaterialCommunityIcons
              name={show ? 'eye-off-outline' : 'eye-outline'}
              size={rs(22)}
              color="#9f8f8c"
              style={styles.iconRight}
              onPress={() => setShow((s) => !s)}
            />
          </View>

          <View style={styles.forgotRow}>
            <Link href="/" style={styles.forgot}>Forgot password</Link>
          </View>

          <TouchableOpacity style={styles.primary} onPress={onLogin} activeOpacity={0.9}>
            <Text style={styles.primaryText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.sepRow}>
            <View style={styles.sep} />
            <Text style={styles.sepText}>Or Continue With</Text>
            <View style={styles.sep} />
          </View>

          <View style={styles.socialRow}>
            <View style={styles.socialBox}>
              <FontAwesome5 name="google" size={rs(22)} color="#EA4335" />
            </View>
            <View style={styles.socialBox}>
              <FontAwesome5 name="apple" size={rs(24)} color="#000" />
            </View>
            <View style={styles.socialBox}>
              <FontAwesome5 name="facebook" size={rs(22)} color="#1877F2" />
            </View>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.muted}>Not a Member? </Text>
            <Link href="/register" style={styles.link}>Register Now</Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FBE6E0' },
  header: {
    backgroundColor: '#D98B8E',
    height: rs(180),
    paddingTop: rs(18),
    paddingHorizontal: rs(24),
    borderBottomLeftRadius: rs(48),
    borderBottomRightRadius: rs(48),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { flex: 1, paddingHorizontal: rs(20), paddingTop: rs(20) },
  title: { fontSize: rs(30), fontWeight: '800', color: '#7F2E2E', textAlign: 'center', marginBottom: rs(6) },
  subtitle: { color: '#5E4B49', opacity: 0.9, textAlign: 'center', fontSize: rs(16) },
  inputWrap: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EED7D2',
    borderRadius: rs(16),
    paddingHorizontal: rs(14),
    height: rs(56),
    marginBottom: rs(14),
    justifyContent: 'center',
    position: 'relative',
  },
  input: { paddingRight: rs(38), fontSize: rs(16) },
  iconRight: { position: 'absolute', right: rs(12), top: '50%', marginTop: -rs(11) },
  forgotRow: { width: '100%', alignItems: 'flex-end', marginBottom: rs(8) },
  forgot: { color: '#A04444', textDecorationLine: 'underline', fontSize: rs(14) },
  primary: {
    backgroundColor: '#B74A4A',
    borderRadius: rs(20),
    height: rs(58),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rs(8),
    shadowColor: '#b74a4a',
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: rs(8) },
    shadowRadius: rs(14),
    elevation: 3,
  },
  primaryText: { color: '#fff', fontWeight: '700', fontSize: rs(18) },
  sepRow: { flexDirection: 'row', alignItems: 'center', marginVertical: rs(18), gap: rs(12), justifyContent: 'center' },
  sep: { height: 1, backgroundColor: 'rgba(0,0,0,0.15)', width: (width - rs(40)) / 4 },
  sepText: { color: '#6f6a69', fontSize: rs(13) },
  socialRow: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: rs(24) },
  socialBox: {
    width: rs(60),
    height: rs(60),
    borderRadius: rs(12),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EED7D2',
  },
  footerRow: { flexDirection: 'row', justifyContent: 'center' },
  muted: { color: '#8a6f6a', fontSize: rs(14) },
  link: { color: '#B74A4A', fontWeight: '700', fontSize: rs(14) },
});
