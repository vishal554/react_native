import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }){
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}> {item.title} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        padding: 16,
        margin: 16
    }
})