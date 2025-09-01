import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { BagProvider } from './src/context/BagContext';

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#fff7f5' },
};

export default function App() {
  return (
    <AuthProvider>
      <BagProvider>
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </BagProvider>
    </AuthProvider>
  );
}
