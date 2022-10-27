/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{}

const DetailsScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const base_url = 'https://image.tmdb.org/t/p/w500';
  const uri = `${base_url}${movie.poster_path}`;

  const {isLoading,cast,MovieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>

      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri}}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>
        {
          isLoading
            ? <ActivityIndicator size={35} color="green" style={{marginTop: 20}}/>
            : <MovieDetails cast={cast} movieFull={MovieFull}/>
        }
      </View>

      {/* Boton para cerrar */}
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={50}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer:{
    backgroundColor: 'red',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imageBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  posterImage:{
    flex: 1,
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle:{
    fontSize: 16,
    opacity: 0.8,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton:{
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});

export default DetailsScreen;
