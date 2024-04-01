import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, SafeAreaView, StyleSheet, StatusBar, ScrollView, FlatList } from "react-native";

export default function ViewScreen(){
  const [userList,setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUserList = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
    setUserList(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    getUserList();
  },[]);

  
 /*  if(isLoading){
       return (
        <SafeAreaView style={styles.loadingContainer}>
            <ActivityIndicator size="large">
              <Text>Loading...Please wait</Text>
            </ActivityIndicator>
        </SafeAreaView>
       )   
  } */

    return (
      <ScrollView>
        <FlatList data={userList} ListHeaderComponent={<Text>Student List</Text>} ListFooterComponent={<Text>End of list</Text>}
         renderItem={
          ({item})=>{
            return(
              <View style={styles.listContainer}>
                <Text>Id: {item.id}</Text>
                <Text>Name: {item.name}</Text>
              </View>
            )
          }
        }></FlatList>
      </ScrollView>
      );
}

const styles = StyleSheet.create({
  loadingContainer:{
    flex:1,
    backgroundColor:"#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent:"center",
    alignItems:"center"
  },

  listContainer:{
    height: "auto",
    borderColor:"#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
})