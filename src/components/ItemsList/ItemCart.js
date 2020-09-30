import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EditQuantityButtons from '../EditQuantityButtons'
import CancelIcon from '../Icons/CancelIcon'
import {actions} from '../../redux/index'
import { connect } from 'react-redux';


const Item = ({name, index, capacity, unity, price, image, item, cart, editCart, deleteItemFronCart}) => {
    const [quantity, setQuantity] = useState(
        cart.findIndex(obj => obj.product.id == item.product.id) !== -1 ? cart[cart.findIndex(obj => obj.product.id == item.product.id)].quantity : 0)
    const editQty = (suma) =>{
        const indxInCart = cart.findIndex(obj => obj.product.id == item.product.id)
        console.log('FindexAntes: ', indxInCart);
        editCart(indxInCart, item, suma)
        if (cart.findIndex(obj => obj.product.id == item.product.id) !== -1){
            console.log('Qty', cart[cart.findIndex(obj => obj.product.id == item.product.id)].quantity);
            setQuantity(cart[cart.findIndex(obj => obj.product.id == item.product.id)].quantity)
        }
        console.log('FindexDespues: ', cart.findIndex(obj => obj.product.id == item.product.id));
    }
    return(
        <View key={index} style={{marginTop:hp(7), flexDirection:'row', justifyContent:'space-between' }} >
            <View style={{flexDirection:'row', marginHorizontal:wp(2), justifyContent:'center'}} > 
                <TouchableOpacity onPress={()=>deleteItemFronCart(item)} style={{justifyContent:'center'}} >
                    <CancelIcon width={wp(3)} height={hp(2)} />
                </TouchableOpacity>
                <Image source={{uri: image}} style={{width:wp(25), height:hp(17), marginLeft:wp(3)}} />
                <View style={{marginLeft:wp(5), justifyContent:'center'}} >
                    <Text style={{textAlign:'center', fontSize:wp(4), marginTop:hp(0.3), fontWeight:'bold'}} >{name} {capacity}{unity}</Text>
                    <EditQuantityButtons 
                        editQty={editQty}
                        quantity={cart.findIndex(obj => obj.product.id == item.product.id) !== -1 ? quantity : 0 } />
                </View>
            </View>
            <Text style={{textAlign:'center', fontSize:wp(7), marginTop:hp(0.3), fontWeight:'bold', textAlignVertical:'center', marginRight:wp(7)}} >${price.toFixed(2)}</Text>
                
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
        deleteItemFronCart: (element) => {
            dispatch(actions.UpdateCart.RemoveElement(element))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Item)

