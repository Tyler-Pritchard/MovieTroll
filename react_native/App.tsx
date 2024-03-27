import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const Home = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <NavigationContainer>
                    <Auth0Provider domain={"dev-rtbvnrdv112cpfqv.us.auth0.com"} clientId={"WxHm7EYttkpDkgbF2GsrDqT0qqsuUMpq"}>
                        {/* <Main /> */}
                        <Home />
                    </Auth0Provider>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });