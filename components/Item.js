import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Item = ({title, image, price}) => {
    return (
        <View>
            <Image 
            source={{uri: image}}
            style = {styles.imagen}
            />
            <Text>{title}</Text>
            <Text>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 200,
    }
})
