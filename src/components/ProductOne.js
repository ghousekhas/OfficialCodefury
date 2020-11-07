import React,{ Fragment, useState, useRef } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import Button from './Button';
import {Colors} from '../Constants'

export default ProductOne = ({name,brands,stars,reviews,onSelected}) => {
    return(<View style={style.container}>
    <View style={style.top}>
        <Text style={style.name}>Nandini</Text>
       <Button text='Select' onTouch={onSelected} />
        </View>

        <View style = {{flexDirection: 'row'}}>
        <Text style={style.brandsTitle}>Brands: </Text>
        <Text style={style.brands}>{brands}</Text>
        </View>

        <View style = {{flexDirection: 'row'}}>
        <Text style={style.brandsTitle}>{stars} stars </Text>
            <Text style = {style.review}>({reviews} reviews.)</Text>
        </View>
    </View>)
};

const style = StyleSheet.create({
    container:{
        padding: 5,
    },
    top:{
        flexDirection: 'column',
        width: Dimensions.get('window').width-10,
        alignItems: 'center',
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 1,
        paddingHorizontal: 30,
        paddingVertical: 2,
        alignItems: 'flex-end',
        marginHorizontal:10,
        marginVertical: -2
       
       

    },
    name: {
        fontWeight: 'bold',
        marginStart: 80,
        fontSize: 15,
        alignSelf: 'flex-start'
    },
    brandsTitle:{
        color: 'gray',
        marginStart: 80,
        marginTop: 7,
        fontWeight: 'bold'
    },
    
    brands:{
        color: 'gray',
        flex: 1,
        
        marginTop: 7,

    },
    review:{
        color: 'gray',
        marginStart: 10,
        marginTop: 6,
        fontWeight: 'bold'
    },
    
    
});
