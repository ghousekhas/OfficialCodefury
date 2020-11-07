import React,{useState, useEffect} from 'react';
import { Share ,Button, View, StyleSheet, Dimensions,StatusBar,Image } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {Text,Drawer, Switch, TouchableRipple, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SupportFAQ from '../screens/SupportFAQ';
import { Constants,Colors, dimen } from '../Constants';
import auth from '@react-native-firebase/auth';





const DrawerContent = (props) => {
  const [vendor,setVendor] = useState(false);
  const {switchVendor} = props;
  var {setUser}= props;
  const [actualUser,setActualUser]=useState(props.actualUser);
  var cachedData,initialSubs;

  useEffect(()=>{
    switchVendor(vendor);
    cachedData = props.cachedData;
    initialSubs= props.initialSubs;
    setActualUser(props.actualUser);

  },[vendor,props.cachedData,props.initialSubs,props.actualUser])

  const switchToVendor = async ()=>{
    setVendor(!vendor);
    
  }

  if(vendor)
    //props.navigation.navigate('Home');
    return(
      <View style={{height: Dimensions.get('window').height}}>
       <DrawerContentScrollView {...props} scrollEnabled={true}>
         <View style={{height: Dimensions.get('window').height-StatusBar.currentHeight}}>
         <Drawer.Section style={{margin: dimen.height/60}}>
        
           <View style={styles.header}>
             {/* <Text style={{margin: '10%',color: 'white',fontSize: 30, fontWeight: 'bold'}}>WeLinks</Text> */}
          <View style={{marginTop: '5%', margin: '5%'}}>
          <Image source={ actualUser.img_url.trim()  != ''? {uri: actualUser.img_url}: require('../../assets/notmaleavatar.png')  }
          
            style={{height: 50,width: 50,marginTop: 10}}
          />
          </View>

          <Text style={styles.username}>
          {actualUser.name}
          </Text>

          <View style={{flexDirection: 'row',marginStart: '5%',marginTop: '1%'}}>

            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
              <Icon name="phone" color='gray' size={13} />
              <Text style={{...styles.username,fontWeight: '200',color:'gray',marginStart:'1%',fontSize: 14,alignSelf: 'center'}}>
          {actualUser.phone}
          </Text>
            </View>
          

          </View>

         
         

            
          
           </View>
           </Drawer.Section>

    <Drawer.Section style={{margin:dimen.height/60}} >

    <Drawer.Item
     style={{}}
     icon="desktop-mac-dashboard"
     label="Vendor Zone"
     onPress={()=>{props.navigation.navigate('VendorHomeStack',{
       actualUser: actualUser,
       getUserDetails: props.getUserDetails,
       setActualUser: setActualUser
     })}}/>
        
    <Drawer.Item
     style={{}}
     icon="account-outline"
     label="Vendor Profile"
     onPress={()=>{props.navigation.navigate('VendorProfileStack',{
       actualUser: actualUser,
      
       getUserDetails: props.getUserDetails,
       setActualUser: setActualUser
       
     })}}
     
   />

   <Drawer.Item
    
    icon= {({color, size}) => (
                                <Icon 
                                name="share-outline" 
                                color={color}
                                size={size}
                                />
                            )}

    label="Share App"
    onPress = {()=>{
      try{
        const result = Share.share({
        title: Constants.shareMessage,
        message: Constants.shareMessage
        });
        if(result.action == Share.sharedAction){
          

        }
      }
      catch(e){
        console.log('some error around here');
      }
    }}
    
  />
     <Drawer.Item
    
    icon="card-text-outline"
    label="Support and FAQs"
    onPress={()=> {props.navigation.navigate('VendorSupportStack',{
      cachedData: cachedData,
      actualUser: actualUser
    })}}
    
  />
 


 </Drawer.Section>
   <Drawer.Section>
 
 <Drawer.Item
    
    icon= {({color, size}) => (
                                <Icon 
                                name="account-box-multiple" 
                                color={color}
                                size={size}
                                />
                            )}

    label="Switch to Consumer"
    onPress = {switchToVendor}
    
  />


  
  
  
   
   
   
   


<Drawer.Item
     style={styles.bottom}
     icon="exit-to-app"
     
     label="Sign Out"
     
     onPress={()=>{
       auth().signOut();
     }}
     
   />

  
    
 

   
            


            
   
   
     </Drawer.Section>
      <View style={styles.versionSeperator} />
     <Text style={styles.version}>Version 1.0.0</Text>
         </View>
       </DrawerContentScrollView>
   </View>

    );

  return (
   <View style={{height: Dimensions.get('window').height}}>
       <DrawerContentScrollView {...props} scrollEnabled={false}>
         <View style={{height: Dimensions.get('window').height-StatusBar.currentHeight}}>


         <Drawer.Section>
          <View style={styles.header}>
             {/* <Text style={{margin: '10%',color: 'white',fontSize: 30, fontWeight: 'bold'}}>WeLinks</Text> */}
          <View style={{marginTop: '5%', margin: '5%'}}>
          <Image source={ actualUser.img_url.trim()  != ''? {uri: actualUser.img_url}: require('../../assets/notmaleavatar.png')  }
            style={{height: 50,width: 50,marginTop: 10}}
          />
          </View>

          <Text style={styles.username}>
          {actualUser.name}
          </Text>

          <View style={{flexDirection: 'row',marginStart: '5%',marginTop: '1%'}}>

            <View style={{marginTop:'0.7%'}}>
              <Icon name="phone" color='gray' size={13}/>

            </View>
          <Text style={{...styles.username,fontWeight: '200',color:'gray',marginStart:'1%',fontSize: 14,alignSelf: 'center'}}>
          {actualUser.phone}
          </Text>

          </View>
            </View>
           </Drawer.Section>

    <Drawer.Section>
        
         <Drawer.Item
     style={{ }}
     icon="home-outline"
     label="Consumer Zone"
     onPress={()=>{props.navigation.navigate('HomeStack',{
       actualUser: actualUser,
       getUserDetails: props.getUserDetails,
       setActualUser: setActualUser
     })}}
     
   />

    <Drawer.Item
     style={{}}
     icon="account-outline"
     label="My Profile"
     onPress={()=>{props.navigation.navigate('ProfileStack',{
       user: actualUser,
       getUserDetails: props.getUserDetails,
       setActualUser: setActualUser
     })}}
     
   />

   <Drawer.Item
  
     icon= 'map-marker-outline'
     label="Addresses"
     onPress={()=>{
       props.navigation.navigate('MyAddresses',{
         actualUser: actualUser,
         myAddresses: true,
         profile: false
       })
     }}
     
   />

   <Drawer.Item

   
    
     icon="wallet-outline"
     label="WeLinks Wallet"
     onPress={()=>{}}
     
   />

   <Drawer.Item
    
    icon="cart-outline"
    label="My Subscriptions"
    onPress={()=>{
      props.navigation.navigate('MySubscriptions',{
        initialSubs: initialSubs,
        user: actualUser
      })
    }}
    
  />

<Drawer.Item
    
    icon="delete-circle-outline"
    label="My Scrap Sales"
    onPress={()=>{
      props.navigation.navigate('MyScrapSales',{
        initialSubs: initialSubs,
        user: actualUser
      })
    }}
    
  />
   <Drawer.Item
    
    icon= {({color, size}) => (
                                <Icon 
                                name="share-outline" 
                                color={color}
                                size={size}
                                />
                            )}

    label="Share App"
    onPress = {()=>{
      try{
        const result = Share.share({
        title: Constants.shareMessage,
        message: Constants.shareMessage
        });
        if(result.action == Share.sharedAction){
          

        }
      }
      catch(e){
        console.log('some error around here');
      }
    }}
    
  />
     <Drawer.Item
    
    icon="card-text-outline"
    label="Support and FAQs"
    onPress={()=> {props.navigation.navigate('SupportStack',{
      cachedData: cachedData,
      actualUser: actualUser
      
    })}}
    
  />
 


 </Drawer.Section>
   <Drawer.Section>
 
 <Drawer.Item
    
    icon= {({color, size}) => (
                                <Icon 
                                name="account-box-multiple" 
                                color={color}
                                size={size}
                                />
                            )}

    label="Switch to Vendor"
    onPress = {switchToVendor}
    
  />


  
  
  
   
   
   
   


<Drawer.Item
     style={styles.bottom}
     icon="exit-to-app"
     
     label="Sign Out"
     
     onPress={()=>{
       alert('signing out');
       auth().signOut().
        then((value)=>{
          setUser(null);
        })

     }}
     
   />

  
    
 

   
            


            
   
   
     </Drawer.Section>
      <View style={styles.versionSeperator} />
     <Text style={styles.version}>Version 1.0.0</Text>
         </View>
       </DrawerContentScrollView>
   </View>
  )};


  const styles = StyleSheet.create({
 
  header: {
    
    height:Dimensions.get('window').height/5.1,
   
   
  
    flexDirection: 'column',
   
   
  },
  username: {
   
    
    marginStart: '6%',
    fontSize: 17,
    fontWeight: 'bold',
    
    
  },
  version: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 14,
    position: 'absolute',
    bottom: 0,
    marginLeft: '5%',
    marginBottom: '2%',
    margin: '3%'
  },
  versionSeperator:{
    position: 'absolute',
    bottom: 35,
    height: 0.08,
    width: '95%',
    backgroundColor: 'rgba(211,211,211,5)'
  }
  })


export default DrawerContent;