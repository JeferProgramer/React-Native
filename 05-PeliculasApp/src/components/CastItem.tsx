/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    cast: Cast
}

export const CastItem = ({cast}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
  return (
    <View style={styles.container}>
        {
            cast.profile_path && (
                <Image
                    source={{uri}}
                    style={{width: 50, height: 50, borderRadius: 10}}
                />
            )
        }
        <View style={styles.actorInfo}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {cast.name}
            </Text>
            <Text style={{fontSize: 16, opacity: 0.7}}>
                {cast.character}
            </Text>
        </View>
    </View>

  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
});
