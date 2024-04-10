import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';

export default function Header() {
    const cartData = useSelector((state)=>state.reducer);
    //console.warn(cartData);
    const [cartItems,setCartItems]=useState(0);
    useEffect(()=>{
        setCartItems(cartData.length);
    },[cartData])
    return (
        <View style={StyleSheet.container}>
            <Text 
            style={{fontSize:30,textAlign:'right', padding:10,backgroundColor:'orange'}}>
            {cartItems}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});


