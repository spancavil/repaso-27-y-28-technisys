import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cart } from '../screens/Cart';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import {useSelector} from 'react-redux';
import { MyOrders } from '../screens/MyOrders';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Register } from '../screens/Register';
import { Login } from '../screens/Login';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signOut} from 'firebase/auth';

export const MainNavigator = () => {

    const Tab = createBottomTabNavigator();
    const cart = useSelector(state => state.cart.cart)

    const [user,setUser] = useState()

    const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

    useEffect(()=> {
      //Logica para obtener usuario loggeado
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user);
          setUser(user);
          // ...
        } else {
          setUser(null)
          // User is signed out
          // ...
        }
      });
    }, [])

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
              } else if (route.name === 'My Orders') {
                return (
                  <Ionicons
                    name={focused ? 'list-circle' : 'list-circle-outline'}
                    size={30}
                    color={color}
                  />
                );
              } else if (route.name === 'Login') {
                return (
                  <SimpleLineIcons
                    name={'login'}
                    size={30}
                    color={color}
                  />
                );
              } else if (route.name === 'Register') {
                return (
                  <Ionicons
                    name={focused ? 'list-circle' : 'list-circle-outline'}
                    size={30}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: 'tomato',
            headerTitleAlign: 'center',
            tabBarStyle: styles.tabBar,
            headerRight: () => (
              user && <TouchableOpacity style = {styles.logOut} onPress={()=> handleSignOut()}>
                    <SimpleLineIcons name='logout' size={30} color={'black'}></SimpleLineIcons>
                  </TouchableOpacity>
            ) 
          })}
        >

        {/* CONDITIONAL RENDER */}

        {
          user ?
          <>
            <Tab.Screen
              name="HomeStack"
              component={HomeStack}
            />
            <Tab.Screen 
              name="Cart"
              component={Cart}
              options={cart.length !== 0 ? { tabBarBadge: cart.length }: null}
            />
            <Tab.Screen
              name="My Orders"
              component={MyOrders}
            />
          </>
          :
          <>
            <Tab.Screen
              name="Register"
              component={Register}
            />

            <Tab.Screen
              name= "Login"
              component ={Login}
            />
          </>
        }


        </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'black',
      color: 'white',
    },
    logOut: {
      marginRight: 15,
    }
  })