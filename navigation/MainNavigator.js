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
import { auth, db } from '../firebase/config';
import { onAuthStateChanged, signOut} from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore/lite';

export const MainNavigator = () => {

    const Tab = createBottomTabNavigator();
    const cart = useSelector(state => state.cart.cart)

    const [user,setUser] = useState()
    const [orders, setOrders] = useState([])

    const handleSignOut = () => {
      signOut(auth).then(() => {
        setOrders([]);
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    

      //Obtención de las orders, y luego filtrado mediante email
    const getOrders = async () => {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersComplete = []
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          ordersComplete.push({id: doc.id, ...doc.data() })
        });
        console.log(ordersComplete);
        const ordersFiltered = ordersComplete.filter(order => order.buyer === auth.currentUser.email)
        setOrders([...ordersFiltered]);
    }

    useEffect(()=> {
      if (user){
          //Obtención de las orders, y luego filtrado mediante email
          ( async ()=> {
            const querySnapshot = await getDocs(collection(db, "orders"));
            const ordersComplete = []
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
              ordersComplete.push({id: doc.id, ...doc.data() })
            });
            console.log(ordersComplete);
            const ordersFiltered = ordersComplete.filter(order => order.buyer === auth.currentUser.email)
            setOrders([...ordersFiltered]);
          })()
      }

    }, [user])

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
              options={cart.length !== 0 ? { tabBarBadge: cart.length }: null}
            >
              {(props) => <Cart {...props} getOrders={getOrders}></Cart>}
            </Tab.Screen>
            <Tab.Screen
              name="My Orders"
            >
              {/* "props" hace referencia a las que vienen por defecto que son route y navigation */}
              {(props) => <MyOrders {...props} orders = {orders}></MyOrders>}
            </Tab.Screen>
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