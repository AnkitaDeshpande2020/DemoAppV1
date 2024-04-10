import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

export default function Home(){
    const [singleFile, setSingleFile] = useState('');
    function CSVToArray(strData, strDelimiter) {
        strDelimiter = strDelimiter || ',';
    
        var objPattern = new RegExp(
            '(\\' + strDelimiter + '|\\r?\\n|\\r|^)' +
            '(?:"([^"]*(?:""[^"]*)*)"|' +
            '([^"\\' + strDelimiter + '\\r\\n]*))',
            'gi'
        );
    
        var arrData = [[]];
        var arrMatches = null;
    
        while (arrMatches = objPattern.exec(strData)) {
            var strMatchedDelimiter = arrMatches[1];
    
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                arrData.push([]);
            }
    
            var strMatchedValue;
    
            if (arrMatches[2]) {
                strMatchedValue = arrMatches[2].replace(
                    new RegExp('""', 'g'),
                    '"'
                );
            } else {
                strMatchedValue = arrMatches[3];
            }
    
            arrData[arrData.length - 1].push(strMatchedValue);
        }
    
        return arrData;
    }
    
    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
              type: ["*/*"], // Specify the type of files you want to allow (CSV in this case)
              mode: 'import', // Set mode to 'import' to allow importing files
              copyTo: 'documentDirectory', // Specify where the file should be copied to (e.g., 'documentDirectory')
            });
        
            console.log('Selected file:', res[0]["uri"]);
            const response = await fetch(res[0]["fileCopyUri"]);
        const csvContent = await response.text();
        console.log("csv content===",csvContent)
        // Now you can parse the CSV content
        const parsedCsvData = CSVToArray(csvContent,',');
        
        console.log('Parsed CSV data:', parsedCsvData);
        setSingleFile(parsedCsvData);
          } catch (err) {
            console.log('Error selecting file:', err);
        
            if (DocumentPicker.isCancel(err)) {
              // If user canceled the document selection
              Alert.alert('Canceled from document picker');
            } else {
              // For other errors
              Alert.alert('Error selecting file: ' + JSON.stringify(err));
            }
          }
      };

      const renderItem = ({ item }) => (
        <View style={styles.item}>
      {item.map((cell, index) => (
        <View key={index} style={styles.cell}>
          <Text>{cell}</Text>
        </View>
      ))}
    </View>
      );
      
    return(
        <>
        <View style={styles.homeContainer}>
            <View style={styles.descView}>
                <Button title='Import CSV File' style={styles.btn} onPress={selectFile}></Button>
            </View>
            
        <View style={styles.container}>
      <FlatList
        data={singleFile}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
        </View>
        </>
       
    )
}

const styles = StyleSheet.create({
    homeContainer:{ 
        flex: 1, paddingLeft:15, paddingRight: 15, backgroundColor:"white"
    },
    btn:{
        width:200,
        fontSize:20,
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
    },
    container: {
        flex: 1,
        paddingTop: 22,
      },
      item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
      },
      cell: {
        flex: 1,
      }
})