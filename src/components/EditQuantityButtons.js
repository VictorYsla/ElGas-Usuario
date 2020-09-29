import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colores} from '../constantes/Temas'

const EditQuantityButtons = ({quantity=1, editQty=()=>{}, mlef=0, mRigth=0}) => {
    return(
        <View style={{width:wp(20), marginLeft:wp(mlef), marginRight:wp(mRigth),height:hp(5), flexDirection:'row', justifyContent:'space-between'}} >
            <TouchableOpacity onPress={()=>editQty(-1)} style={{width:wp(6), height:hp(3.2), borderRadius:wp(100),backgroundColor:colores.bgOscuro,alignSelf:'center', justifyContent:'center'}} >
                <Text style={{color:'#fff', textAlign:'center', fontSize:RFPercentage(3), textAlignVertical:'center', marginBottom:wp(0.9)}} >-</Text>
            </TouchableOpacity>
            <View style={{justifyContent:'center'}} >
                <Text style={{color:'#000', fontSize:RFPercentage(2.4)}} >{quantity}</Text>
            </View>
            <TouchableOpacity onPress={()=>editQty(1)} style={{width:wp(6), height:hp(3.2), borderRadius:wp(100),backgroundColor:colores.bgOscuro,alignSelf:'center', justifyContent:'center'}} >
                <Text style={{color:'#fff', textAlign:'center', fontSize:RFPercentage(3), textAlignVertical:'center', marginBottom:wp(0.9)}} >+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditQuantityButtons