import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Register({ navigation }) {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = () => {
    if (!name || !email || !password || !confirm) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }
    signUp(name, email);
    navigation.replace('MainTabs');
  };

  const InputField = ({ placeholder, value, onChangeText, secure, toggle, show }) => (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { paddingRight: secure ? 40 : 14 }]}
        secureTextEntry={secure && !show}
        placeholderTextColor="#a09a9a"
        autoCapitalize={placeholder === 'Email Address' ? 'none' : 'words'}
        keyboardType={placeholder === 'Email Address' ? 'email-address' : 'default'}
        textContentType={
          placeholder === 'Email Address'
            ? 'emailAddress'
            : placeholder === 'Password' || placeholder === 'Confirm Password'
            ? 'password'
            : 'name'
        }
      />
      {secure && (
        <Text style={styles.icon} onPress={toggle}>
          {show ? '🙈' : '👁️'}
        </Text>
      )}
      {placeholder === 'Email Address' && !secure && <Text style={styles.icon}>✉️</Text>}
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Full-width header */}
      <View style={styles.header}>
        <Text style={styles.title}>Join The Glow!</Text>
      </View>

      <View style={styles.container}>
        <InputField placeholder="Full Name" value={name} onChangeText={setName} />
        <InputField placeholder="Email Address" value={email} onChangeText={setEmail} />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secure
          toggle={() => setShowPassword(!showPassword)}
          show={showPassword}
        />
        <InputField
          placeholder="Confirm Password"
          value={confirm}
          onChangeText={setConfirm}
          secure
          toggle={() => setShowConfirm(!showConfirm)}
          show={showConfirm}
        />

        <TouchableOpacity
          style={styles.primary}
          onPress={onSubmit}
          accessibilityLabel="Create Account"
          accessible
        >
          <Text style={styles.primaryText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.muted}>Already a Member? </Text>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.link}
            accessibilityLabel="Go to login screen"
            accessible
          >
            Log In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffe9e6',
  },
  header: {
    width: '100%', // full width
    backgroundColor: '#e29a9a',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 80,
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#8b3f3f',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eed7d2',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: '#4a4a4a',
  },
  icon: {
    position: 'absolute',
    right: 14,
    top: '50%',
    fontSize: 18,
    color: '#a09a9a',
    transform: [{ translateY: -9 }],
  },
  primary: {
    backgroundColor: '#9c4a46',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '80%',
  },
  muted: {
    color: '#8a6f6a',
    fontSize: 14,
  },
  link: {
    color: '#9c4a46',
    fontWeight: '600',
    fontSize: 14,
  },
});
