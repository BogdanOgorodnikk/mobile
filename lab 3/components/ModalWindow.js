import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Button } from 'react-native-elements'

const ModalManagerEdit = ({show, setShow}) => {

    const [userInfos, setUserInfos] = useState([])

    async function getUserInfo() {
        const response = await axios.get('http://localhost:5000/api/userinfos');

        setUserInfos(response.data)
    }

    useEffect(() => {
        getUserInfo()
    }, [userInfos])

    if(show) {
        return (
            <View className="modal-manager">
                <View className="opinion" onClick={() => setShow(false)}></View>
                <View className="modal-manager__box" onClick={e => e.stopPropagation()}>
                    <Text className="modal-manager__headline">Весь вибір, що є в БД</Text>
                    
                    <View className="modal-manager__form">
                        <Text className="modal-manager__form--info">
                            {userInfos.length > 0 ? userInfos.map((maker, i) => (
                                <View style={styles.blockELement} key={i}>
                                    <Text>id: {maker.id}  </Text>
                                    <Text>type: {maker.type} </Text>
                                    <Text>mader: {maker.mader} </Text>
                                    <Text>price: {maker.price} </Text>
                                </View>
                            )) :
                                <Text>Список порожній :( </Text>
                            }
                        </Text>
                        <View className="modal-manager__form--block" style={styles.buttonMargin}>
                            <Button className="modal-manager__form--block-button button" onPress={() => setShow(false)} title="Закрити"></Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    } else {
        return false
    }
}

const styles = StyleSheet.create({
    blockELement: {
      display: 'block',
      marginBottom: 10,
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'black'
    },
    buttonMargin: {
        marginTop: 20
    }
  });

export default ModalManagerEdit;