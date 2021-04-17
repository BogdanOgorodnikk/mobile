import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import ModalWindow from './components/ModalWindow'
import axios from 'axios'

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
  }

  function showInfo() {
      setShow(true)
  }

  async function createUserInfo(type, made, price) {
    setShow(false)
    try {
      await axios.post('http://localhost:5000/api/userinfo', {
        type: type,
        mader: made,
        price: price
      })

      alert('Запис успішно створений')
    } catch (e) {
      alert('Відбулась помилка' + e)
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
        <CheckBox title="Китай" onPress={(e) => addMaker(e, makers,setMakers, 'Китай')} type="checkbox" value="Китай" checkedIcon='dot-circle-o'/>
        <CheckBox title="Італія" onPress={(e) => addMaker(e, makers, setMakers, 'Італія')} type="checkbox" value="Італія" checkedIcon='dot-circle-o'/>
        <CheckBox title="Україна" onPress={(e) => addMaker(e, makers,setMakers, 'Україна')} type="checkbox" value="Україна" checkedIcon='dot-circle-o'/>
      <Text>Виберіть діапазон цін</Text>
        <CheckBox title="100-200" onPress={(e) => addMaker(e, price, setPrice, '100-200')} type="checkbox" value="100-200" checkedIcon='dot-circle-o'/>
        <CheckBox title="200-500" onPress={(e) => addMaker(e, price, setPrice, '200-500')} type="checkbox" value="200-500" checkedIcon='dot-circle-o'/>
        <CheckBox title="500-1000" onPress={(e) => addMaker(e, price, setPrice, '500-1000')} type="checkbox" value="500-1000" checkedIcon='circle-o' checkedColor='red'/>

      <Button style={styles.buttonMargin} onPress={() => createUserInfo(selector, makers, price)} title="Зберегти інформацію" />
      
      <Button onPress={showInfo} title="Відкрити інформацію" />
      <ModalWindow show={show} setShow={setShow}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttonMargin: {
    marginBottom: 20
  }
});
