import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex:1,
    },
    title:{
        paddingHorizontal: 50,
        paddingVertical:20,
        fontSize: 20,
        marginRight:20,
        marginLeft:20,
        borderWidth:10,
        color: 'white',
        // backgroundColor: 'red',
    },
});
