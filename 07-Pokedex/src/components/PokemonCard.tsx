/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-fallthrough */
import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import FadeInImage from './FadeInImage';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export type PokemonParams = {
    PokemonScreen : {simplePokemon: SimplePokemon, color: string}
};

const PokemonCard = ({pokemon}:Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation<StackNavigationProp<PokemonParams>>();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, {fallback: 'grey'})
            .then(colors => {

                if (!isMounted.current) {return;}

                switch (colors.platform) {
                    case 'android':
                        setBgColor(colors.dominant || 'grey');
                        break;
                    case 'ios':
                        setBgColor(colors.background || 'gray');
                    default:
                        setBgColor('grey');
                        break;
                }
            });

        return () => {
            isMounted.current = false;
        };

    }, []);


    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('PokemonScreen', {
                simplePokemon: pokemon,
                color: bgColor,
            })}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor,
            }}>
                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        { '\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeBola}
                    />
                </View>


                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
};

export default PokemonCard;

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokeBola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20,
    },
    pokemonImage : {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden',
    },
});
