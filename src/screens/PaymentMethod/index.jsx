import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { CardHeader } from '../../components';
import { Styles } from './styles';
import { BtnOptionsPayment } from '../../components/buttonSelectPayment';

const RedStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
)

const PaymentMethod = ({ navigation })=> {

  return (
    <View style={Styles.Container}>
      {/* <RedStatusBar backgroundColor='#FE001E' barStyle='light-content' /> */}
        {/* <View style={Styles.Header}>
          <TouchableOpacity 
            style={{
              paddingHorizontal: 8, 
              paddingVertical: 5, 
              borderColor: '#F4F4F5', 
              borderWidth: 1, 
              borderRadius: 20
              }}
              onPress={() => navigation.navigate('home')}
            >
            <Image source={require('../../assets/chevronPrev.png')} style={{width: 7.5, height: 15}}/>
          </TouchableOpacity>
          <Text style={Styles.Title}>
            Meu Carrinho
          </Text>
          <TouchableOpacity style={{ padding: 5}}>
            <Image source={require('../../assets/notify.png')} style={{width: 18, height: 20}}/>
          </TouchableOpacity>
        </View> */}

        <View style={Styles.Content}>
          <View style={Styles.ContentButtonsPayments}>
            <BtnOptionsPayment text='Cartão de Crédito'/>
            <BtnOptionsPayment text='Boleto'/>
            <BtnOptionsPayment text='Pix'/>
          </View>

          <ScrollView style={Styles.contentPaymentCard}>
            <Image style={{width: 226, height: 170}} source={require('../../assets/creditcard.png')}/>
          </ScrollView>
          <TouchableOpacity style={Styles.AddingCardPaymentBtn}>
            <Image style={{width: 15, height: 15, marginTop: 2, marginRight: 11}} source={require('../../assets/adding.png')}/>
            <Text style={{color: '#000', fontWeight: '700', textAlignVertical: 'center'}}>Adicionar cartão</Text>
          </TouchableOpacity>

          <View style={{width: '100%'}}>
          <Text style={Styles.Labels}>Nome no cartão</Text>
            <TextInput 
              style={Styles.Inputs} 
              placeholder='Insira o nome como está no cartão' 
              placeholderTextColor='#6C6C6C' 
            />
            <Text style={Styles.Labels}>Número do cartão</Text>
            <TextInput 
              style={Styles.Inputs} 
              placeholder='Insira o número do seu cartão' 
              placeholderTextColor='#6C6C6C' 
            />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '45%'}}>
                <Text style={Styles.Labels}>Data de Validade</Text>
                <TextInput 
                  style={Styles.Inputs} 
                  placeholder='00/00' 
                  placeholderTextColor='#6C6C6C' 
                />
              </View>
              <View style={{width: '45%'}}>
                <Text style={Styles.Labels}>CVV</Text>
                <TextInput 
                  style={Styles.Inputs} 
                  placeholder='000' 
                  placeholderTextColor='#6C6C6C' 
                />
              </View>
            </View>
          </View>
          {/* <Text>Compra finalizada!</Text>
          <Text>Obrigado por comprar conosco! Seu pedido estará a caminho em breve</Text> */}
        </View>

        <View style={{width: '100%', height: 2, backgroundColor: '#FE001E'}}/>
        <View style={{padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View>
            <Text style={{color: '#71717A', fontSize: 14, fontWeight: '500'}}>Total</Text>
            <Text style={{color: '#27272A', fontSize: 18, fontWeight: '700'}}>R$ 1.000,00</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('completePurchase')} 
            style={{backgroundColor: '#FE001E', padding: 15, borderRadius: 5}}
          >
            <Text style={{color: '#F4F4F5', fontSize: 18, fontWeight: '700'}}>Finalizar compra</Text>
          </TouchableOpacity>

        </View>
    </View>
  )

}

export default PaymentMethod