/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
// import Tab3Screen from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndroid/>
}


const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colores.primary,
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
              switch (route.name) {
                case 'Tab1Screen':
                    iconName = 'bandage-outline'
                    break;
                case 'Tab2Screen':
                    iconName = 'basketball-outline'
                    break;
                case 'StackNavigator':
                    iconName = 'bookmarks-outline'
                    break;
               }
               return (
                 <Icon name={iconName} size={20} color={color} />
               );
            },
        })}
    >
      <BottonTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottonTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottonTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}
const BottomTabIOS = createBottomTabNavigator();

export const  TabsIOS = () =>  {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused, size}) => {
               let iconName: string = '';
               switch (route.name) {
                case 'Tab1Screen':
                    iconName = 'bandage-outline'
                    break;
                case 'Tab2Screen':
                    iconName = 'basketball-outline'
                    break;
                case 'StackNavigator':
                    iconName = 'bookmarks-outline'
                    break;
               }
               return (
                 <Icon name={iconName} size={20} color={color} />
               );
            },
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: { elevation: 0},
            tabBarLabelStyle:{
                fontSize: 15,
            },
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
