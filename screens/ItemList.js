import React from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import { Item } from '../components/Item'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export const ItemList = () => {

    const productosFiltrados = useSelector(state => state.products.filteredProducts);
    const Navigation = useNavigation()

    console.log(productosFiltrados);
    return (
        <>
            {productosFiltrados ?

            <View style={styles.container}>
                <TouchableOpacity 
                style = {styles.button}
                onPress={()=> Navigation.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    button: {
        backgroundColor: 'gray',
        padding: 6,
        width: '30%',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginVertical: 5,
    }
})
