import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value} 
                onChangeText={setValue} 
                placeholder={placeholder} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    container_TEXTBOX: {
        height: '40%',
    },
    input: {
        color: '#363739'
    }
})

export default CustomInput;
