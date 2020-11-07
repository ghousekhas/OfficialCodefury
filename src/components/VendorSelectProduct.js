import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {Styles,Colors,dimen} from '../Constants'
import { AntDesign } from '@expo/vector-icons';

export default VendorSelectProduct = ({name,imageURL}) => {
return(<View style={{flexDirection: 'row',marginVertical:'2%',margin:'1%',backgroundColor: Colors.whiteBackground,height:dimen.height/8}}>
 <Image style={styles.image} source={{uri: imageURL}}/>
 <View style={{alignSelf:'center',marginStart:80}}>
 <Text style={{fontWeight:'bold',color:'black',fontSize:16}}>{name}</Text>
</View>
<AntDesign name="checksquareo" size={24} color="black" />
</View>)
}

const styles = StyleSheet.create({
    image: {
        width: 79,
        height: 80,
        position: 'absolute',
        marginStart: '-1%',
        
        marginTop : '3%'
        
       
    }
});

