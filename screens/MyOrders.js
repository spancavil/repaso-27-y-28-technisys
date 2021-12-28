import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';

export const MyOrders = ({orders}) => {
    console.log(orders);
    return (
        <View style={styles.container}>
            <FlatList
            data={orders}
            keyExtractor={order => order.id.toString()}
            renderItem={({item})=> {
                return <View style={styles.ordersContainer}>
                    <Text style={styles.text}>ID: {item.id}</Text>
                    <Text style={styles.text}>Total: ${item.total.toFixed(2)}</Text>
                    <Text style={styles.text}>Fecha: {item.date}</Text>
                </View>
            }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100vw'
    },
    ordersContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'gray',
        marginVertical: 10,
        // width: '100%',
        padding: 7,
        borderRadius: 6,
    },
    text: {
        fontSize: 12,
    }
})
