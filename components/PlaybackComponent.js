import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

export default function PlaybackComponent(props) {
  const [sound, setSound] = React.useState();
  
  async function playSound() {
    const response = await axios.get(baseUrl + props.audioFile);
    const { uri } = response.data;
    console.log('Loading Sound');
    console.log('recording', props.audioFile)
    //const { sound } = await Audio.Sound.createAsync(require({uri})
    const { sound } = await Audio.Sound.createAsync(require('../json-server/public/recordings/test1.mp3')
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