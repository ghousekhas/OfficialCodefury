import React,{ Fragment, useState, useRef } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Dimensions, Image } from 'react-native';
import Button from './Button';
import {Colors} from '../Constants'


const Product = ({name,quantity,price,price_,subscribe,url,imageUrl}) => {
    const [imageHeight,setImageHeight]=useState(0);
    if(!price_ == ''){
    
    return(<View style={style.container}>
    <Image style={style.image} source={{uri: imageUrl}}/>
    <View>
    <Text style={style.name}>{name}</Text>
    <Text style={style.quantity}>{quantity}</Text>
    <Text style={style.price}> Weekdays- ₹{price}</Text>
    <Text style={style.price}> Weekends- ₹{price_}</Text>
    </View>

    <View style={{marginTop: '3%'}}>
   
   

        <TouchableOpacity style={style.button} onPress={subscribe}>
        <Text style={style.text}>Subscribe</Text>
       
        </TouchableOpacity>
    </View>
    

    </View>)
    }else return(
        <View onLayout={({nativeEvent})=>setImageHeight(nativeEvent.layout.height)} style={style.container}>
         <Image style={{...style.image,height: imageHeight*0.85,width: imageHeight*0.85}} source={{uri: imageUrl}}/>
    <View>
    <Text style={style.name}>{name}</Text>
    <Text style={style.quantity}>{quantity}</Text>
    <Text style={style.price}> ₹{price}</Text>
    
    </View>

    <View style={{marginTop: '3%'}}>
   

        <TouchableOpacity style={style.button} onPress={subscribe}>
        <Text style={style.text}>Subscribe</Text>
       
        </TouchableOpacity>
    </View>
    

    </View>

    )
};


const style = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        flexDirection: 'row'
        
        
    },
    name: {
        fontWeight:'bold',
        marginStart: 70,
        flex: 1,
        
        width: Dimensions.get('window').width/3
    },
    quantity: {
        marginStart: 70,
        marginTop: '3%',
        color: 'gray'

    },
    price: {
        fontWeight:'bold',
        marginStart: 70,
        fontSize: 15

    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 1,
        // paddingHorizontal: 20,
        // paddingVertical: 2,
        width: Dimensions.get('window').width/4,
        aspectRatio: 5/1.3,
        alignItems: 'center',
        justifyContent: 'center',
       
        marginStart: '28%',
        marginVertical: '3%'
       
       

    },
    text:{
    color:Colors.primary,
    fontSize: 12,
    fontWeight: 'bold'
    },
    image: {
        width: 79,
        height: 80,
        position: 'absolute',
        marginStart: '-1%',
        
        marginTop : '3%'
        
       
    }
});

export default Product;