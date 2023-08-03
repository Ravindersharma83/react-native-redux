import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/actions/ThemeAction';

const ThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state)=>state)
    const selectedTheme = theme.themeReducer;
    console.log(selectedTheme);
  return (
    <View>
      <TouchableOpacity 
        onPress={()=>{
            // if(selectedTheme == true){
            //     dispatch(changeTheme(false))
            // }else{
            //     dispatch(changeTheme(true))
            // }
            dispatch(changeTheme(!selectedTheme))
        }}
        style={{backgroundColor:!selectedTheme ? 'white' :'gray',marginTop:10,padding:10,margin:2}}>
        <Text style={{color:!selectedTheme ? 'black' : 'white'}}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ThemeButton

const styles = StyleSheet.create({})