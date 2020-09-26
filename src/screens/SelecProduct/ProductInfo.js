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

const ProductInfo = ({}) => {
    const form = useForm({initialValues})
    const localData={
        capacity:15, 
        unity:'kg',
        price:1.60,
        name:'Gas',
        description:'Cilindro de gas de 15Kg para el hogar.'
    }
    
    return(
        // <Container>
        <View style={{flex:1}} >
            <BasicHeader title='Producto'  />
            
            <View style={{marginTop:hp(5), }} >
                    <TouchableOpacity style={{marginLeft:wp(1), alignSelf:'center'}} >
                        <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/681/883/non_2x/3d-gas-or-propane-tank.jpg'}} style={{width:wp(25), height:hp(17)}} />
                        <Text style={{textAlign:'center', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{localData.capacity}{localData.unity}</Text>
                        <Text style={{textAlign:'center', fontSize:wp(7), marginTop:hp(0.3), fontWeight:'bold'}} >${localData.price.toFixed(2)}</Text>
                    </TouchableOpacity>
            </View>
            <View style={{ marginTop:hp(5)}} >
                <View style={{backgroundColor:'#eee', width:wp(100), height:hp(5), justifyContent:'center'}} >
                    <Text style={{textAlign:'center', fontSize:RFPercentage(2.5), fontWeight:'bold'}} >Detalles del producto</Text>
                </View>
                <View style={{marginTop:hp(2), justifyContent:'center', alignSelf:'center'}} >
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >Peso: {localData.capacity}{localData.unity}</Text>
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{localData.description}</Text>
                </View>
            </View>
            <View style={{top:hp(28), flexDirection:'row', justifyContent:'space-between'}} >
                <EditQuantityButtons mlef={10} />
                <TouchableOpacity style={{marginRight:wp(10), backgroundColor:colores.grisClaro, paddingHorizontal:wp(9), justifyContent:'center'}} >
                    <Text style={{fontSize:RFPercentage(2.3), textTransform:'uppercase', fontWeight:'bold'}} >Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </Container>
    )
}



export default ProductInfo