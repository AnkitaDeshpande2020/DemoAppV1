import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Login from './Screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewScreen from './Screens/ViewScreen';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from './Screens/Product';
import Header from './Screens/redux/Header';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AuthStack = ({setuserAuthenticated}) => (
    <Stack.Navigator>
    <Stack.Screen name="Login">
      {(props) => <Login {...props} setuserAuthenticated={setuserAuthenticated} />}
    </Stack.Screen>
  </Stack.Navigator>
);
/* 


const HomeStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const SettingsStack = () => (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );

export default function App(){
   
    return (
      <NavigationContainer>
        {userAuthenticated ? (
            <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
        ) : (
          <AuthStack setuserAuthenticated={setuserAuthenticated} />
        )}
      </NavigationContainer>
    );
} */

function About() {
    return (
      <Tab.Navigator initialRouteName='About'>
        <Tab.Screen name="About" component={Home} />
        <Tab.Screen name="View" component={ViewScreen} />
        <Tab.Screen name="Product" component={Product} options={{headerShown: false}}/>
      </Tab.Navigator>
    );
  }
  
 export default function App() {
    const [userAuthenticated, setuserAuthenticated] = useState(false);
    return (
      <>
      {userAuthenticated ? 
      (<Header></Header>):''
      }
      <NavigationContainer>
        {userAuthenticated ? (
            <Stack.Navigator>
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        ) : (
          <AuthStack setuserAuthenticated={setuserAuthenticated} />
        )}
      </NavigationContainer>
      </>
    );
  }