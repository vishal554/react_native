import React, { useState } from 'react';
import {  Text, View, StyleSheet, Modal, Keyboard } from 'react-native';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../shared/card'
import ReviewForm from './reviewForm';
import { connect } from 'react-redux'
const Home = ( { navigation, movies, submitForm } ) => {
  
  const [isOpened, setIsOpened] = useState(false)

  
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
          
          <ReviewForm addMovie={submitForm} setIsOpened={setIsOpened}/>
          
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

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitForm: (values) => dispatch({type:'SUBMIT_FORM', data: values})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

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
