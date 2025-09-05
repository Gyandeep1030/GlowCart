import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { BagContext } from '../context/BagContext';

import AddressIcon from '../../assets/icons/addressicon.png';
import ContactUsIcon from '../../assets/icons/contactusicon.png';
import GetHelpIcon from '../../assets/icons/gethelpicon.png';
import LanguageIcon from '../../assets/icons/languageicon.png';
import NotificationIcon from '../../assets/icons/notificationicon.png';
import PrivacyPolicyIcon from '../../assets/icons/privacypolicyicon.png';
import GroupIcon from '../../assets/icons/Group.png';
import Group1Icon from '../../assets/icons/Group1.png';
import Vector4Icon from '../../assets/icons/logout.png';




const Row = ({ icon, label, subLabel, onPress, isLogout, rightIcon }) => (
  <TouchableOpacity onPress={onPress} style={[styles.row, isLogout && styles.logoutRow]}>
    <View style={styles.rowLeft}>
      <Image source={icon} style={styles.icon} />
      <View>
        <Text style={[styles.rowText, isLogout && styles.logoutText]}>{label}</Text>
        {subLabel ? <Text style={styles.subLabel}>{subLabel}</Text> : null}
      </View>
    </View>
    <Text style={[styles.chev, isLogout ? styles.logoutIcon : null]}>{rightIcon || '›'}</Text>
  </TouchableOpacity>
);

export default function Profile({ navigation }) {
  const { user, signOut } = useContext(AuthContext);
  const { items } = useContext(BagContext);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Full-width header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.ellipsisButton}>
          <Text style={styles.ellipsis}>⋯</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* User Card */}
        <View style={styles.userCard}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{user?.name || 'Olivia'}</Text>
            <Text style={styles.email}>{user?.email || 'Oliva@gmail.com'}</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* First Menu Section */}
        <View style={styles.card}>
          <Row icon={AddressIcon} label="Address" subLabel="Manage your saved address" onPress={() => {}} />
          <Row icon={GroupIcon} label="Order History" subLabel="View your past orders" onPress={() => {}} />
          <Row icon={LanguageIcon} label="Language" onPress={() => {}} />
          <Row icon={NotificationIcon} label="Notifications" onPress={() => {}} />
        </View>

        {/* Second Menu Section */}
        <View style={styles.card}>
          <Row icon={ContactUsIcon} label="Contact Us" onPress={() => {}} />
          <Row icon={GetHelpIcon} label="Get Help" onPress={() => {}} />
          <Row icon={PrivacyPolicyIcon} label="Privacy Policy" onPress={() => {}} />
          <Row icon={Group1Icon} label="Terms and Conditions" onPress={() => {}} />
          <Row
            icon={Vector4Icon}
            label="Log Out"
            isLogout
            rightIcon=""
            onPress={() => {
              signOut();
              navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffe9e6',
  },
  header: {
    marginTop: 50,
    width: '100%',
    backgroundColor: '#ffe9e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 16,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // shadowOffset: { width: 0, height: 2 },
    // elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  ellipsisButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipsis: {
    fontSize: 24,
    color: '#000',
    lineHeight: 24,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    padding: 8,
  },
  editIcon: {
    fontSize: 20,
    color: '#9c4a46',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0ddd9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5e6e2',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: '#9c4a46',
  },
  rowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  subLabel: {
    fontSize: 12,
    color: '#999',
  },
  chev: {
    fontSize: 18,
    color: '#9c4a46',
  },
  logoutRow: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#ff3b30',
  },
  logoutIcon: {
    color: '#ff3b30',
  },
});
