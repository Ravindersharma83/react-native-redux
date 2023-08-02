import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Cart from './src/screens/ReduxExample/Cart';
import Products from './src/screens/ReduxExample/Products';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})