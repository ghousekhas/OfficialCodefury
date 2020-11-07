import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from './SubmitButton';
import {Colors} from '../Constants'

const WeekPicker = ({back,selectedDate,setWeek}) => {
   



    const [button1,tapButton1] = useState(false);
    const [button2,tapButton2] = useState(false);
    const [button3,tapButton3] = useState(false);

    const [m,ms] = useState(false);
    const [t,ts] = useState(false);
    const [w,ws] = useState(false);
    const [th,ths] = useState(false);
    const [f,fs] = useState(false);
    const [s,ss] = useState(false);
    const [su,sus] = useState(false);
    return(<View style = {style.container}>

<TouchableOpacity style={{marginTop:10}} onPress={back}>
        <Text style={style.back}>Back to Date Picker</Text>
    </TouchableOpacity>
   
    <Text style ={style.text}>Choose days</Text>

   


   
   
   

   
    
    <View style = {style.view1}> 
        <TouchableOpacity onPress={() => {
            m ? ms(false) : ms(true)
           
        }}>
        <View style ={m ? style.circleTapped : style.circle}>
        <Text style ={m ? style.dayTapped : style.day}>M</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            t ? ts(false) : ts(true)
           
        }}>
        <View style ={t ? style.circleTapped : style.circle}>
        <Text style ={t ? style.dayTapped : style.day}>T</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
            w ? ws(false) : ws(true)
            
        }}>
        <View style ={w ? style.circleTapped : style.circle}>
        <Text style ={w ? style.dayTapped : style.day}>W</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            th ? ths(false) : ths(true)
            
        }}>
        <View style ={th ? style.circleTapped : style.circle}>
        <Text style ={th ? style.dayTapped : style.day}>T</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            f ? fs(false) : fs(true)
            
        }}>
        <View style ={f ? style.circleTapped : style.circle}>
        <Text style ={f ? style.dayTapped : style.day}>F</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            s ? ss(false) : ss(true)
            
        }}>
        <View style ={s ? style.circleTapped : style.circle}>
        <Text style ={s ? style.dayTapped : style.day}>S</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            su ? sus(false) : sus(true)
           
        }}>
        <View style ={su ? style.circleTapped : style.circle}>
        <Text style ={su ? style.dayTapped : style.day}>S</Text>
        </View>
        </TouchableOpacity>
        
        
       
  
    
    
    </View>

    
    
    
<View style={style.view2}>
        <TouchableOpacity onPress={() => {
          //  button1 ? tapButton1(false) : tapButton1(true)
            if(button1){
                tapButton1(false)
                ms(false); ts(false); ws(false); ths(false); fs(false); ss(false); sus(false)
            }else{
                
                tapButton1(true)
               
                ms(true); ts(true); ws(true); ths(true); fs(true); ss(true); sus(true)
                
                 
                
                }
            
        }}>
        <View style={button1 ?  style.buttonTapped : style.button}> 
        <Text style={button1 ?  style.buttonTextTapped: style.buttonText}>Daily</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
       //     button2 ? tapButton2(false) : tapButton2(true)
       if(button2){
                tapButton2(false)
                ms(false); ts(false); ws(false); ths(false); fs(false); 
            }else{
              
                tapButton2(true)
               
                ms(true); ts(true); ws(true); ths(true); fs(true); 
                
                 
                
                }
        }}>
        <View style={button2 ?  style.buttonTapped : style.button}> 
        <Text style={button2 ?  style.buttonTextTapped: style.buttonText}>Weekdays</Text>
        </View>


        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
         //   button3 ? tapButton3(false) : tapButton3(true)
         if(button3){
                tapButton3(false)
                 ss(false); sus(false)
            }else{
                
                tapButton3(true)
               
                ss(true); sus(true)
                 
                
                }
        }}>
        <View style={button3 ?  style.buttonTapped : style.button}> 
        <Text style={button3 ?  style.buttonTextTapped: style.buttonText}>Weekends</Text>
        </View>

        </TouchableOpacity>
       
    
    </View>

    <SubmitButton text='Confirm' onTouch={()=>{
        setWeek([m,t,w,th,f,s,su]);
    }}/>
  



    </View>)
};

const style = StyleSheet.create({
    container : {
        padding: 10,
        margin: 3
    },
    text: {
        color: 'gray',
        fontSize: 20,
        padding: 1,
        fontWeight: 'bold',
        marginTop:5
    },
    back:{
        color: Colors.primary,
        
        padding: 10,
        
       
        textAlign: 'right'
    },
    view1 : {
        flexDirection : 'row',
       justifyContent: 'space-between',
       margin: 3,
       marginTop: 20
        
       

    },
    circleTapped : {
        backgroundColor: Colors.primary,
        height: 45,
        width: 45, 
        borderRadius: 45/2,
        flexDirection: 'row',
        


    },
    circle : {
        borderWidth: 1,
        borderColor: Colors.primary,
        height: 45,
        width: 45, 
        borderRadius: 45/2,
        flexDirection: 'row',
        


    },
    dayTapped: {

        
        color: 'white',
        fontWeight: '300',
        fontSize: 15,
        
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 12,
        ...StyleSheet.absoluteFill
        
       
      
        
    
        
    },
    day: {

        
        color: Colors.primary,
        fontWeight: '300',
        fontSize: 15,
        
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 12,
        ...StyleSheet.absoluteFill
        
       
      
        
    
        
    },
    view2: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        borderRadius: 5,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 10,
        width: 100,
        height: 35

    }, 
    buttonTapped: {
        borderRadius: 5,
        borderColor: '#64e4ce',
        borderWidth: 1,
        padding: 10,
        width: 100,
        height: 35,
        backgroundColor: '#64e4ce'

    },
    buttonText :{
        color: Colors.primary,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: -3
    },
    buttonTextTapped :{
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: -3
    },
   



});


export default WeekPicker;