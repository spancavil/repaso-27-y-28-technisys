import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Cart } from '../screens/Cart';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import {useSelector} from 'react-redux';

export const MainNavigator = () => {

    const Tab = createBottomTabNavigator();
    const cart = useSelector(state => state.cart.cart)

    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'HomeStack') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'home'
                        : 'home-outline'
                    }
                    size= {30}
                    color={color}
                  />
                );
              } else if (route.name === 'Cart') {
                return (
                  <Ionicons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={30}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: 'tomato',
            headerTitleAlign: 'center',
            tabBarStyle: styles.tabBar
          })}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
          />
          <Tab.Screen name="Cart" component={Cart} options={cart.length !== 0 ? { tabBarBadge: cart.length }: null}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'black',
      color: 'white',
    }
  })