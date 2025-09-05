import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Offers from '../screens/Offers';
import Wishlist from '../screens/Wishlist';
import ProductDetails from '../screens/ProductDetails';
import { AuthContext } from '../context/AuthContext';
import { Text, Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs() {
  const BagBadge = () => {
    const ReactUseContext = React.useContext; // avoid linter in vanilla env
    const { items } = ReactUseContext(require('../context/BagContext').BagContext);
    const count = items.reduce((s, it) => s + (it.qty || 1), 0);
    return count ? <Text style={{ color: '#fff', backgroundColor: '#9c4a46', paddingHorizontal: 6, borderRadius: 10, overflow: 'hidden' }}>{count}</Text> : null;
  };
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#9c4a46', tabBarInactiveTintColor: '#8a8a8a', tabBarLabelStyle: { fontSize: 12 } }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/icons/home.png')} style={{ width: 20, height: 20, tintColor: color }} />
          ),
        }}
      />
      <Tabs.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/icons/offer.png')} style={{ width: 20, height: 20, tintColor: color }} />
          ),
          title: 'Offers',
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/icons/wishlist.png')} style={{ width: 22, height: 20, tintColor: color }} />
          ),
          title: 'Wishlist',
        }}
      />
      <Tabs.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>{'👤'}</Text>, tabBarBadge: () => <BagBadge /> }} />
    </Tabs.Navigator>
  );
}

export default function AppNavigator() {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : null}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
