import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Item } from '../components/Item';
import { auth, db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore/lite';
import { cleanCart } from '../store/actions/cart.actions';

export const Cart = ({getOrders}) => {
        
    const {cart} = useSelector(state => state.cart);
    const Navigation = useNavigation();
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("")

    const handleConfirm = async () => {

        const total = cart.reduce((acumulador, elemento) => acumulador = acumulador + elemento.price, 0 );

        const user = auth.currentUser
        const order = {
            items: [...cart],
            buyer: user.email,
            total: total,
            date: new Date().toLocaleString()
        }
        console.log(order);

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setModalMessage(docRef.id)
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e.message);
        }
        
    }
    
    const handleEndPurchase = ()=> {
        setModalMessage("");
        setModalVisible(false);
        dispatch(cleanCart());
        getOrders()
    }

    return (
        <>
            <View style={styles.container}>
            {cart.length !== 0 ?
                <>
                    <FlatList
                    data = {cart}
                    keyExtractor={producto => producto.id.toString()}
                    renderItem={({item})=> {
                        return <Item {...item} cart={true}/>
                    }}
                    />
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                        <Text>Finalizar compra</Text>
                    </TouchableOpacity>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                {modalMessage === "" ?
                                <>
                                    <Text>Confirm purchase?</Text>
                                    <TouchableOpacity onPress={()=> setModalVisible(false)}>
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> handleConfirm()}>
                                        <Text>Confirm</Text>
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    <Text>Orden generada con id: {modalMessage}</Text>
                                    <TouchableOpacity onPress={()=> handleEndPurchase()}>
                                        <Text>Close</Text>
                                    </TouchableOpacity>
                                </>
                            }
                            </View>
                        </View>
                    </Modal>
                </>
            :
                <Text style={styles.text}>No hay productos en el carrito</Text>
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
        alignItems: 'center',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Oswald',
        fontSize: 25,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})
