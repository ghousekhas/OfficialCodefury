import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Colors} from '../Constants';

export default function GenericSeperator(){
    return(<View style={mainstyle.styles}/>);
};

const mainstyle = StyleSheet.create({
    styles:{
    width: '90%',
    height: 0.5,
    backgroundColor: Colors.seperatorGray,
    alignSelf: 'center'
}
});


