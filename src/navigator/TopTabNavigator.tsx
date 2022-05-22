import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { AlbumsScreen } from '../screens/AlbumsScreen';


LogBox.ignoreLogs(['Sending'])


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top:paddingTop } = useSafeAreaInsets()


  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch( route.name ) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline'
            break;

            case 'Contacts':
              iconName = 'people-outline'
            break;

            case 'Albums':
              iconName = 'albums-outline'
            break;
          }

          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}