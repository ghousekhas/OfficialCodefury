import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions,TouchableOpacity} from 'react-native';
import {Colors} from '../Constants'
const SubmitButton = ({text,onTouch,styling,otherColor}) => {

    var primaryColor = Colors.primary;
    if(otherColor != undefined)
        primaryColor = otherColor

    return(
        <TouchableOpacity disabled={styling} style={styling == true ? {
        backgroundColor: Colors.buttonEnabledGreen,
        width: Dimensions.get('window').width-30,
        height: 45,
        borderRadius: 5,
        alignSelf: 'center',
        
       
       

    } : {
        backgroundColor: primaryColor,
        width: Dimensions.get('window').width-30,
        height: 45,
        borderRadius: 5,
        alignSelf: 'center',

    }}
         onPress={onTouch}>
        <Text style={styling == true ? {
            textAlign: "center",
            textAlignVertical: "center",
            alignSelf:"center",
            color: 'white',
            fontWeight: '300',
            fontStyle: 'italic',
            ...StyleSheet.absoluteFill,
            
        } : {
            textAlign: "center",
            textAlignVertical: "center",
            alignSelf:"center",
            color: 'white',
           
            fontWeight: '300',
            ...StyleSheet.absoluteFill,

        }}>{text}</Text>
       
        </TouchableOpacity>)

};



const style = StyleSheet.create({
    buttonText: {
        
        
        
        
    },
    button:{
        backgroundColor: Colors.primary,
        height: '100%',
        width: '97%',
        aspectRatio: 10/1.4,
        borderRadius: 5,
       
       

    },

});
export default SubmitButton;