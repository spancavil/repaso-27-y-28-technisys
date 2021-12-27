import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Item } from '../components/Item'
import {useSelector} from 'react-redux'

export const ItemList = () => {

    const productosFiltrados = useSelector(state => state.products.filteredProducts)

    console.log(productosFiltrados);
    return (
        <>
            {productosFiltrados ? 
            <View>
                <FlatList
                data = {productosFiltrados}
                keyExtractor={producto => producto.id.toString()}
                renderItem={({item})=> {
                    return <Item {...item}/>
                }}
                />
            </View>
            :
            <ActivityIndicator size='large' color="red"/>
            }           
        </>
    )
}
