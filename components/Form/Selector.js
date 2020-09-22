import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../src/constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CustomSelector = ({title='title', fields=['Valor1', 'Valor2'], mTop=1, form}) =>{
    const Item = ({title}) => {
        return(
            <TouchableOpacity onPress={()=>{form.setForm('dniType', title)}} style={{flexDirection:'row', marginHorizontal:wp(2), justifyContent:'center'}} >
                <TouchableOpacity onPress={()=>{form.setForm('dniType', title)}} style={{width:wp(4.5), height:hp(2.3), backgroundColor: form.fields.dniType === title ?  colores.bgOscuro : 'transparent' , borderRadius:wp(100), alignSelf:'center', borderColor:'#000', borderWidth:0.8}} />
                <Text style={{fontSize:RFPercentage(2), textAlignVertical:'center', marginLeft:wp(1)}} >{title}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={{height:hp(6.8), marginTop:hp(mTop)}} >
            <Text style={{fontSize:RFPercentage(2), marginHorizontal:wp(12), marginTop:hp(1)}} >{title} </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignSelf:'center',marginTop:hp(0.4) }} >
                {
                    fields.map((value)=>{
                        return(
                            <Item title={value}  />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default CustomSelector