import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Register({ navigation }) {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onSubmit = () => {
    if (!name || !email || !password || password !== confirm) return;
    signUp(name, email);
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Join The Glow!</Text>
        <TextInput placeholder="Full name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Email address" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
        <TextInput placeholder="Confirm password" value={confirm} onChangeText={setConfirm} style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.primary} onPress={onSubmit}><Text style={styles.primaryText}>Create Account</Text></TouchableOpacity>
        <View style={styles.row}><Text style={styles.muted}>Already a member? </Text><Text onPress={() => navigation.navigate('Login')} style={styles.link}>Login</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff3f0' },
  container: { flex: 1, padding: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#6f3d37', marginTop: 8, marginBottom: 16 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eed7d2', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 14 },
  primary: { backgroundColor: '#9c4a46', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  primaryText: { color: '#fff', fontWeight: '700' },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  muted: { color: '#8a6f6a' },
  link: { color: '#9c4a46', fontWeight: '600' },
});
