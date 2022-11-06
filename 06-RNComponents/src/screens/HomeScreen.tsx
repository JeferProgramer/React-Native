/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/itemSeparetor';

export const HomeScreen = () => {

  return (
    <View style={{ flex:1,...styles.globalMargin }}>

      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú"/>}
        ItemSeparatorComponent={ItemSeparator}
      />

    </View>
  );
};
