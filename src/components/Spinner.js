import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Colors, TextSpinnerBoxStyles,dimen} from '../Constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function SpinnerBox({title,changeOption,data}){
    const [dropdown,setDropdown]=useState('');

    return(
    <View style={TextSpinnerBoxStyles.mainContainer}>
        <Text style={TextSpinnerBoxStyles.text}>{title}</Text>
       <View style={TextSpinnerBoxStyles.answer}>
        <Picker
            mode={"dialog"}
            style={styles.picker}
            selectedValue={dropdown}
            onValueChange={(val,index)=>{
                setDropdown(val);
                changeOption(val);
            }}>
               { data.map((item)=>{
                    return (
                        <Picker.Item label={item.label} value={item.value}/>
                    )
                })
            }
        </Picker>
        </View>
   
       
     </View>)
}

const styles=StyleSheet.create({
    wrapper:{
        borderWidth: 1,
        borderColor: Colors.seperatorGray,
        width: dimen.width*0.95
    },
    picker:{
        padding: 10,
        flex: 1,
        height: dimen.height/14
        
    

    }
})