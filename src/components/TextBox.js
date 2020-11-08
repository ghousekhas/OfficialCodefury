import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import {Colors,dimen,TextSpinnerBoxStyles} from '../Constants';

const TextBox = ({title,hint,icon,changeText,defaultValue,password=false}) => {
    return(<View style={style.mainContainer}>
       <Text style={style.text}>{title}</Text>
       <View style={style.answer}>
       <TextInput style={style.input} 
       defaultValue={defaultValue}
       secureTextEntry={password}
       placeholder={hint} onChangeText={changeText}></TextInput>
       <View style={style.icon}>
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
    height: TextSpinnerBoxStyles.input.height, 
    textAlign: 'left',
    
    flex: 5,
    marginStart: 10,
    backgroundColor: 'white'
   
   
    
   
},
    answer:{
    flexDirection:'row',
    marginTop: 8,
    alignItems: 'center',
    height: TextSpinnerBoxStyles.answer.height,
    width: Dimensions.get('window').width-30,
    backgroundColor: 'white',
   
  
    borderColor: Colors.seperatorGray,
    borderWidth: 1,
    borderRadius: 5
},
icon:{
    padding: 6
}
});
export default TextBox;