import React, { useState ,useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from './Button';

import { dimen,Colors, Styles } from '../Constants';

const Appliance = ({name, quantity, price,image,onAdd,selectedQuantity,onRemove,remove,item,index,initquan,schedule,onquanchange}) => {
    const [number,setNumber] = useState( parseInt(initquan));
    const [gap,setGap] = useState(0);
    const [added,setAdded] = useState(false)

    useEffect(()=>{
        setNumber(parseInt(initquan));
    },[initquan])

    const renderAddSubtract =()=>{
        if(schedule)
            return <Text style={{...Styles.subbold,alignSelf: 'center',margin: '10%'}}>{'Quantity: '+initquan} </Text>;

        return (
            remove ? (<View style={{flex: 1,margin: '2%'}}>
                 <TouchableOpacity onLayout={({nativeEvent}) => {
                    setGap(nativeEvent.layout.height)
            }}
            onPress = {() => {
                onRemove(index)

                
            }}
            style={style.button}>
            <Text style={{color: Colors.primary,fontWeight: 'bold',color: Colors.primary} }>{'Remove'}</Text>
            </TouchableOpacity>
            <View style = {added ? {...style.quantityPick,marginTop: '20%',backgroundColor: Colors.buttonEnabledGreen} :{...style.quantityPick,marginTop: '20%'} }>
   
   <TouchableOpacity style={style.minus} onPress={() => {
       setNumber(number!=1 ? number-1 : number)
       selectedQuantity = number;
       console.log(selectedQuantity)
       if( remove)
            onAdd(number!=1? number-1: number);
        
   }}>
   
   <Text style={added ? {fontSize: 17,color: 'gray',alignSelf: 'center',fontWeight: 'bold',borderRightColor: Colors.seperatorGray,borderRightWidth: 0.7,paddingRight: 6,color: 'white'} : {fontSize: 17,color: 'gray',alignSelf: 'center',fontWeight: 'bold',borderRightColor: Colors.seperatorGray,borderRightWidth: 0.7,paddingRight: 6,color: Colors.primary}}>-</Text>


   </TouchableOpacity>


<Text style ={added ? {fontWeight: 'bold',color:'white'} : {fontWeight: 'bold'}}>{number}</Text>


<TouchableOpacity style={style.plus} onPress={() => {
setNumber(number+1)
if(remove)
    onAdd(number+1);
}}>

<Text 
style={added ? {fontSize: 17,color: 'white',
alignSelf: 'center',fontWeight:'bold',borderLeftColor: Colors.seperatorGray,borderLeftWidth: 0.7,paddingLeft: 6} :{fontSize: 17,color: Colors.primary,alignSelf: 'center',fontWeight:'bold',borderLeftColor: Colors.seperatorGray,borderLeftWidth: 0.7,paddingLeft: 6} }>+</Text>
</TouchableOpacity>
</View>
                
                </View>

                )
                
                 : (<View style={{flex: 1,margin: '2%'}}>
            <TouchableOpacity onLayout={({nativeEvent}) => {
                    setGap(nativeEvent.layout.height)
            }}
            onPress = {() => {
               // if(added){
                    //alert('Item removal possible from the cart');
                //    onRemove(index);
                //}
                //else
                    onAdd(number);
                //setAdded(!added);
                
                //setAdded(!added);

                
            }}
            style={added ? {...style.button,backgroundColor: Colors.buttonEnabledGreen,borderColor:Colors.buttonEnabledGreen} : style.button}>
            <Text style={added ? {color: Colors.primary,fontWeight: 'bold',fontStyle: 'italic',color: 'white'} :{color: Colors.primary,fontWeight: 'bold',color: Colors.primary} }>{added ? 'Add' : 'Add'}</Text>
            </TouchableOpacity>

        <View style = {added ? {...style.quantityPick,marginTop: '20%',backgroundColor: Colors.buttonEnabledGreen} :{...style.quantityPick,marginTop: '20%'} }>
   
            <TouchableOpacity style={style.minus} onPress={() => {
                setNumber(number!=1 ? number-1 : number)
                selectedQuantity = number;
                console.log(selectedQuantity)
                if( remove)
                    onAdd(number!=1 ? number-1 : number);
                //quanchange(selectedQuantity);
            }}>
            
            <Text style={added ? {fontSize: 17,color: 'gray',alignSelf: 'center',fontWeight: 'bold',borderRightColor: Colors.seperatorGray,borderRightWidth: 0.7,paddingRight: 6,color: 'white'} : {fontSize: 17,color: 'gray',alignSelf: 'center',fontWeight: 'bold',borderRightColor: Colors.seperatorGray,borderRightWidth: 0.7,paddingRight: 6,color: Colors.primary}}>-</Text>


            </TouchableOpacity>


   <Text style ={added ? {fontWeight: 'bold',color:'white'} : {fontWeight: 'bold'}}>{number}</Text>

  
<TouchableOpacity style={style.plus} onPress={() => {
   setNumber(number+1)
   if(remove)
        onAdd(number+1);
}}>

   <Text 
   style={added ? {fontSize: 17,color: 'white',
   alignSelf: 'center',fontWeight:'bold',borderLeftColor: Colors.seperatorGray,borderLeftWidth: 0.7,paddingLeft: 6} :{fontSize: 17,color: Colors.primary,alignSelf: 'center',fontWeight:'bold',borderLeftColor: Colors.seperatorGray,borderLeftWidth: 0.7,paddingLeft: 6} }>+</Text>
</TouchableOpacity>
</View>

        </View>)
        )
    }

    return(<View style={{flexDirection: 'row',backgroundColor: Colors.secondary}}>
    <View style={style.container}>
     
    
    <View>

        <Text style={style.name}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
       
        <Text style={style.price}>₹{price}</Text>
        <Text style={style.quantity}>{quantity}</Text>
        </View>
       
        
        </View>
        <Image style={style.image} source={{uri: image}}/>
       
        </View>
        {
            renderAddSubtract()



        }
        
        
        </View>)
        
        
};
const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
       height:Dimensions.get('window').height/6,
       width: Dimensions.get('window').width,
       flexDirection: 'row',
      flex:3,
       
        padding: 5
    },
    name: {
        marginStart: 100,
        fontWeight: '400',
        fontSize: 18,
        padding: 5
        
    },
    quantity: {
        marginStart: '3%',
        color: 'gray',
        fontSize: 10,
        marginTop: '4%',
        padding: 5
       
    },
    price: {
        marginStart: 100,
        
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '3%',
        padding: 5
      

    },
    image: {
        width: 79,
        height: 80,
        position: 'absolute',
        marginStart: '2%',
        
        
        marginTop : '3%'
        
       
    },
    quantityPick:{
        flexDirection: 'row',
         
        aspectRatio:4/1.5,
        borderColor: Colors.primary,
        borderWidth: 1.5,
        borderRadius: 20,
        alignSelf: 'center',
       
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
       
        

    },
    plus: {
        alignSelf: 'center'
    },
    button:{
        borderColor: Colors.primary,
        borderWidth:1.5,borderRadius:4,
        padding:'5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
           
});



export default Appliance;