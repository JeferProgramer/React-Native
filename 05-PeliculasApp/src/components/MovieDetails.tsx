/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/estiles';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
    movieFull?: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
        {/* Detalles */}
       <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection : 'row'}}>
                <Icon
                    name="star-outline"
                    color="gray"
                    size={16}
                />

                <Text style={styles.contenidoDetalle}>{movieFull?.vote_average}</Text>

                <Text style={styles.contenidoDetalle}>
                     - {movieFull?.genres.map(g => g.name).join(', ')}
                </Text>


            </View>

            {/* Historia */}
            <Text style={styles.tituloDetalle}>
                Historia
            </Text>

            <Text style={styles.contenidoDetalle}>
                {movieFull?.overview}
            </Text>

            <Text style={styles.tituloDetalle}>
                Presupuesto
            </Text>

            <Text style={styles.contenidoDetalle}>
                {currencyFormatter.format(movieFull?.budget!, {code: 'USD'})}
            </Text>

            {/* Cating */}
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={styles.tituloDetalle}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CastItem cast={item}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 70}}
                />
                {/* <CastItem cast={cast}/> */}
            </View>

       </View>
    </>
  );
};


