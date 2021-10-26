import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header' 
import TodoItem from './components/todoitem';

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Get Mobile', key: '1' },
    { title: 'Buy shoes', key: '2' },
    { title: 'Buy Belt', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.key != key)
    })
  }

  const onsubmitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevState) => {
        return [
          { title: text, key: Math.random().toString()},
          ...prevState
        ]
      })
    }
    else{
      Alert.alert('OOPS!', 'Length cannot be less than 3', [
        {text:'Understood', onPress:() => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onsubmitHandler={onsubmitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={ todos }
              renderItem={ ({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1

  },
  list: {
    marginTop: 20,
    flex:1
  }
  
});
