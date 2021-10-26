import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }){
    return (
        
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <AntDesign name="delete" size={20} color="black" />
            </TouchableOpacity>
            <Text> {item.title} </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        padding: 16,
        margin: 16
    }
})