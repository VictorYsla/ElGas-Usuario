import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
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
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
const initialValues={city:'', address:'', addressDetails:''}

const AddressDeliveryForm = ({}) => {
    const form = useForm({initialValues})
    const [location, setLocation] = useState({
        latitude: 74.000,
        longitude: -4.000
    })
    useEffect(()=>{
        GetCurrentLocation()
    },[])
    async function GetCurrentLocation (){
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync({});
        //console.log(location)
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });
    }
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
            <View style={{flex:1, marginTop:hp(5)}} >
                <MapView style={{flex:1}}
                    initialRegion={{...location, latitudeDelta:0.2, longitudeDelta:0.2}}
                    showsMyLocationButton
                    showsUserLocation
                >
                    <Marker coordinate={location} image={require('../../../assets/img/MapMarker.png')}  />
                </MapView>
            </View>
        </Container>
    )
}

const CustomButton = ({image=require('../../../assets/img/CancelButton.png'), title='tittle', press}) =>{
    return(
        <TouchableOpacity style={{justifyContent:'center', width:wp(18)}} >
            <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} />
            <Text style={{fontSize:RFPercentage(2), textAlign:'center'}} >{title} </Text>
        </TouchableOpacity>
    )
}


export default AddressDeliveryForm