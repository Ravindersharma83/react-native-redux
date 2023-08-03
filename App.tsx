import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'

// import { store } from './src/redux/store'
import store from './src/redux-toolkit/store';

import Cart from './src/screens/ReduxExample/Cart';
import Products from './src/screens/ReduxExample/Products';
import ProductsToolkit from './src/screens/Redux Toolkit Example/ProductsToolkit';
import CartToolkit from './src/screens/Redux Toolkit Example/CartToolkit';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen options={{headerShown:false}} name="Home" component={Products} />
        <Stack.Screen name="Cart" component={Cart} /> */}
        <Stack.Screen options={{headerShown:false}} name="Home" component={ProductsToolkit} />
        <Stack.Screen name="Cart" component={CartToolkit} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})