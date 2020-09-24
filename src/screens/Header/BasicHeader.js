import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const InitalLeftComponent = (icon, iconWidth, iconHeight) => {
    //const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>{/* navigation.goBack() */}} style={{flex:1, justifyContent:'center', marginLeft:'20%'}} >
            <Image source={icon} style={{width:wp(iconWidth), height:hp(iconHeight)}}  />
            
        </TouchableOpacity>
    )
}

const BasicHeader = ({leftWidth=20, iconWidth=6.2,iconHeight=2.6 , rigthWidth=20, icon=require('../../../assets/img/BackButton.png'),centerWidth=60,leftComponent=()=>InitalLeftComponent(icon, iconWidth,iconHeight ), headerHeigth=7.5, rigthComponent=()=>{}, centerComponent=()=>{}, title='title'}) => {
    //const navigation = useNavigation()
    return(
        <View style={{height:`${headerHeigth}%`, flexDirection:'row', width:'100%', backgroundColor:colores.bgOscuro}} >
            <View style={{width:`${leftWidth}%`, justifyContent:'center', }} >
                {leftComponent(icon, iconWidth, iconHeight)}
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