import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

export default function AddTodo({ onsubmitHandler }){
    const [text, setText] = useState('')

    function changeTextHandler(val){
        setText(val)
    }
    return (
        <View>
            <TextInput 
                onChangeText={changeTextHandler}
                placeholder="Add Todos.."
                style={styles.textinput}
            />
            <Button title="Add Todo" onPress={() => onsubmitHandler(text)}> </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        margin: 10,
        padding: 10,
        borderBottomColor: 'coral',
        borderBottomWidth:1,
    }
})