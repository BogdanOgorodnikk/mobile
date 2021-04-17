import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [selector, setSelector] = useState('Тарілки')
  const [makers, setMakers] = useState([])
  const [price, setPrice] = useState([])
  const [show, setShow] = useState(false)

  function addMaker(e, arr,setter, value) {
    arr.push(value)
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == value) {
        count++;
        if(count === 2) {
          arr.splice(i, 1)
          arr.splice(save, 1)
        }
      let save = i;
      }
    }
    setter([...arr])
    console.log(arr)
  }

  function showInfo() {
    if(makers.length > 0 && price.length > 0) {
      setShow(true)
    } else if(makers.length === 0 && price.length === 0) {
      alert('Ви не вибрали виробника і діапазон цін')
    } else if(makers.length === 0) {
      alert('Ви не вибрали виробника')
    } else if(price.length === 0) {
      alert('Ви не вибрали діапазон цін')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Виберіть свій посуд</Text>
      <RNPickerSelect
            onValueChange={(event) => setSelector(event)}
            items={[
                { label: 'Тарілки', value: 'Тарілки' },
                { label: 'Чашки', value: 'Чашки' },
                { label: 'Ковшики', value: 'Ковшики' },
            ]}
      />
      <Text>Виберіть виробників</Text>
        <CheckBox title="Китай" onPress={(e) => addMaker(e, makers,setMakers, 'Китай')} type="checkbox" value="Китай"/>
        <CheckBox title="Італія" onPress={(e) => addMaker(e, makers, setMakers, 'Італія')} type="checkbox" value="Італія"/>
        <CheckBox title="Україна" onPress={(e) => addMaker(e, makers,setMakers, 'Україна')} type="checkbox" value="Україна"/>
      <Text>Виберіть діапазон цін</Text>
        <CheckBox title="100-200" onPress={(e) => addMaker(e, price, setPrice, '100-200')} type="checkbox" value="100-200"/>
        <CheckBox title="200-500" onPress={(e) => addMaker(e, price, setPrice, '200-500')} type="checkbox" value="200-500"/>
        <CheckBox title="500-1000" onPress={(e) => addMaker(e, price, setPrice, '500-1000')} type="checkbox" value="500-1000"/>

      <Button onPress={showInfo} title="Ok" />
      {show === true &&
        <View>
          <Text>Ваший вибір</Text>
          <Text>Вибір посуду: {selector}</Text>
          <Text>Вибір виробників:  
            {makers.map((maker, i) => (
              <Text key={i}>{maker} </Text>
            ))}
          </Text>
          <Text>Діапазон цін:  
            {price.map((pric, i) => (
              <Text key={i}>{pric} </Text>
            ))}
          </Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
