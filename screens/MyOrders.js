import React from 'react'
import { FlatList, View, Text } from 'react-native';

export const MyOrders = ({orders}) => {
    console.log(orders);
    return (
        <View>
            <FlatList
            data={orders}
            keyExtractor={order => order.id.toString()}
            renderItem={({item})=> {
                return <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Total: ${item.total}</Text>
                    <Text>Fecha: {item.date}</Text>
                </View>
            }}
            ></FlatList>
        </View>
    )
}
