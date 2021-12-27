import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'

export const CategoryButton = ({title, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.button} >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        marginVertical: 10,
        width: '50%'
    }
})