/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { SectionList, View, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/itemSeparetor';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: 'DC Comics',
      data: ['Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ,'Batman', 'Superman', 'Robin' ],
    },
    {
      casa: 'Marvel Comics',
      data: ['Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman' , 'Antman', 'Thor', 'Spiderman','Antman' , 'Antman', 'Thor', 'Spiderman','Antman' ,'Antman', 'Thor', 'Spiderman','Antman'  ],
    },
    {
      casa: 'Anime',
      data: ['Kenshin', 'Goku', 'Saitama' , 'Kenshin', 'Goku', 'Saitama' , 'Kenshin', 'Goku', 'Saitama' , 'Kenshin', 'Goku', 'Saitama' , 'Kenshin', 'Goku', 'Saitama' , 'Kenshin', 'Goku', 'Saitama' ],
    },
];

const CustomSectionList = () => {

  const {theme:{colors}} = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex:1}}>
        <SectionList
            sections={casas}
            renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
            ListFooterComponent={() =>
                <View style={{marginBottom: 70}}>
                    <HeaderTitle title={'total de casas ' + casas.length}/>
                </View>
            }
            stickySectionHeadersEnabled
            renderSectionHeader={({section:{casa}}) =>
              <View style={{backgroundColor: colors.background}}>
                  <HeaderTitle title={casa}/>
              </View>
            }
            renderSectionFooter = {({section}) => (
                <HeaderTitle title={'Total : ' +  section.data.length}/>
            )}

            SectionSeparatorComponent={() => <ItemSeparator />}
            ItemSeparatorComponent={() => <ItemSeparator/>}

            showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

export default CustomSectionList;
