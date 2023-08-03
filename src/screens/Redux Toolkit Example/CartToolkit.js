import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../redux-toolkit/slices/CartSlice';

const CartToolkit = () => {
  const dispatch = useDispatch();
  let product = useSelector((state) => state.name);
  const[data,setData] = useState([]);
  useEffect(()=>{
    setData(product);
  },[product])

  const removeItem = (index)=>{
    dispatch(removeCartItem(index));
  }

  const totalPrice = ()=>{
    return product.reduce((total, item) => total + item.price, 0);
  }
  return (
    <View style={[styles.container,{backgroundColor:'white'}]}>
    <View style={{marginTop:50,flex:1,marginBottom:10}}>
    <Text style={[styles.totalPrice,{color:'black'}]}>Total Price: {`${totalPrice()}`}</Text>
    <FlatList
      data={data}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item,index})=>{
          return (
              <View style={[styles.itemView,{backgroundColor:'white'}]}>
                  <Image source={{uri:item.image}} style={styles.productImage}/>
                  <View style={styles.nameView}>
                      <Text style={{color:'black'}}>{item.name.length > 15 ? item.name.substring(0,15)+'...' : item.name}</Text>
                      <Text style={[styles.price,{color:'green' }]}>$ {item.price}</Text>
                      <Button title='Remove from cart' onPress={()=>removeItem(index)} color='red'/>
                  </View>
              </View>
          )
      }}
    />
    </View>
    </View>
  )
}

export default CartToolkit

const styles = StyleSheet.create({
  container:{
    flex:1,
},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
},
itemView:{
    width:'90%',
    height:100,
    backgroundColor:'#fff',
    alignSelf:'center',
    marginTop:10,
    flexDirection:'row',
    elevation:4,
},
productImage:{
    width:100,
    height:100,
},
nameView:{
    paddingLeft:20,
    paddingRight:10
},
price:{
    fontSize:20,
    fontWeight:'600',
    color:'green',
    marginTop:10
},
totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
})