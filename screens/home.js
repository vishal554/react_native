import React, { useState } from 'react';
import {  Text, View, StyleSheet, Modal, Keyboard } from 'react-native';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../shared/card'
import ReviewForm from './reviewForm';

export default function Home( { navigation } ) {
  
  const [isOpened, setIsOpened] = useState(false)

  const [movies, setMovies] = useState([
    {title:'The lord of the rings', rating:4, body: 'at node8:41 in callReactNativeMicrotasks', key:'1'},
    {title:'The lord of the rings part 2', rating:3, body: 'at node8:41 in callReactNativeMicrotasks', key:'2'},
    {title:'Se7en', rating:2, body: 'at node8:41 in callReactNativeMicrotasks', key:'3'},
    {title:'Memento', rating:5, body: 'at node8:41 in callReactNativeMicrotasks', key:'4'},
    
  ])

  const addMovie = (values) => {
    values.key = Math.random().toString()
    setMovies((prevState) => {
      return [values, ...prevState]
    })
    setIsOpened(false)
  }

  return (
    <View>
        <Modal visible={isOpened} 
            animationType="slide">
          
          <MaterialIcons 
            style={{...styles.materialicon, ...styles.closeicon}}
            onPress={() => setIsOpened(false)}
            name="close"
            size={24}
          />
          
          <ReviewForm addMovie={addMovie} />
          
        </Modal>

        <MaterialIcons 
          style={{...styles.materialicon, ...styles.addicon}}
          onPress={() => setIsOpened(true)}
          name="add"
          size={24}
        />
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Card>
                <Text> Title: {item.title} </Text>
                <Text> Rating : {item.rating} </Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
      
    )
}

const styles = StyleSheet.create({
  materialicon:{
    margin:10, 
    padding:5,
    alignSelf: 'center',
    borderRadius:5,
    borderWidth:1,
    textAlign:'center',
    alignItems:'center',
  },
  addicon:{
    backgroundColor: 'green'
  },
  closeicon:{
    backgroundColor: 'red'
  }
})
