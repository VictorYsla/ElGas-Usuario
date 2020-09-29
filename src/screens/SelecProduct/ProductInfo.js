import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../components/Header/BasicHeader'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useForm from '../../hooks/useForm'
import EditQuantityButtons from '../../components/EditQuantityButtons'
import { connect } from 'react-redux';
import {actions} from '../../redux/index'
const initialValues={city:'', address:'', addressDetails:''}

const ProductInfo = ({route:{params}, login, editCart, cart}) => {
    const form = useForm({initialValues})
    console.log('cart In ProductInfo', cart);
    const {item} = params
    const editQty = (suma) =>{
        const indexInCart = cart.findIndex(obj => obj.product.id == item.product.id);
        console.log('indxInCart: ', indexInCart);
        editCart(indexInCart, item, suma)
    }
    return(
        // <Container>
        <View style={{flex:1}} >
            <BasicHeader title='Producto'  />
            
            <View style={{marginTop:hp(5), }} >
                    <TouchableOpacity style={{marginLeft:wp(1), alignSelf:'center'}} >
                        <Image source={{uri: item.product.photo_url}} style={{width:wp(25), height:hp(17)}} />
                        <Text style={{textAlign:'center', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{item.product.descirption.capacity}{item.product.descirption.unity}</Text>
                        <Text style={{textAlign:'center', fontSize:wp(7), marginTop:hp(0.3), fontWeight:'bold'}} >${item.product.price.toFixed(2)}</Text>
                    </TouchableOpacity>
            </View>
            <View style={{ marginTop:hp(5)}} >
                <View style={{backgroundColor:'#eee', width:wp(100), height:hp(5), justifyContent:'center'}} >
                    <Text style={{textAlign:'center', fontSize:RFPercentage(2.5), fontWeight:'bold'}} >Detalles del producto</Text>
                </View>
                <View style={{marginTop:hp(2), justifyContent:'center', alignSelf:'center'}} >
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >Peso: {item.product.descirption.capacity}{item.product.descirption.unity}</Text>
                    <Text style={{textAlign:'left', fontSize:wp(3.3), marginTop:hp(0.3), fontWeight:'bold'}} >{item.product.descirption.description}</Text>
                </View>
            </View>
            <View style={{top:hp(28), flexDirection:'row', justifyContent:'space-between'}} >
                <EditQuantityButtons mlef={10} editQty={editQty} />
                <TouchableOpacity style={{marginRight:wp(10), backgroundColor:colores.grisClaro, paddingHorizontal:wp(9), justifyContent:'center'}} >
                    <Text style={{fontSize:RFPercentage(2.3), textTransform:'uppercase', fontWeight:'bold'}} >Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </Container>
    )
}

const mapStateToProps = (state) => ({
    login: state.login.login,
    cart: state.cart.Cart.cart
});

const mapDispatchToProps = (dispatch) => {
    return {
        editCart: (index, element, sum) => {
            dispatch(actions.UpdateCart.EditQtyCart(index, element,sum ))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo)