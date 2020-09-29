import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlusFloatingButton from '../../components/PlusFloatingButton'
import CancelIcon from '../../components/Icons/CancelIcon'

const AddressDeliveryForm = ({}) => {
    return(
        <Container>
            <BasicHeader title='Direccion de entrga' icon={()=><CancelIcon/>} />
            <View style={{marginTop:hp(5),  justifyContent:'space-between', marginHorizontal:wp(10) }} >
                <CustomButton title='Domicilio' description='Manuel Córdoba Galarza' />
                <CustomButton title='Oficina' description='Av. Pedro Vicente Maldonado' />
                <CustomButton title='Otro' description='36 Ana Ayala' />
            </View>
            <PlusFloatingButton/>
        </Container>
    )
}

const CustomButton = ({image=()=><CancelIcon/>, title='tittle', press, description='description'}) =>{
    return(
        <TouchableOpacity style={{ width:wp(80), flexDirection:'row', justifyContent:'space-between', marginTop:hp(3)}} >
            <View style={{flexDirection:'row',  width:wp(60)}} >
                {/* <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} /> */}
                {image()}
                <View style={{marginLeft:wp(5)}} >
                    <Text style={{fontSize:RFPercentage(2), textAlign:'left', fontWeight:'bold'}} >{title} </Text>
                    <Text style={{fontSize:RFPercentage(2), }} >{description} </Text>
                </View>
            </View>
            <View style={{justifyContent:'center'}} >
                {/* <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(8), height:hp(2.5), alignSelf:'center'}} /> */}
                {image()}
            </View>
        </TouchableOpacity>
    )
}

export default AddressDeliveryForm