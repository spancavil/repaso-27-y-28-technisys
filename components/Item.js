import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch} from 'react-redux';
import { removeItem } from '../store/actions/cart.actions';
import { selectedProduct } from '../store/actions/products.actions';

export const Item = ({title, image, price, id, cart = false}) => {

    const Navigation = useNavigation()
    const dispatch = useDispatch()

    const handleDetail = (id) => {
        dispatch(selectedProduct(id))
        Navigation.navigate('ItemDetail')
    }

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <View style={styles.container}>
            <Image 
            source={{uri: image}}
            style = {styles.imagen}
            />
            <Text>{title}</Text>
            <Text>${price}</Text>
            {cart ?
            <TouchableOpacity style={styles.button} onPress={()=> handleRemove(id)}>
                <Text>Remove</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.button} onPress={()=> handleDetail(id)}>
                <Text>View Detail</Text>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: '95%',
        height: 200,
    },
    container: {
        margin: 5,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: 'gray',
        padding: 6,
        width: '30%',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 7
    }
})
