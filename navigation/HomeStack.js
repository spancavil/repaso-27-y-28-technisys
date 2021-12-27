import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { ItemList } from '../screens/ItemList';
import { ItemDetail } from '../screens/ItemDetail';

export const HomeStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Categories' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Categories" component={Home} />
            <Stack.Screen name="ItemList" component={ItemList} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
    )
}
