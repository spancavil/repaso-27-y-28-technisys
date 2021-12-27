import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { addItem } from '../store/actions/cart.actions';

export const ItemDetail = () => {

    const dispatch = useDispatch();
    const productoSeleccionado = useSelector(state => state.products.selectedProduct);
    const {title, price, description, image} = productoSeleccionado;
    const Navigation = useNavigation();

    const handleAdd = (producto) => {
        console.log(producto);
        dispatch(addItem(producto));
    } 

    return (
        <>
            {productoSeleccionado ?
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=> Navigation.goBack()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <Image 
                source={{uri: image}}
                style = {styles.imagen}
                />
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>${price}</Text>
                <TouchableOpacity style={styles.button} onPress={()=> handleAdd(productoSeleccionado)}>
                    <Text >Add to Cart</Text>
                </TouchableOpacity>
            </View>
            :
            <ActivityIndicator size='large' color = 'blue'/>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        flexDirection: 'column',
    },
    button: {
        backgroundColor: 'gray',
        padding: 6,
        width: '40%',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    imagen: {
        width: '95%',
        height: 300,
    },
})
