import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, Dimensions } from 'react-native';
//importaciones necesarias para redux//
import { connect } from 'react-redux';
import Container from '../../generales/Container';
import BasicHeader from '../../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextInputBottomBorder from '../../../components/TextInput/TextInputBottomBorder'
import PlusFloatingButton from '../../../components/PlusFloatingButton'
import useForm from '../../hooks/useForm'
const initialValues={city:'', address:'', addressDetails:''}

const AddressDeliveryForm = ({}) => {
    const form = useForm({initialValues})
    return(
        <Container>
            <BasicHeader title='Direccion de entrga' />
            <View style={{marginTop:hp(5),  justifyContent:'space-between', marginHorizontal:wp(10) }} >
                <CustomButton title='Consumidor final' rigthButton={false} />
                <CustomButton title='Silverter Stalon' />
            </View>
            <PlusFloatingButton/>
        </Container>
    )
}

const CustomButton = ({image=require('../../../assets/img/CancelButton.png'), title='tittle', press,rigthButton=true}) =>{
    return(
        <TouchableOpacity style={{ width:wp(80), flexDirection:'row', justifyContent:'space-between', marginTop:hp(3)}} >
            <View style={{flexDirection:'row',  width:wp(60)}} >
                <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} />
                <View style={{marginLeft:wp(5), justifyContent:'center'}} >
                    <Text style={{fontSize:RFPercentage(2), textAlignVertical:'center'}} >{title} </Text>
                </View>
            </View>
            <View style={{justifyContent:'center'}} >
                {rigthButton && <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(8), height:hp(2.5), alignSelf:'center'}} />}
            </View>
        </TouchableOpacity>
    )
}

export default AddressDeliveryForm