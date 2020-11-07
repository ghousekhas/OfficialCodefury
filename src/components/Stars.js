import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';


const Stars = ({number}) => {
    return(<View style={style.container}>
        
        <Entypo name="star-outlined" size={16} color="black" />
        <Entypo name="star-outlined" size={16} color="black" />
        <Entypo name="star-outlined" size={16} color="black" />
        <Entypo name="star-outlined" size={16} color="black" />
        <Entypo name="star-outlined" size={16} color="black" />

        <View style={style.inner}>
        <View style={number >= 1? style.visible : style.invisible}>
        <Entypo name="star" size={16} color='#BF9000' />
        </View>
        <View style={number >= 2? style.visible : style.invisible}>
        <Entypo name="star" size={16} color="#BF9000" />
        </View>
        <View style={number >= 3? style.visible : style.invisible}>
        <Entypo name="star" size={16} color="#BF9000" />
        </View>
       <View style={number >= 4? style.visible : style.invisible}>
        <Entypo name="star" size={16} color="#BF9000" />
        </View>
       <View style={number > 5? style.visible : style.invisible}>
        <Entypo name="star" size={16} color="#BF9000" />
        </View>

        </View>
       
        
    </View>)
    
};


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2%',
        alignItems: 'center'
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute'
    },
    invisible: {
        opacity: 0,
        
    },
    visible: {
        opacity: 1
    },
    

});

export default Stars;