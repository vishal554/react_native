import { Formik } from 'formik'
import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Text, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as yup from 'yup'


export default function ReviewForm({ addMovie }){

    const validationSchema = yup.object({
        title: yup.string().required().min(4),
        body: yup.string().required().min(6),
        rating: yup.string().required().test('between1to5', 'Should be between 1 and 5', (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0
        })
    })

    return (
        <View style={globalStyles.container}>

            <Formik
                initialValues={{title: '', body: '', rating:''}}
                onSubmit={(values, actions) => { 
                    actions.resetForm()
                    addMovie(values)

                }}
                validationSchema={validationSchema}
                >

            {(props) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Title "
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title}</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Body "
                        multiline
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body}</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Rating (1-5) "
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType="numeric"
                        onBlur={props.handleBlur('rating')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <Button title="Submit" color="maroon" onPress={props.handleSubmit} />
                </View>
                </TouchableWithoutFeedback>
            )}


            </Formik>
        </View>
    )
}
