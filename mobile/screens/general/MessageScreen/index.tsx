import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import MessagesList from '../../../components/MessagesList';
import Header from '../../../components/Header';
import AppNavigator from '../../../components/AppNavigator';
import styles from '../../../styles'
import { ChatRoom, Trial } from '../../../utils/types';
import { testChatRoom1, testChatRoom2, testChatRoom3 } from '../../../utils/testObjs';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../../stores/userReducer';

const DATA: ChatRoom[] = [testChatRoom1, testChatRoom2, testChatRoom3];
const screenName = 'Messages';

export default function MessageScreen({navigation}: {navigation: any}) {
  const [search, setSearch] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const [study, setStudy] = useState<Trial | null>(null);

  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser);

  const updateSearch: (text: string) => void = (search: string) => {
    setSearch(search);
  };

  function MainPage() {
    return (
      <View style={styles.container}>
        <Header title='Messages'/>
        <Searchbar
          placeholder="Search Messages"
          onChangeText={updateSearch}
          value={search}
          style={styles.searchbar}
        />

        <ScrollView showsVerticalScrollIndicator={false} 
        style={{flex: 1, width: '100%', alignContent:'center'}}
        >
          { user ? 
          <MessagesList data={DATA} navigation={navigation}/> : 
          <Text>Log in to send and receive messages</Text>
          }
        </ScrollView>
      </View>
    )
  }

  return (
    <AppNavigator name={screenName} components={[MainPage]} profileFocusable studyFocusable userID={userID} trial={study}/>
  )
}
