import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}> About Screen </Text>
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
    }
});
