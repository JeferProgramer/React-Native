/* eslint-disable handle-callback-err */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ImageStyle, StyleProp, NativeSyntheticEvent, ImageErrorEventData, ActivityIndicator, View, Animated } from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

const FadeInImage = ({uri, style = {}}:Props) => {

    const {opacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
        setIsLoading(false);
    };

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>
            {
                isLoading &&
                    <ActivityIndicator
                        style={{position: 'absolute'}}
                        color="grey"
                        size={30}
                    />
            }
            <Animated.Image
                source={{uri}}
                onError={onError}
                onLoad={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
};

export default FadeInImage;
