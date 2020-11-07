import React,{useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Colors,Styles, dimen } from '../Constants';



export default function MySubscriptionOrder({name,quantity,rate,num,days,startDate,endDate,bought,imageUrl}){
    days=[true,true,true,true,true,true,true];
    console.log('theimageurl',imageUrl);
    const [imageWidth,setImageWidth]=useState(0);
    var dayString = "";
   
        //console.log(days[i])
         days[0].m ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[1].t ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[2].w ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[3].th ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[4].f ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[5].s ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
         days[6].su ? dayString = dayString.concat("Y") : dayString =  dayString.concat("N")
       
 
    return (
    <View style={styles.container}>
        <Text style={styles.greyText1}>Period : {startDate+" - "+endDate}</Text>
        <View style={styles.line}/>
        <View style={styles.productContainer}  onLayout={({nativeEvent})=>setImageWidth(nativeEvent.layout.height)}>
        <Image style={ {...styles.leftChild,width: imageWidth*0.85,height: imageWidth*0.85}}  width={60}  resizeMethod={'auto'} resizeMode='contain' source={{uri: imageUrl}}/>
        <View style={styles.rightChild}>
    
      
     
        
       
        <View style={{flexDirection: 'row',margin: '2%'}}>
        <Text style={styles.quantity}>{bought+ " unit/s  · "}</Text>
        <Text style={dayString[0]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>  M </Text>
        <Text style={dayString[1]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>T </Text>
        <Text style={dayString[2]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>W </Text>
        <Text style={dayString[3]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>T </Text>
        <Text style={dayString[4]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>F </Text>
        <Text style={dayString[5]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>S </Text>
        <Text style={dayString[6]=='Y'? styles.yes : {...styles.yes,color: 'gray'}}>S </Text>
        </View>

       <View style={{flexDirection:'row',paddingBottom: '5%'}}>
       <Text style={styles.rate}>₹{rate}</Text>
       <Text style = {{...styles.rate,color: 'gray',marginStart: '17%'}}>{num+" deliveries"}</Text>
       </View>
       
       
        </View>
        </View>

        

    </View>)
       
  
    return(<View style={{flexDirection: 'row',height: dimen.height/3.5 }}>
       
    
    <View style = {styles.container}>
    
    <View style={{flexDirection: 'row'}}>
    
    
   
    </View>
    
    <View style={styles.line}/>
    <View style={{flexDirection: 'row'}}>
    <Image style={ styles.image} width={60}  resizeMethod={'auto'} resizeMode='contain' source={{uri: imageUrl}}/>
 <Text style={styles.name}>{name}</Text>
 <Feather name="trash-2" size={22} color='gray' style={styles.icon}/>
 </View>
 
        
       


        <View>

        </View>
        </View>
    </View>)

};

const styles=StyleSheet.create({
    container:{
        flex:0,
        width: dimen.width*0.87,
        alignSelf: 'center'

    },
    mainConitaner:{
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      flex: 0  
    },
    leftChild:{
        flex: 1
    },
    rightChild:{
        flex: 2

    },
    line:{
        borderWidth: 0.5,
        borderColor: Colors.seperatorGray,
        marginVertical: '2%',
    },
    name:{
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
        marginStart: '34%',
        
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '3%',
        paddingVertical: '3%',
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
        marginTop: '10%'
        
       
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


