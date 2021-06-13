import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import * as DocumentPicker from "expo-document-picker";

export default function VideoDownloadPage() {

    const onFilePick = async () => {
        const file = await DocumentPicker.getDocumentAsync();
        if (file.type !== "cancel") {
          console.log(file.uri)
            localStorage.setItem('url', file.uri)
        }
    }

    const onFileDownload = () => {
        window.location.href = 'audio'
    }

  return (
    <View>
        <Text>Тип програвача Аудіо</Text>
        <a href="/">Повернутись на головну</a>
        <Button title={"Вибрати аудіо"} onPress={onFilePick}/>
        <TextInput style={styles.input} onChangeText={(text) => localStorage.setItem('url', text)}/>
        <Button title={"Загрузити"} onPress={onFileDownload}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      width: 500,
      height: 50,
      borderStyle:"solid",
      borderWidth: 1,
      fontSize: 24,
      marginTop: 10
    },
  });