import React, { useEffect, useState, useContext } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View } from 'react-native';

import { CartProvider, CartContext } from '../../context';
import { Ionicons, Badge } from '../';
import styles from './styles';

const MenuHeaderRight = ({ navigation, onPress, reload }) => {
  const [cartQtd, setCartQtd] = useState(0)
  const { getCart } = useContext(CartContext)

  useEffect(() => {
    countCartQtd()
  }, [])

  useEffect(() => {
    if (reload) {
      countCartQtd()
    }
  }, [reload])

  const countCartQtd = async () => {
    const result = await getCart()
    const amountAll = result.reduce((accumulator, current) => accumulator + current.qtd, 0)

    setCartQtd(amountAll)
  }

  const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  
  const handleOnPress = () => {
    if (onPress) {
      onPress(navigation)
      return false;
    }
    navigation.navigate('checkout')
  }

  return (
    <View style={styles.headerButton}>
      <TouchableElement onPress={handleOnPress}>
        <View>
          <Ionicons name="cart-outline" size={20} />
          <Badge text={cartQtd} style={styles.badge} />
        </View>
      </TouchableElement>
    </View>
  )
}

const Container = (props) => <CartProvider>
  <MenuHeaderRight {...props} />
</CartProvider>

export default Container