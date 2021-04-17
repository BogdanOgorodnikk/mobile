import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Button } from 'react-native-elements'

const ModalManagerEdit = ({show, setShow, selector, makers, price}) => {

    if(show) {
        return (
            <View className="modal-manager">
                <View className="opinion" onClick={() => setShow(false)}></View>
                <View className="modal-manager__box" onClick={e => e.stopPropagation()}>
                    <Text className="modal-manager__headline">Ваший вибір</Text>
                    <View className="modal-manager__form">
                        <Text className="modal-manager__form--info">Вибір посуду: {selector} </Text>
                        <Text className="modal-manager__form--info">Вибір виробників: 
                            {makers.map((maker, i) => (
                                <Text key={i}>{maker} </Text>
                            ))}
                        </Text>
                        <Text className="modal-manager__form--info">Вибір діапазону цін: 
                            {price.map((pric, i) => (
                                <Text key={i}>{pric} </Text>
                            ))}
                        </Text>
                        <View className="modal-manager__form--block">
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

export default ModalManagerEdit;