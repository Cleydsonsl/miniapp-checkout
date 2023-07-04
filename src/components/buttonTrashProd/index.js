import React, { useContext } from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  Platform,
 } from 'react-native';

import { CartProvider, CartContext } from '../../context';
import styles from './styles';
import { Ionicons } from '../';

const ButtonTrashProd = ({ product, beforeCallback, callback }) => {
  const context = useContext(CartContext)
  const { removeFromCart } = context
  
  const handleOnPress = async () => {
    if (beforeCallback) { await beforeCallback(product) }

    await removeFromCart(product)

    if (callback) { await callback(product) }
  }

  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableElement style={styles.ButtonTrash} onPress={handleOnPress}>
      <Ionicons name="trash-outline" size={20} color={'#b0b0b0'} />
    </TouchableElement>
  )
}

const Container = (props) => <CartProvider>
  <ButtonTrashProd {...props} />
</CartProvider>

export default Container
