import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import { Item } from '../components/Item';

export const Cart = () => {
        
    const {cart} = useSelector(state => state.cart);
    const Navigation = useNavigation()

    return (
        <>
            <View style={styles.container}>
            {cart.length !== 0 ?

                <FlatList
                data = {cart}
                keyExtractor={producto => producto.id.toString()}
                renderItem={({item})=> {
                    return <Item {...item} cart={true}/>
                }}
                />
            :
                <Text style={styles.text}>No hay productos en el carrito</Text>
            }           
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Oswald',
        fontSize: 25,
    }
})
