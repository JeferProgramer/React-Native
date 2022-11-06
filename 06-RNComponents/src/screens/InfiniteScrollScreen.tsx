/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {

    const [numebers, setNumebers] = useState([0,1,2,3,4,5]);
      const {theme:{colors}} = useContext(ThemeContext);

    const loadMore = () => {
        const newArray: number[] = [];

       for (let i = 0; i < 5; i++){
        newArray[i] = numebers.length + i;
       }

        setNumebers([...numebers, ...newArray]);
    };

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/200/300`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
            // <Image
            //     source={{uri: `https://picsum.photos/id/${item}/200/300`}}
            //     style={{
            //         width: '100%',
            //         height: 400,
            //     }}
            // />
        );
    };

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={numebers}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => renderItem(item)}
                ListHeaderComponent={ () => (
                <View style={{marginHorizontal: 20}}>
                    <HeaderTitle title="Infinite Scroll"/>
                </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                <View style={{
                    height: 150,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size={25} color={colors.primary}/>
                </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    taxtItem : {
        backgroundColor: 'green',
        height: 150,
    },
});
