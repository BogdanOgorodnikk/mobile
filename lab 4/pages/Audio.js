import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Audio} from 'expo-av';

export default function App() {
  const [sound, setSound] = useState({});

  useEffect(() => {
    const setNewSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: localStorage.getItem('url') },
            { shouldPlay: false }
        );
        setSound(sound);
    }
    setNewSound();
 },[])

  return (
    <View>
        <Text>Тип програвача аудіо</Text>
        <a href="/">Повернутись на головну</a>
        <Button title={'Play'} onPress={() => {sound.playAsync();}}/>
        <Button title={'Pause'} onPress={() => {sound.pauseAsync();}}/>
        <Button title={"Stop"} onPress={() => {sound.stopAsync()}}/>
    </View>
  );
}