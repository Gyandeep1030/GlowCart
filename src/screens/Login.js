import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () => {
    signIn(email);
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you’ve been missed.</Text>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your email Id"
            placeholderTextColor="#7f7f7f"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Ionicons name="mail-outline" size={20} color="#a8a8a8" />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7f7f7f"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#a8a8a8"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgot}>Forgot password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.primary} onPress={onLogin}>
          <Text style={styles.primaryText}>Log In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerWrapper}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or Continue With</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialRow}>
          <View style={styles.social}>
            <Image
              source={require('../../assets/images/Google.png')}
              style={styles.socialIconImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.social}>
            <Image
              source={require('../../assets/images/Apple.png')}
              style={styles.socialIconImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.social}>
            <Image
              source={require('../../assets/images/Facebook.png')}
              style={styles.socialIconImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Register Link */}
        <View style={styles.bottomRow}>
          <Text style={styles.muted}>Not a Member? </Text>
          <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
            Register Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff3f0',
  },

  header: {
    backgroundColor: '#f1a7a0',
    paddingVertical: 80,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6f3d37',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f5853',
    textAlign: 'center',
  },

  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  inputWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eed7d2',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
    height: 56,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  forgotWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    color: '#b34c4c',
    fontSize: 14,
    fontWeight: '500',
  },

  primary: {
    backgroundColor: '#b34c4c',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#b34c4c',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  primaryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d8c5c0',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#7f5853',
    fontSize: 14,
    fontWeight: '500',
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 32,
  },
  social: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eed7d2',
    shadowColor: '#b34c4c',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  socialIconImage: {
    width: '100%',
    height: '100%',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  muted: {
    color: '#7f5853',
  },
  link: {
    color: '#b34c4c',
    fontWeight: '700',
  },
});
