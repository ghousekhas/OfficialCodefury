import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {Colors,dimen,TextSpinnerBoxStyles} from '../Constants';

const ExpandableTextBox = ({title,hint,icon,changeText}) => {
    return(<View style={style.mainContainer}>
       <Text style={style.text}>{title}</Text>
       <View style={style.answer}>
        <TextInput style={style.input}
        placeholder={hint} onChangeText={changeText} multiline={true} numberOfLines={10} maxLength={200} textAlignVertical={'top'}
        clearButtonMode={'always'}/>
        <View style={style.icon}>
            <FontAwesome5 name={icon} size={30} color='#5D5D5D' backgroundColor='white' />
        </View>
     
       </View>
      
    </View>)

};



const style = StyleSheet.create({
    mainContainer:{
        paddingVertical: dimen.height/100,
        marginTop: dimen.height/100,
        paddingHorizontal: dimen.width*0.1,
        alignSelf: 'center'
    },
   text:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
     //   backgroundColor: '#F9F9F9'

   },
   input: {
    width: dimen.width*0.95,
    textAlign: 'left',
    maxHeight: dimen.height/3,
    flex: 5,
    marginStart: 10,
    backgroundColor: 'white'
   
   
    
   
},
    answer:{
    flexDirection:'row',
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    width: dimen.width*0.95,
   
  
    borderColor: Colors.seperatorGray,
    borderWidth: 1,
    borderRadius: 5
},
icon:{
    padding: 6
}
});
export default ExpandableTextBox;