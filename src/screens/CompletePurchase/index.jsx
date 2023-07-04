import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { CardHeader } from '../../components'
import { Styles } from './styles';

const CompletePurchase = ()=> {

  return (
    <View style={Styles.Container}>
        
          <Image style={{width: 200, height: 200}} source={require('../../assets/complete.png')}/>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: '700', color: '#1E1E1E'}}>PEDIDO CONCLUÍDO!</Text>
            <Text style={{fontWeight: '600', color: '#1e1e1e'}}>Valor pago: R$ 1.000,00</Text>
          </View>

          <TouchableOpacity style={{backgroundColor: '#D5D5D5', paddingHorizontal: 25, paddingVertical: 10,  borderRadius: 5}}>
            <Text style={{fontWeight: '700', color: '#1E1E1E', fontSize: 16}}>Ver comprovante</Text>
          </TouchableOpacity>
    </View>
  )

}

export default CompletePurchase