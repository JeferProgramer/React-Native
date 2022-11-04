/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style = {}}:Props) => {

    const {opacity, fadeIn} = useAnimation();
    const [isLoaded, setisLoaded] = useState(false);
    const {theme:{colors}} = useContext(ThemeContext);

    const finishLoading = () => {
        setisLoaded(false);
        fadeIn();
    };


    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoaded &&
                    <ActivityIndicator style={{position: 'absolute'}} size={25} color={colors.primary}/>
            }
            <Animated.Image
                source={{uri}}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    // width: '100%',
                    // height: 400,
                    opacity,
                }}
            />
        </View>
    );
};
