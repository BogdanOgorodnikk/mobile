import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function secondwindow() {

    const [userInfos, setUserInfos] = useState([])

    async function getUserInfo() {
        const response = await axios.get('http://localhost:5000/api/userinfos');

        setUserInfos(response.data)
    }

    useEffect(() => {
        getUserInfo()
    }, [userInfos])

        return (
            <View className="modal-manager">
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
                        <a href="/">Закрити вибір</a>
                        </View>
                    </View>
                </View>
            </View>
        )
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