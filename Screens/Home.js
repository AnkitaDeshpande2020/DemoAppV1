import React from 'react';
import { View, Text, Button, Image, StyleSheet, FlatList } from 'react-native';

export default function Home(){
    const featureList=[
        {
            id:1,
            detail:"Classical Music(Vocals only)"
        },
        {
            id:2,
            detail:"Bollywood Music"
        },
        {
            id:3,
            detail:"Karoke Singing"
        },
        {
            id:4,
            detail:"Exam Certificate course by ABGMV"
        },
        {
            id:5,
            detail:"Online and Offline (Pune) batches available"
        }
    ]
    return (
        <View style={styles.homeContainer}>
            <Image source={require('../assets/img1.jpg')} style={styles.logoImage}></Image>
            <View style={styles.descView}>
                <Text style={styles.title}>Shadja Music School</Text>
            </View>
            <View>
                <FlatList data={featureList}
                renderItem={({item})=>{
                    return (
                        <View>
                            <Text style={styles.listLabel}>{item.id}. {item.detail}</Text>
                        </View>
                    )
                }}></FlatList>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    homeContainer:{ 
        flex: 1, paddingLeft:15, paddingRight: 15, backgroundColor:"white"
    },
    descView:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:10
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"blue"
    },
    logoImage:{
        width: "100%",
        height: 400
    },
    listLabel:{
        paddingVertical:5,
        fontSize:15,
        color:"black"
    }
})