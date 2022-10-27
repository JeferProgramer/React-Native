/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {

  const {nowPlaying,popular,topRated,upComing, isLoding} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async(index:number) => {

    const movie = nowPlaying[index];
    const base_url = 'https://image.tmdb.org/t/p/w500';
    const uri = `${base_url}${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  },[nowPlaying]);


  if (isLoding){
    return (
      <View style={{ flex:1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color="green" size={100}/>
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>

        {/* Carrusel Principal */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}:any) => <MoviePoster movie={item}/>}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>

        {/* Peliculas Populares */}
        <HorizontalSlider title="Popular" movies={popular}/>
        <HorizontalSlider title="Top Reated" movies={topRated}/>
        <HorizontalSlider title="Upcoming" movies={upComing}/>

      </View>

      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
