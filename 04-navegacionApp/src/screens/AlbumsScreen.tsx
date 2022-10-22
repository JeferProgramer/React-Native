import React,{useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

const AlbumsScreen = () => {

  const {logout,authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {
        authState.isLoggedIn && (
          <Button title="Logout" onPress={logout}/>
        )
      }
    </View>
  );
};

export default AlbumsScreen;
