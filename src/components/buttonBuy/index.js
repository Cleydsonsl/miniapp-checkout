import React, { useContext } from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { CartProvider, CartContext } from '../../context';
import styles from './styles';

const ButtonBuy = ({ title = 'Comprar', product, beforeCallback, callback }) => {
  const context = useContext(CartContext)
  const { addToCart } = context
  
  const handleOnPress = async () => {
    if (beforeCallback) { await beforeCallback(product) }

    await addToCart(product)

    if (callback) { await callback(product) }
  }

  const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableElement onPress={handleOnPress}>
      <View style={styles.ButtonBuy}>
        <Text style={{color: '#F4F4F5', fontSize: 18, fontWeight: '700'}}>{title}</Text>
      </View>
    </TouchableElement>
  )
}

const Container = (props) => <CartProvider>
  <ButtonBuy {...props} />
</CartProvider>

export default Container
