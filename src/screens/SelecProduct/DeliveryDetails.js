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

const DeliveryDetails = ({}) => {
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
            <BasicHeader title='Revisar datos del pedido'  />
            <View style={{marginTop:hp(1), alignSelf:'center'}} >
                <CustomButton title='Dirección de entrega' description='Manuel Córdoba Galarza' />
                <CustomButton title='Datps de la facturación' description='Silvester Stalon' />
            </View>
            <View style={{backgroundColor:colores.grisClaro, marginTop:hp(6)}} >
                <Text style={{textAlign:'center', fontSize:RFPercentage(2.6), marginTop:hp(1), fontWeight:'900'}} >TOTAL DE LA COMPRA:</Text>
                <Text style={{textAlign:'center', fontSize:RFPercentage(2.6), marginTop:hp(1), fontWeight:'bold', marginBottom:hp(1)}} > ${(localCartData.total).toFixed(2)}</Text>
            </View>
            
        </View>
        // </Container>
    )
}


const CustomButton = ({image=require('../../../assets/img/CancelButton.png'), title='tittle', press, description='description'}) =>{
    return(
        <TouchableOpacity style={{ width:wp(80), flexDirection:'row', justifyContent:'space-between', marginTop:hp(3)}} >
            <View style={{flexDirection:'row',  width:wp(60)}} >
                <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} />
                <View style={{marginLeft:wp(5)}} >
                    <Text style={{fontSize:RFPercentage(2), textAlign:'left', fontWeight:'bold'}} >{title} </Text>
                    <Text style={{fontSize:RFPercentage(2), }} >{description} </Text>
                </View>
            </View>
            <View style={{justifyContent:'center'}} >
                <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(8), height:hp(2.5), alignSelf:'center'}} />
            </View>
        </TouchableOpacity>
    )
}


export default DeliveryDetails