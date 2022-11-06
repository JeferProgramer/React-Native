/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
      const {theme:{colors}} = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 2000);
    };

    return (
    <ScrollView style={{
        marginTop: refreshing ? top : 0,
    }}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={20}
                progressBackgroundColor={colors.text}
                colors={[colors.background]}
                title="Refreshing"
            />
        }
    >
        <View>
            <HeaderTitle title="Pull to refresh"/>
            {
                data && <HeaderTitle title={data}/>
            }
        </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
