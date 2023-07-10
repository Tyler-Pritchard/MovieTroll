import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function PlaybackComponent(props) {
  const [sound, setSound] = React.useState();
  
  async function playSound() {
    console.log('Loading Sound');
    console.log('recording', props.audioFile)
    const { sound } = await Audio.Sound.createAsync(require('../json-server/public/recordings/test1.mp3') //<<< WORKS
    //const { sound } = await Audio.Sound.createAsync(require(props.audioFile)   //<<<  DOES NOT WORK
    
    );
    //console.log(sound)
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
});