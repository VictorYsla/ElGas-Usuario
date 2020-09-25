import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useForm from '../../hooks/useForm'
const initialValues={city:'', address:'', addressDetails:''}

const Product = ({}) => {
    const form = useForm({initialValues})
    const [basket, setBasket] = useState(1)
    const localImagesArray = [
        {uri:'https://static.vecteezy.com/system/resources/previews/000/681/883/non_2x/3d-gas-or-propane-tank.jpg', capacity:15, unity:'kg'},
        {uri:'https://thumbs.dreamstime.com/b/un-cilindro-de-gas-37071083.jpg', capacity:45, unity:'g'}
    ]
    const localImagesArrayValvules = [
        {uri:'https://regaber.com/wp-content/uploads/2019/04/ValvulaCompuerta_AsientoElastico_Gaer_Regaber_01.jpg', name:'Válvulas'}
    ]
    const localData={
        capacity:15, 
        unity:'kg',
        price:1.60,
        name:'Gas',
        description:'Cilindro de gas de 15Kg para el hogar.'
    }
    
    return(
        <Container>
            <BasicHeader title='Producto'  />
            
            <View style={{marginTop:hp(5), }} >
                    <TouchableOpacity style={{marginLeft:wp(1), alignSelf:'center'}} >
                        <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/681/883/non_2x/3d-gas-or-propane-tank.jpg'}} style={{width:wp(25), height:hp(17)}} />
                        <Text style={{textAlign:'center', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{localData.capacity}{localData.unity}</Text>
                        <Text style={{textAlign:'center', fontSize:wp(7), marginTop:hp(0.3), fontWeight:'bold'}} >${localData.price.toFixed(2)}</Text>
                    </TouchableOpacity>
            </View>
            <View style={{flex:1, marginTop:hp(5)}} >
                <View style={{backgroundColor:'#eee', width:wp(100), height:hp(5), justifyContent:'center'}} >
                    <Text style={{textAlign:'center', fontSize:RFPercentage(2.5), fontWeight:'bold'}} >Cilindros de gas</Text>
                </View>
                <View style={{marginTop:hp(2), justifyContent:'center', alignSelf:'center'}} >
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >Peso: {localData.capacity}{localData.unity}</Text>
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{localData.description}</Text>
                </View>
                
            </View>
        </Container>
    )
}



export default Product