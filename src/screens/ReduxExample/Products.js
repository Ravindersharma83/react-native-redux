import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { addItemToCart } from '../../redux/actions/CartActions';

const Products = ({navigation}) => {
    const data = [
        {
          name: 'Shoes 1',
          price: 1100,
          image: 'https://img.freepik.com/premium-psd/shoes-3d-rendering-isolated_625075-30.jpg?size=626&ext=jpg&ga=GA1.2.1349196585.1687175242&semt=sph',
        },
        {
          name: 'Shoes 2',
          price: 680,
          image: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-mustard-color-wall_151013-4913.jpg?size=626&ext=jpg&ga=GA1.2.1349196585.1687175242&semt=sph',
        },
        {
          name: 'Shoes 3',
          price: 599,
          image: 'https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
        },
        {
          name: 'Shoes 4',
          price: 800,
          image: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
        },
        {
          name: 'Shoes 5',
          price: 1000,
          image: 'https://img.freepik.com/premium-photo/unbranded-modern-sporty-shoes-sneakers-white-isolated_120794-337.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
        },
        {
            name: 'Shoes 6',
            price: 1100,
            image: 'https://img.freepik.com/premium-photo/women-leather-sneakers-shoes_1339-71111.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
          },
          {
            name: 'Shoes 7',
            price: 680,
            image: 'https://img.freepik.com/premium-photo/pair-blue-running-sneakers-white-background-isolated_77190-7490.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
          },
          {
            name: 'Shoes 8',
            price: 599,
            image: 'https://img.freepik.com/premium-photo/black-sneakers-isolated-gray-backgroundgenerative-ai_221128-12238.jpg?size=626&ext=jpg&ga=GA1.2.1349196585.1687175242&semt=sph',
          },
          {
            name: 'Shoes 9',
            price: 800,
            image: 'https://img.freepik.com/free-photo/men-shoes_1203-8652.jpg?size=626&ext=jpg&ga=GA1.2.1349196585.1687175242&semt=sph',
          },
          {
            name: 'Shoes 10',
            price: 1000,
            image: 'https://img.freepik.com/free-photo/yellow-sports-shoe-with-elegant-design-generated-by-ai_188544-19644.jpg?size=626&ext=jpg&ga=GA1.1.1349196585.1687175242&semt=sph',
          },
      ];

      // dispatch yani hum data send kar rahe hai,action trigger kar rahe hai (view to action)
      const dispatch = useDispatch();  
      const addItem = (item)=>{
        dispatch(addItemToCart(item))
      }

      const items = useSelector((state)=>state.cartReducer.cartItem)
      let totalItems = [];
      totalItems = items;

  return (
    <View style={styles.container}>
    <View style={styles.header}>
            <Text style={{fontSize:24,textAlign:'center',margin:10,}}>Redux Example</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}><Text style={{fontSize:24,textAlign:'center',margin:10,backgroundColor:'lightgreen',padding:2}}><AntDesign name='shoppingcart' size={25}/> {totalItems.length}</Text></TouchableOpacity>
    </View>
    <View style={{marginTop:50,flex:1,marginBottom:10}}>
    <FlatList
      data={data}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item,index})=>{
          return (
              <View style={styles.itemView}>
                  <Image source={{uri:item.image}} style={styles.productImage}/>
                  <View style={styles.nameView}>
                      <Text>{item.name.length > 15 ? item.name.substring(0,15)+'...' : item.name}</Text>
                      <Text style={styles.price}>$ {item.price}</Text>
                      <Button title='Add to cart' onPress={()=>addItem(item)} color='green'/>
                  </View>
              </View>
          )
      }}
    />
    </View>
    </View>
  )
}

export default Products

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
        flexDirection:'row'
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
    }
})