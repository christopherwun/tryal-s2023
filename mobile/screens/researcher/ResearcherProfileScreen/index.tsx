import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../../navigation/types';
import { StackScreenProps } from '@react-navigation/stack';

type ProfileScreenProps = StackScreenProps<ProfileStackParamList, 'MainProfile'>;

export default function ResearcherProfileScreen({ navigation }: ProfileScreenProps) {

  const toSettings = () => { 
    navigation.navigate('Settings')
  }

  return (
    <View>
      <Text>ResearcherProfileScreen</Text>
      <TouchableOpacity onPress={toSettings} >
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}