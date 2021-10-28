import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        paddingTop: 20,
        flex: 1,
    },
    inputText:{
        fontFamily: 'nunito-bold',
        fontSize: 20,
        paddingTop: 30,
        color: '#333',
    },
    paragraph:{
        marginVertical: 8,
        lineHeight:20,
    },
    input:{
        borderColor:'#ddd',
        borderRadius:6,
        fontSize: 18,
        borderWidth: 1,
        padding:10,

    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6, 
        textAlign: 'center'
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}