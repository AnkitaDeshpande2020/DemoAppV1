import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {useDispatch} from 'react-redux'
import { addToCart } from "./redux/actions";

    
const products = [
    {
      id:1,
      name:"Prarambhik Exam Notes",
      price:100
    },
    {
      id:2,
      name:"Praveshika Pratham Notes",
      price:300
    },
    {
      id:3,
      name:"Praveshika Purna Notes",
      price:500
    }
  ];

 
export default function Product() {
    
    const handleAddToCart = (item) =>{
        //console.warn("clicked",item);
        dispatch(addToCart(item));
      }
  const dispatch = useDispatch();
    return (
        <View style={StyleSheet.container}>
            <Text style={{fontSize:25}}>List of Notes</Text>
            {
                products.map((item)=>
                    <View style={styles.listContainer}>
                        <Text style={{fontSize:20}}>{item.name}</Text>
                        <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}></Button>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    listContainer:{
        padding: 10,
        alignItems:"center",
        borderBottomColor:"orange",
        borderBottomWidth:2,
        marginBottom:50
    }
});