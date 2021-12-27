import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import {useDispatch} from 'react-redux';
import { getCategories } from '../store/actions/categories.actions';

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCategories())
    }, [])

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
