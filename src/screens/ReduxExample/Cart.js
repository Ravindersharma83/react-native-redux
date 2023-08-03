import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removerItemFromCart } from '../../redux/actions/CartActions';


const Cart = () => {
    const theme = useSelector((state)=>state.themeReducer)
    const dispatch = useDispatch();
    let product = useSelector((state) => state.cartReducer.cartItem);
    const[data,setData] = useState([]);

    const getTotalPrice = () => {
        return product.reduce((total, item) => total + item.price, 0);
    };

    useEffect(()=>{
        setData(product);
        getTotalPrice();
    },[product])
    const removeItem = (index)=>{
        dispatch(removerItemFromCart(index))
    }   
  return (
    <View style={[styles.container,{backgroundColor:theme ? 'white' :'gray'}]}>
    <View style={{marginTop:50,flex:1,marginBottom:10}}>
    <Text style={[styles.totalPrice,{color:theme ? 'black' : 'white'}]}>Total Price: ${getTotalPrice()}</Text>
    <FlatList
      data={data}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item,index})=>{
          return (
              <View style={[styles.itemView,{backgroundColor:theme ? 'white' :'gray',borderWidth:theme ? 0 :1,borderColor:theme ? '' : 'white'}]}>
                  <Image source={{uri:item.image}} style={styles.productImage}/>
                  <View style={styles.nameView}>
                      <Text style={{color:theme ? 'black' :'white'}}>{item.name.length > 15 ? item.name.substring(0,15)+'...' : item.name}</Text>
                      <Text style={[styles.price,{color:theme ? 'green' :'white'}]}>$ {item.price}</Text>
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

export default Cart

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