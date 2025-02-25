import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/Header';
import styles from '../../../styles';
import { Searchbar } from 'react-native-paper';
import { Card, Divider } from 'react-native-paper'
// import { data } from './data';
import Icon from 'react-native-vector-icons/Ionicons';
import BarList, { BarListItem } from '../../../components/BarList';

export default function SettingsScreen({ navigation }: { navigation: any} ) {
  const [search, setSearch] = useState<string>('');
  const updateSearch: (text: string) => void = (search: string) => {
    setSearch(search);
  };

  const toPushNotifs = () => {
    navigation.navigate('PushNotifs')
  }

  const toEditProfile = () => {
    navigation.navigate('EditProfile')
  }

  const switchTabs = (userType: string) => {
    if (userType === 'researcher') {
      navigation.navigate('ParticipantTabs')
    } else {
      navigation.navigate('ResearcherTabs')
    }
  }

  const toPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy')
  }

  const toTermsOfService = () => {
    navigation.navigate('TermsOfService')
  }

  const signOut = () => {
  }

  const data: BarListItem[] = [
    {
        title: 'Push Notifications',
        onPress: toPushNotifs
    },
    {
        title: 'Edit Profile',
        onPress: toEditProfile
    },
    {
        title: 'Switch to Researcher View',
        onPress: () => switchTabs('researcher')
    },
    {
        title: 'Privacy Policy',
        onPress: toPrivacyPolicy
    },
    {
        title: 'Terms of Service',
        onPress: toTermsOfService
    },
    {
        title: 'Sign Out',
        onPress: signOut
    },
  ];

  return (
    <View style={{width: '100%', flex: 1}}>
      <View style={{width: '100%', paddingTop: 24, paddingBottom: 8, paddingHorizontal: 16, backgroundColor: '#195064'}}>
        <Header
          title='Settings'
          leftComponentType='touchable-text' leftText='Back' onLeftPress={navigation.goBack}
          textColor='white'
          backgroundColor='#195064'/> 
      </View>

      <View style={styles.container}>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <Searchbar
            placeholder="Search"
            onChangeText={updateSearch}
            value={search}
            style={styles.searchbar}
          />
          <BarList data={data} type='buttons'/>
        </ScrollView>
      </View>
    </View>
    
  )
}