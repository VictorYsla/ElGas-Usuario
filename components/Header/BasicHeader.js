import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../src/constantes/Temas';

const InitalLeftComponent = (icon) => {
    //const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>{/* navigation.goBack() */}} style={{flex:1, justifyContent:'center', marginLeft:'20%'}} >
            <Image source={icon}  />
            
        </TouchableOpacity>
    )
}

const BasicHeader = ({leftWidth=20, rigthWidth=20, icon=require('../../assets/img/BackButton.png'),centerWidth=60,leftComponent=()=>InitalLeftComponent(icon), headerHeigth=7.5, rigthComponent=()=>{}, centerComponent=()=>{}, title='title'}) => {
    //const navigation = useNavigation()
    return(
        <View style={{height:`${headerHeigth}%`, flexDirection:'row', width:'100%', backgroundColor:colores.bgOscuro}} >
            <View style={{width:`${leftWidth}%`, justifyContent:'center', }} >
                {leftComponent(icon)}
            </View>
            <View style={{width:`${centerWidth}%`, justifyContent:'center'}} >
                {
                    centerComponent()?
                        centerComponent()
                    :
                        <Text style={{textAlign:'center', color:'#fff', fontSize:RFPercentage(3)}} >{title} </Text>
                }
                
            </View>
            <View style={{width:`${rigthWidth}%`, justifyContent:'center'}} >
                {rigthComponent()}
            </View>
        </View>
    )
}

export default BasicHeader