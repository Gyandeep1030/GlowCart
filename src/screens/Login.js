import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    signIn(email);
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back, you've been missed.</Text>
        <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.primary} onPress={onLogin}><Text style={styles.primaryText}>Log in</Text></TouchableOpacity>

        <View style={styles.socialRow}>
          <View style={[styles.social, { backgroundColor: '#fff' }]}><Text style={styles.socialText}></Text></View>
          <View style={[styles.social, { backgroundColor: '#fff' }]}><Text style={[styles.socialText, { color: '#1a73e8' }]}>G</Text></View>
          <View style={[styles.social, { backgroundColor: '#fff' }]}><Text style={[styles.socialText, { color: '#1877f2' }]}>f</Text></View>
        </View>

        <View style={styles.row}><Text style={styles.muted}>Not a Member? </Text><Text onPress={() => navigation.navigate('Register')} style={styles.link}>Register now</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff3f0' },
  container: { flex: 1, padding: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#6f3d37', marginTop: 8 },
  subtitle: { color: '#7f5853', marginBottom: 24 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eed7d2', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 14 },
  primary: { backgroundColor: '#9c4a46', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  primaryText: { color: '#fff', fontWeight: '700' },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 16 },
  social: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#eed7d2' },
  socialText: { fontSize: 22, color: '#000' },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  muted: { color: '#8a6f6a' },
  link: { color: '#9c4a46', fontWeight: '600' },
});
