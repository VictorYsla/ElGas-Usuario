import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useForm from '../../hooks/useForm'
import EditQuantityButtons from '../../components/EditQuantityButtons'
import CancelIcon from '../../components/Icons/CancelIcon'
import { connect } from 'react-redux';
import {actions} from '../../redux/index'
import ItemCart from '../../components/ItemsList/ItemCart'
const initialValues={city:'', address:'', addressDetails:''}

const MyCart = ({cart, total}) => {
    const form = useForm({initialValues})
    const localData={
        capacity:15, 
        unity:'kg',
        price:1.60,
        name:'Gas',
        description:'Cilindro de gas de 15Kg para el hogar.'
    }
    const localCartData ={
        total: 4.80,
        subTotal: 2.8,
        delivery: 2
    }
    console.log('Dta in MyCart: ', cart, total);
    return(
        <View style={{flex:1}} >
            <BasicHeader title='Mi carito'  />
            <View style={{backgroundColor:colores.grisClaro}} >
                <Text style={{textAlign:'center', fontSize:RFPercentage(2.6), marginTop:hp(1), fontWeight:'900'}} >TOTAL:<Text style={{fontWeight:'bold'}} > ${(total).toFixed(2)}</Text></Text>
                <Text style={{textAlign:'center', fontSize:RFPercentage(2), marginTop:hp(1)}} >Subtotal: ${(localCartData.subTotal).toFixed(2)}</Text>
                <Text style={{textAlign:'center', fontSize:RFPercentage(2), marginBottom:hp(1)}} >A domicilio: ${(localCartData.delivery).toFixed(2)}</Text>
            </View>
            <ScrollView>
                {
                    cart.map((value, index)=>{
                        const {product:{name,photo_url, description:{capacity, unity},price }} = value
                        return(
                            <ItemCart 
                                image={photo_url}
                                capacity={capacity}
                                index={index}
                                price={price}
                                item={value}
                                unity={unity}
                                name={name} />
                        )
                    })
                }
            </ScrollView>
            <View style={{top:hp(45), width:wp(55), alignSelf:'center'}} >
                <TouchableOpacity style={{marginRight:wp(10), backgroundColor:colores.grisClaro, paddingHorizontal:wp(9), justifyContent:'center'}} >
                    <Text style={{fontSize:RFPercentage(2.3), textTransform:'uppercase', fontWeight:'bold', marginVertical:hp(1)}} >Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const mapStateToProps = (state) => ({
    login: state.login.login,
    cart: state.cart.Cart.cart,
    total: state.cart.Cart.totalPrice
});

const mapDispatchToProps = (dispatch) => {
    return {
        editCart: (index, element, sum) => {
            dispatch(actions.UpdateCart.EditQtyCart(index, element,sum ))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (MyCart)