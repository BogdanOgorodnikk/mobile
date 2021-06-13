import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function App() {


  return (
    <View>
        <Text>Виберіть тип програвача</Text>
        <a href="/audioselector">Аудіо</a>
        <a href="/videoselector">Відео</a>
    </View>
  );
}