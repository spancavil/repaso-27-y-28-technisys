import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { CategoryButton } from '../components/CategoryButton';
import { selectCategory } from '../store/actions/categories.actions';
import { filterProducts } from '../store/actions/products.actions';

export const Home = ({navigation}) => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)

    const handleSelectCategory = (category) => {
        console.log(category);
        dispatch(selectCategory(category));
        dispatch(filterProducts(category))
        navigation.navigate('ItemList');
    }

    console.log(categories);
    // useEffect(()=> {
    //     dispatch(getCategories())
    // }, [])

    return (
        <>
            <View style={styles.container}>
            {categories.length !== 0 ? 
                <FlatList
                data = {categories}
                keyExtractor={category => category.toString()}
                renderItem={ ({item}) => {
                    return <CategoryButton title={item} handlePress={() => handleSelectCategory (item)}></CategoryButton>
                }}
                ></FlatList>
                :
                <ActivityIndicator size ="large" color='blue' />
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
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Oswald',
        fontSize: 25,
    }
})
