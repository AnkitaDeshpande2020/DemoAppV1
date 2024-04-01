import { useState } from "react";
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login({navigation,setuserAuthenticated}){
    const [errors, setErrors] = useState({});
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const validateLoginForm=()=>{
        const errors={};
        if(!username){
            errors.username = "Username is required";
        }
        if(!password){
            errors.password = "Password is required";
        }
        setErrors(errors);
        return Object.keys(errors).length===0;
    }

    const login = () =>{
        if(validateLoginForm()){
            setUserName("");
            setPassword("");
            setErrors({});
            setuserAuthenticated(true);
            navigation.navigate("About")
        }
    }
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginForm}>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={styles.label}>Username <Text style={styles.astericks}>*</Text></Text>
                    <TextInput style={styles.input} value={username} onChangeText={setUserName} placeholder="Enter Username" autoCorrect={false} autoCapitalize="none" />
                    {
                        errors.username ? <Text style={styles.errorMsg}>{errors.username}</Text> : null
                    }
                    <Text style={styles.label}>Password <Text style={styles.astericks}>*</Text></Text>
                    <TextInput  style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry autoCorrect={false} autoCapitalize="none" />
                    {
                        errors.password ? <Text  style={styles.errorMsg}>{errors.password}</Text> : null
                    }
                    <Button title="Login" onPress={login}></Button>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create(
   {
    loginContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:"center"
    },
    loginForm:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"bold"
    },
    input:{
        height: 40,
        borderColor:"#ddd",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    },
    astericks:{
        fontSize:12,
        color:"red"
    },
    errorMsg: {
        fontSize:12,
        color:"red",
        marginBottom:5
    }
   }
)