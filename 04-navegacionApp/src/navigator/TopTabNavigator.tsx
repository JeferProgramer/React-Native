/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlbumsScreen from '../screens/AlbumsScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';

//de esta forma oculto los warning de ser necesario
import { LogBox } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () =>  {

  const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      //forma antigua
      // tabBarOptions={{
      //   pressColor: colores.primary,
      //   showIcon: true,
      //   indicatorStyle:{
      //     backgroundColor: colores.primary,
      //   },
      //   style: {
      //     shadowColor: 'transparent',
      //     elevation:0,
      //   },
      // }}
      //forma nueva
      screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
               let iconName: string = '';
               switch (route.name) {
                case 'Chat':
                    iconName = 'chatbox-ellipses-outline';
                    break;
                case 'Contacts':
                    iconName = 'people-outline';
                    break;
                case 'Albums':
                    iconName = 'albums-outline';
                    break;
               }
               return (
                <Icon name={iconName} size={20} color={color}/>
               );
            },
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
              backgroundColor: colores.primary,
            },
            tabBarStyle: {
              shadowColor: 'transparent',
              elevation: 0,
            },
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
