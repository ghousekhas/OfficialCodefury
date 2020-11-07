import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from './Button';
import Stars from './Stars';
import { color } from 'react-native-reanimated';



const Vendor = ({name,brands,stars,reviews,onSelected,picture,buttonVisible,address,scrap,imageUrl}) => {
    const [imageHeight,setImageHeight]=useState(0);

    const renderButton=()=>{
        if(buttonVisible!= false){
            return(
                <View style={{...style.button,flex: 1,alignSelf: 'center',justifyContent: 'center'}}>
                <Button text='Select' onTouch={onSelected} />
            </View>
            );
        }
    };

    const renderDesc= ()=>{
        if(scrap !=null)
        return(
            <View style = {{flexDirection: 'row',width: '60%',alignSelf: 'center'}}>
                <Text style={style.brandsTitle}>{scrap}</Text>
            </View>);
        if(buttonVisible != false)
            return(
            <View style = {{flexDirection: 'row'}}>
                <Text style={style.brandsTitle}>Brands: </Text>
                <Text style={style.brands}>{brands}</Text>
            </View>
            );
        

        return(
            <View style = {{flexDirection: 'row',width: '60%',alignSelf: 'center'}}>
                <Text style={style.brands}>{address}</Text>
            </View>
        );
    };

    return(
    <View onLayout={({nativeEvent})=>{
        console.log('nativeevent',nativeEvent)
        if(nativeEvent.layout.height!=null)
        setImageHeight(nativeEvent.layout.height);

    }} style={style.container}>
    <View style={{marginStart: '4%'}}>
        
        <View style={style.top}>
        <View style = {{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
            <View style={{flexDirection: 'column',flex:2,paddingLeft: 15,marginTop: 20}}>
            <Text style={style.name}> {name}</Text>
            {renderDesc()}
            <View style = {{flexDirection: 'row',marginStart: '22%'}}>
        <Stars number={stars}/>
            <Text style = {style.review}>({reviews} reviews)</Text>
        </View>
        </View>
        {renderButton()}
        </View>
           
        </View>

        

       
        </View>
        <Image style={{...style.image,height: imageHeight*0.75,width: imageHeight*0.75,alignSelf: 'center'}} source={{uri: imageUrl}}/>
    </View>)
};

const style = StyleSheet.create({
    container:{
        margin: '1%',
        marginBottom: '10%',
        flexDirection: 'row',
        backgroundColor: 'transparent'
        
    },
    top:{
        flexDirection: 'column',
        width: Dimensions.get('window').width-15,
        marginStart: '1%',      
        alignItems: 'flex-end',
        
        

    },
    button : {
        flexDirection: 'column',
        width: Dimensions.get('window').width-15,
        alignSelf: 'center',
    }
    ,
    
    name: {
        fontWeight: 'bold',
        marginStart: '20%',
        fontSize: 17,
        alignSelf: 'flex-start',
        color: 'black'
    },
    brandsTitle:{
        color: 'gray',
        marginStart: '22%',
        marginTop: '2%',
        fontWeight: 'bold',
       
    },
    
    brands:{
        color: 'gray',
        flex: 1,
        
        marginTop: '2%',
        
     

    },
    review:{
        color: 'gray',
        marginStart: '4%',
        marginTop: '2%',
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: 90,
        position: 'absolute',
        margin :'1%'
        
       
    }
    
    
});


export default Vendor;