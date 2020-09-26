import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useForm from '../../hooks/useForm'
import EditQuantityButtons from '../../components/EditQuantityButtons'
const initialValues={city:'', address:'', addressDetails:''}

const MyCart = ({}) => {
    const form = useForm({initialValues})
    const localData={
        capacity:15, 
        unity:'kg',
        price:1.60,
        name:'Gas',
        description:'Cilindro de gas de 15Kg para el hogar.'
    }
    const localCartData ={
        total: 4.80,
        subTotal: 2.8,
        delivery: 2
    }
    return(
        // <Container>
        <View style={{flex:1}} >
            <BasicHeader title='Mi carito'  />
            <View style={{backgroundColor:colores.grisClaro}} >
                <Text style={{textAlign:'center', fontSize:RFPercentage(2.6), marginTop:hp(1), fontWeight:'900'}} >TOTAL:<Text style={{fontWeight:'bold'}} > ${(localCartData.total).toFixed(2)}</Text></Text>
                <Text style={{textAlign:'center', fontSize:RFPercentage(2), marginTop:hp(1)}} >Subtotal: ${(localCartData.subTotal).toFixed(2)}</Text>
                <Text style={{textAlign:'center', fontSize:RFPercentage(2), marginBottom:hp(1)}} >A domicilio: ${(localCartData.delivery).toFixed(2)}</Text>
            </View>
            <View style={{marginTop:hp(7), flexDirection:'row', justifyContent:'space-between' }} >
                <View style={{flexDirection:'row', marginHorizontal:wp(2), justifyContent:'center'}} > 
                    <Image source={require('../../../assets/img/CancelButton.png')} style={{tintColor:'gray', alignSelf:'center'}} />
                    <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/681/883/non_2x/3d-gas-or-propane-tank.jpg'}} style={{width:wp(25), height:hp(17), marginLeft:wp(3)}} />
                    <View style={{marginLeft:wp(5), justifyContent:'center'}} >
                        <Text style={{textAlign:'center', fontSize:wp(4), marginTop:hp(0.3), fontWeight:'bold'}} >{localData.name} {localData.capacity}{localData.unity}</Text>
                        <EditQuantityButtons />
                    </View>
                </View>
                <Text style={{textAlign:'center', fontSize:wp(7), marginTop:hp(0.3), fontWeight:'bold', textAlignVertical:'center', marginRight:wp(7)}} >${localData.price.toFixed(2)}</Text>
                    
            </View>
            <View style={{top:hp(45), width:wp(55), alignSelf:'center'}} >
                <TouchableOpacity style={{marginRight:wp(10), backgroundColor:colores.grisClaro, paddingHorizontal:wp(9), justifyContent:'center'}} >
                    <Text style={{fontSize:RFPercentage(2.3), textTransform:'uppercase', fontWeight:'bold', marginVertical:hp(1)}} >Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </Container>
    )
}



export default MyCart