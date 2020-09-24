import React from 'react';
import {  Text, TouchableOpacity, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../src/constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window')

const PlusFloatingButton = ({press=()=>{}}) => {
    return(
        <TouchableOpacity onPress={()=>press()} style={{width:wp(14), height:hp(7), backgroundColor:colores.bgOscuro, position:'absolute', top:height-height/5.5, borderRadius:hp(100), left:wp(80), justifyContent:'center', alignItems:'center'}} >
            <Text style={{fontSize:RFPercentage(5), color:'#fff',marginBottom:hp(0.5), textAlignVertical:'center'}} >+</Text>
        </TouchableOpacity>
    )
}

export default PlusFloatingButton