/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, ActivityIndicator, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    const {simplePokemonList, loadPokemos} = usePokemonPaginated();

    return (
      <View>
          <Image
              source={require('../assets/pokebola.png')}
              style={styles.pokebolaBG}
          />

          <View style={{
            ...styles.globalMargin,
            alignItems: 'center',
          }}>
            <FlatList
              data={simplePokemonList}
              keyExtractor={(pokemon) => pokemon.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListHeaderComponent={(
                <Text style={{
                  ...styles.title,
                  ...styles.globalMargin,
                  top: top + 20,
                  paddingBottom: 10,
                  marginBottom: top + 20,
                }}>Pokedex</Text>
              )}
              renderItem={({item}) =>  (
                <PokemonCard
                  pokemon={item}
                />
              )}

              //infinite Scroll
              onEndReached={loadPokemos}
              onEndReachedThreshold={0.4}

              ListFooterComponent={(
                <ActivityIndicator
                  style={{height: 100}}
                  size={20}
                  color="grey"
                />
              )}

            />
          </View>


      </View>
    );
};

export default HomeScreen;
