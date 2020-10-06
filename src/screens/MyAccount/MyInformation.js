import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, SafeAreaView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChevronRightIcon from '../../components/Icons/ChevronRightIcon'
import { RFPercentage } from 'react-native-responsive-fontsize';
import OutlineUserIcon from '../../components/Icons/OutlineUserIcon'
import EmailIcon from '../../components/Icons/EmailIcon'
import CalendarIcon from '../../components/Icons/CalendarIcon'
import PhoneIcon from '../../components/Icons/PhoneIcon'
import {colores} from '../../constantes/Temas'
const initialValues={name:'', dni:'', address:'', dniType:'C.I'}

const MyInformation = ({}) => {
    return(
        <View style={{flex:1, justifyContent:'space-between'}} >
            <View>
                <Item icon={()=><OutlineUserIcon width={wp(6)} height={hp(4)} />} title='Nombre y Apellido' desciprion='Manuel Romero' mTop={5} />
                <Item icon={()=><EmailIcon width={wp(6)} height={hp(4)} color='#000' />} title='Email' desciprion='manolo@gmail.com' />
                <Item icon={()=><CalendarIcon width={wp(6)} height={hp(4)} />} title='Fecha de nacimiento' desciprion='2020-23-11' />
                <Item icon={()=><PhoneIcon width={wp(6)} height={hp(4)} />} title='Numero de celular' desciprion='345123456' />
            </View>
            <TouchableOpacity style={{width:wp(50), height:hp(7), backgroundColor:'#ddd', alignSelf:'center', marginBottom:hp(3), borderRadius:wp(2), justifyContent:'center'}} >
                <Text style={{textAlign:'center',fontWeight:'bold'}} >CAMBIAR CONTRAASEÑA</Text>
            </TouchableOpacity>
        </View>
    )
}

const Item = ({icon=()=>{}, title='Titulo', desciprion='Description', style, mTop=1 }) => {
    return(
        <TouchableOpacity style={{ ...style ,flexDirection:'row', justifyContent:'space-between', alignSelf:'center', width:wp(85), height:hp(10), marginTop:hp(mTop) }} >
            <View style={{justifyContent:'center', flex:1}} >
                {icon()}
            </View>
            <View style={{justifyContent:'center', flex:5}} >
                <Text style={{fontWeight:'bold', fontSize:RFPercentage(2.1)}} >{title}</Text>
                <Text style={{fontSize:RFPercentage(1.9)}} >{desciprion}</Text>
            </View>
            <View style={{justifyContent:'center', flex:1}} >
                <ChevronRightIcon width={wp(5)} height={hp(3)} />
            </View>
        </TouchableOpacity>
    )
}
export default MyInformation