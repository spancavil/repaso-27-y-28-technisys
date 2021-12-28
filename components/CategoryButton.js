import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'

export const CategoryButton = ({title, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.button} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        padding: 6,
        width: 200,
        marginVertical: 50,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 7,
        alignSelf: 'center'
    },
    text: {
        fontSize: 25
    }
})