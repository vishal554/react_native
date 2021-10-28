import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from '../shared/card'
import { images } from '../styles/global';


export default function Details({route, navigation}) {

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.inputText}> {route.params.title} </Text>
        <Text style={styles.inputText}> {route.params.body} </Text>

        <View style={styles.rating}>
        <Text> Rating: </Text> 
        <Image source={images.ratings[route.params.rating]} />
        </View>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    inputText:{
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
    rating: {
      flexDirection:'row',
      marginTop: 16,
      paddingTop: 16,
      justifyContent: 'center'
    }
});
