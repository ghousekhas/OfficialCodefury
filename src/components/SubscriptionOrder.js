import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import {Colors,dimen} from '../Constants'

const SubscriptionOrder = ({tag,name,quantity,rate,num,days,startDate,endDate,bought,imageUrl,rate_}) => {
    console.log('Tag :' + tag);

    const [alignment,setAlign] = useState(0);
    var dayString = "";
   
        //console.log(days[i])
         days[0].m ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[1].t ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[2].w ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[3].th ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[4].f ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[5].s ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[6].su ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
       
  
    return(<View style={{flexDirection: 'row',height: dimen.height/3.5 }}>
       
    
    <View style = {style.container}>
    
    <View style={{flexDirection: 'row'}}>
    
    <Text style={style.greyText1}>Period : {startDate+" - "+endDate}</Text>
   
    </View>
    
    <View style={style.line}/>
    <View style={{flexDirection: 'row'}}>
    <Image onLayout={({nativeEvent}) => {
        setAlign(nativeEvent.layout.width)
    }} style={{...style.image,height: alignment*0.8,width: alignment*0.8,zIndex: 100} } width={60}  resizeMethod={'auto'} resizeMode='contain' source={{uri: imageUrl}}/>
 <Text style={{...style.name,marginStart: alignment+alignment/4}}>{name}</Text>
 <Feather name="trash-2" size={22} color='gray' style={style.icon}/>
 </View>
 
        <View>
    
      
     
        
       
        <View style={{flexDirection: 'row',margin: '2%'}}>
        <Text style={{...style.quantity,marginStart: alignment+alignment/4}}>{bought+ " unit/s  · "}</Text>
        <Text style={dayString[0]=='Y'? style.yes : {...style.yes,color: 'gray'}}>  M </Text>
        <Text style={dayString[1]=='Y'? style.yes : {...style.yes,color: 'gray'}}>T </Text>
        <Text style={dayString[2]=='Y'? style.yes : {...style.yes,color: 'gray'}}>W </Text>
        <Text style={dayString[3]=='Y'? style.yes : {...style.yes,color: 'gray'}}>T </Text>
        <Text style={dayString[4]=='Y'? style.yes : {...style.yes,color: 'gray'}}>F </Text>
        <Text style={dayString[5]=='Y'? style.yes : {...style.yes,color: 'gray'}}>S </Text>
        <Text style={dayString[6]=='Y'? style.yes : {...style.yes,color: 'gray'}}>S </Text>
        </View>

       <View style={{flexDirection:'row',paddingBottom: '5%'}}>
       {tag == 'Milk' ? <Text style={{...style.rate,marginStart: alignment+alignment/4}}>₹{rate}</Text> : <View>
       <Text style={{...style.rate,marginStart: alignment+alignment/4}}>Weekdays : ₹{rate}</Text>
       <Text style={{...style.rate,marginStart: alignment+alignment/4}}>Weekends : ₹{rate_}</Text>
       </View>}
       <Text style = {{...style.rate,color: 'gray',marginStart: alignment/8,fontSize: 12,alignSelf:'center',marginTop: tag == 'Paper' ? 0 : '3%'}}>{num+" deliveries"}</Text>
       </View>
       
       
        </View>
       


        <View>

        </View>
        </View>
    </View>)

};

const style = StyleSheet.create({
    container:{
    
      
       
        width: Dimensions.get('window').width-30,
        
        elevation: 1,
        padding: '1%',
       
        borderRadius: 15,
        borderColor: Colors.seperatorGray,
        borderWidth: 0.5,
      
       
      
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 1,
        

        
        
    },
  
    line:{
        borderWidth: 0.5,
        borderColor: Colors.seperatorGray,
        marginVertical: '2%',
      
    }
    ,
    name: {
        marginStart: '34%',
        fontWeight: '400',
        fontSize: 18,
        padding: 5,
        marginTop: '2%',
        fontWeight: 'bold',
        color:'black'
        
    },
    quantity: {
        marginStart: '35%',
        marginTop: '3%',
        fontWeight: 'bold',
        
        
        fontSize: 15,
       
        padding: 1
       
    },
    rate: {
        
        
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: '3%',
       
        color:'black'
      

    },
    greyText: {
       
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
      marginStart: '10%',
      paddingVertical: '3%',
      
        marginVertical: '4%'
        
    },
    greyText1: {
        marginStart: '3%',
        color: 'gray',
        fontSize: 12,
        fontWeight: 'bold',
        margin: '2%',
        marginTop:'4%'
        
     
        
        
    },
    image1: {
        width: 60,
        height: 60,
        position: 'absolute',
        padding: 10,
        zIndex: 10000

        
       
    },
    image: {
        width: 80,
        height: 80,
        position: 'absolute',
        marginStart: '4%',
        marginTop: '10%',
       
        
       
    },
    icon: {
        marginVertical: '2.2%',
        
     position: 'absolute',
     right: '2%'
       
    },
    yes: {
        color: Colors.primary,
        marginTop: '3.5%',
        fontWeight: 'bold',
        fontSize: 15,
        
        
    }
    

});

export default SubscriptionOrder
