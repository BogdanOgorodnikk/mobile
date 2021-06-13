import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Video} from "expo-av";

export default function VideoPage() {
    // const videoURL = 'https://www.w3schools.com/html/mov_bbb.mp4'

    const video = React.useRef(null);

  return (
    <View>
        <Text>Тип програвача Відео</Text>
        <a href="/">Повернутись на головну</a>
        <Video
            ref={video}
            source={{uri: localStorage.getItem('url')}}
            style={{flex: 1}}
        />
        <Button
            title={'Програвати'}
            onPress={() => video.current.playAsync()}
        />
        <Button
            title={'Пауза'}
            onPress={() => video.current.pauseAsync()}
        />
        <Button title={"Зупинити"} onPress={() => video.current.stopAsync()}/>
    </View>
  );
}