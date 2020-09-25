import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../../components/Header/BasicHeader'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextInputBottomBorder from '../../../components/TextInput/TextInputBottomBorder'
import useForm from '../../hooks/useForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Selector from '../../../components/Form/Selector'
const initialValues={name:'', dni:'', address:'', dniType:'C.I'}

const AddressDeliveryForm = ({}) => {
    const form = useForm({initialValues})
    return(
        <Container>
            <BasicHeader title='Direccion de entrga' />
            <View style={{marginTop:hp(5), }} >
                <KeyboardAwareScrollView>
                    <TextInputBottomBorder form={form.getInput('name')} title='Ciudad' />
                    <TextInputBottomBorder form={form.getInput('dni')} title='Número de identificación' />
                    <Selector fields={['C.I', 'R.U.C']} title='Tipo de identificación' form={form} />
                    <TextInputBottomBorder form={form.getInput('address')} title='Dirección' />
                    <TextInputBottomBorder form={form.getInput('address')} title='Teléfono' />
                </KeyboardAwareScrollView>
            </View>
            <View style={{alignSelf:'center', top:hp(40)}} >
                <TouchableOpacity>
                    <Text style={{textTransform: 'uppercase'}} >Guardar</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default AddressDeliveryForm