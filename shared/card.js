import { StyleSheet, View } from "react-native";
import React from 'react';

export default function Card(props){
    return(
        <View style={styles.Card}>

            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        borderRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#eee',
        backgroundColor: '#fff',
        shadowRadius: 4,
        marginHorizontal:10,
        marginVertical: 5,
        paddingVertical: 5,
        elevation: 3,
        shadowOpacity: 0.4,
    },
    cardContent:{

    }
})