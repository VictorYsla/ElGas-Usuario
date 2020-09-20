import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
//importaciones necesarias para redux//
import { connect } from 'react-redux';
import Container from '../../generales/Container';
import BasicHeader from '../../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextInputBottomBorder from '../../../components/TextInput/TextInputBottomBorder'
import useForm from '../../hooks/useForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const initialValues={city:'', address:'', addressDetails:''}

const AddressDeliveryForm = ({}) => {
    const form = useForm({initialValues})
    return(
        <Container>
            <BasicHeader title='Direccion de entrga' icon={require('../../../assets/img/CancelButton.png')} />
            <View style={{marginTop:hp(5), flexDirection:'row', justifyContent:'space-between', marginHorizontal:wp(12) }} >
                <CustomButton title='Domicilio' />
                <CustomButton title='Oficina' />
                <CustomButton title='Otro' />
            </View>
            <View style={{marginTop:hp(2), }} >
                <KeyboardAwareScrollView>
                    <TextInputBottomBorder form={form.getInput('city')} title='Ciudad' />
                    <TextInputBottomBorder form={form.getInput('address')} title='Dirección completa y numeración' />
                    <TextInputBottomBorder form={form.getInput('addressDetails')} title='Edificio/torre/departamento' />
                </KeyboardAwareScrollView>
            </View>
        </Container>
    )
}

const CustomButton = ({image=require('../../../assets/img/CancelButton.png'), title='tittle', press}) =>{
    return(
        <View style={{justifyContent:'center', width:wp(18)}} >
            <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} />
            <Text style={{fontSize:RFPercentage(2), textAlign:'center'}} >{title} </Text>
        </View>
    )
}


export default AddressDeliveryForm