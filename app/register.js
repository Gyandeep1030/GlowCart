import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const BASE_WIDTH = 390; // iPhone 14 Pro logical width
const rs = (n) => Math.round((width / BASE_WIDTH) * n);

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Join The Glow!</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputWrap}>
            <TextInput placeholder="Full Name" value={name} onChangeText={setName} style={styles.input} placeholderTextColor="#9f8f8c" />
          </View>

          <View style={styles.inputWrap}>
            <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" keyboardType="email-address" placeholderTextColor="#9f8f8c" />
            <Ionicons name="mail-outline" size={rs(20)} color="#9f8f8c" style={styles.iconRight} />
          </View>

          <View style={styles.inputWrap}>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={!showPass} placeholderTextColor="#9f8f8c" />
            <MaterialCommunityIcons name={showPass ? 'eye-off-outline' : 'eye-outline'} size={rs(22)} color="#9f8f8c" style={styles.iconRight} onPress={() => setShowPass((s) => !s)} />
          </View>

          <View style={styles.inputWrap}>
            <TextInput placeholder="Confirm Password" value={confirm} onChangeText={setConfirm} style={styles.input} secureTextEntry={!showConfirm} placeholderTextColor="#9f8f8c" />
            <MaterialCommunityIcons name={showConfirm ? 'eye-off-outline' : 'eye-outline'} size={rs(22)} color="#9f8f8c" style={styles.iconRight} onPress={() => setShowConfirm((s) => !s)} />
          </View>

          <TouchableOpacity style={styles.primary} onPress={onSubmit} activeOpacity={0.9}>
            <Text style={styles.primaryText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.muted}>Already a Member? </Text>
            <Link href="/login" style={styles.link}>Log In</Link>
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
    height: rs(200),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    borderBottomLeftRadius: rs(48),
    borderBottomRightRadius: rs(48),
  },
  container: { flex: 1, paddingHorizontal: rs(20), paddingTop: rs(26) },
  title: { fontSize: rs(48), fontFamily: 'Italiana', fontWeight: '400', color: '#7F2E2E', textAlign: 'center', letterSpacing: -0.2, textShadowColor: 'rgba(0,0,0,0.06)', textShadowOffset: { width: 0, height: rs(1) }, textShadowRadius: rs(2) },
  inputWrap: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EED7D2',
    borderRadius: rs(16),
    paddingHorizontal: rs(14),
    height: rs(60),
    marginBottom: rs(14),
    justifyContent: 'center',
    position: 'relative',
  },
  input: { paddingRight: rs(40), fontSize: rs(16) },
  iconRight: { position: 'absolute', right: rs(12), top: '50%', marginTop: -rs(11) },
  primary: {
    backgroundColor: '#C85B60',
    borderRadius: rs(22),
    height: rs(58),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rs(16),
    shadowColor: '#c85b60',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: rs(8) },
    shadowRadius: rs(14),
    elevation: 3,
  },
  primaryText: { color: '#fff', fontWeight: '800', fontSize: rs(20) },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: rs(28) },
  muted: { color: '#8a6f6a', fontSize: rs(15) },
  link: { color: '#B74A4A', fontWeight: '700', fontSize: rs(15) },
});
