import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

  const {signIn,authState : {isLoggedIn}} = useContext(AuthContext);

  return (
    <View>
      <Text>Contacts Screen</Text>
      {
        isLoggedIn
        ? <Text>Estas logeado</Text>
        : <Button title="SignIn" onPress={signIn}
      />
      }
    </View>
  );
};

export default ContactsScreen;
