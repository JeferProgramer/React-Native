/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer, useEffect } from 'react';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';
import { AppState, useColorScheme, Appearance } from 'react-native';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

    const colosScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colosScheme === 'dark') ? darkTheme : lightTheme);

    useEffect(() => {
      AppState.addEventListener('change', (status) => {
        if (status === 'active'){
            (Appearance.getColorScheme() === 'light')
            ? setLightTheme()
            : setDarkTheme();
        }
      });
    }, []);

    // useEffect(() => {
    //     (colosScheme === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme();
    // }, [colosScheme]);

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'});
        console.log('setDarkTheme');
    };

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'});
        console.log('setLightTheme');
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
