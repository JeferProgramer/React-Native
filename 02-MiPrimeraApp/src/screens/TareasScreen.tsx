import React from 'react';
import { View, StyleSheet } from 'react-native';

const TareasScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorado}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  );
};

export default TareasScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cajaMorado:{
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'flex-end',
        bottom: 300,
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});
