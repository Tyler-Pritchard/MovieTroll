import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/LoadingComponent';
import * as Sharing from 'expo-sharing';

const PlaybackScreen = () => {
  let recordings = useState([recordings])
  if (recordings.isLoading) {
      return <Loading />;
  }
  if (recordings.errMess) {
      return (
          <View>
              <Text>{recordings.errMess}</Text>
          </View>
      );
  }

    function getRecordingLines() {
      return recordings.map((recordingLine, index) => {
        return (
          <View key={index} style={styles.row}>
            <Text style={styles.fill}>
              Recording {index + 1} - {recordingLine.duration}
            </Text>
            <Button 
              style={styles.button} 
              onPress={() => recordingLine.sound.replayAsync()}
              title='Play'
            />
            <Button 
              style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"
            />
          </View> 
        )
      })
    }
    return (
      <View style={styles.container}>
        {getRecordingLines()}
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 1,
      margin: 16
    },
    button: {
      margin:16
    }
  });
  

  export default PlaybackScreen;