import React from 'react';
import {
	TouchableOpacity,

} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import BackButton from '../../assets/img/BackButton.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native'

const InitalLeftComponent = () => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{flex:1, justifyContent:'center', marginLeft:wp(3)}} >
            <BackButton width={wp(5)} height={hp(2.4)} />
        </TouchableOpacity>
    )
}

export default InitalLeftComponent