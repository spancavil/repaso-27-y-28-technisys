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
            {cart.length !== 0 ?

            <View style={styles.container}>
                <FlatList
                data = {cart}
                keyExtractor={producto => producto.id.toString()}
                renderItem={({item})=> {
                    return <Item {...item} cart={true}/>
                }}
                />
            </View>
            :
                <Text>No hay productos en el carrito</Text>
            }           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
})
