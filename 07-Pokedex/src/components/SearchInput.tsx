/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebounceValue';
import { useEffect } from 'react';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>
}

const SearchInput = ({style, onDebounce} : Props) => {

    const [textValue, setTextValue] = useState('');

    const deboncedValue = useDebouncedValue(textValue);

    useEffect(() => {
      onDebounce(deboncedValue);
    }, [deboncedValue]);


    return (
        <View style={{
            ...styles.container,
            ...style as any,
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Buscar Pokemon"
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2,
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name="search-outline"
                    color="grey"
                    size={30}
                />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
});
