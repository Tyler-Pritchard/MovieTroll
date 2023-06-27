import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/theater.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Make Me Laugh</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: '#E2B640',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });
  

export default HomeScreen;
