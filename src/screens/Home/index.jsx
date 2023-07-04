import React, { useContext, useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '../../components';

import { CartContext } from '../../context';
import { Style } from './styles';

const RedStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Style.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
)

const Home = ({ navigation, globalContext })=> {
  const { reloadUi } = globalContext
  const [cartItems, setCartItems] = useState([]);
  const { getCart, sumQtd, removeQtd, removeFromCart } = useContext(CartContext);
  
  const callContext = async () => {
    const result = await getCart()
    setCartItems(result)
  }

  useEffect(()=> {
    callContext()
  }, [])

  const amountValue = cartItems.reduce((val, current) => (val + current.price * current.qtd), 0)

  const realodUiPage = async () => {
    if (reloadUi)
      await reloadUi('topRight')
    
    await callContext()
  }

  const handleSumQtd = async (product) => {
    await sumQtd(product)
    realodUiPage()
  }

  const handleRemoveQtd = async (product) => {
    await removeQtd(product)
    realodUiPage()
  }

  const handleRemoveProduct = async (item) => {
    await removeFromCart(item)
    realodUiPage()
  }

  return (
    <View style={Style.Container}>
      {/* <RedStatusBar backgroundColor='#FE001E' barStyle='light-content' /> */}
        {/* <View style={Style.Header}>
         <TouchableOpacity style={{paddingHorizontal: 8, paddingVertical: 5, borderColor: '#F4F4F5', borderWidth: 1, borderRadius: 20}}>
          <Image source={require('../../assets/chevronPrev.png')} style={{width: 7.5, height: 15}}/>
         </TouchableOpacity>
          <Text style={Style.Title}>
            Meu Carrinho
          </Text>
          <TouchableOpacity style={{ padding: 5}}>
            <Image source={require('../../assets/notify.png')} style={{width: 18, height: 20}}/>
          </TouchableOpacity>
        </View> */}

        <View style={Style.Content}>
          <Text style={Style.Info}>
            3 Itens
          </Text>
          <ScrollView>
            {cartItems.map((item, index) => (
              <View key={index} style={Style.CardContent}>
                <View style={Style.ImageContent}>
                  <Image style={Style.Image} source={require(`../../assets/${item.image}`)} />
                </View>

                <View style={{display: 'flex'}}>
                  <View style={Style.ContentWhithTrashBtn}>

                    <View style={Style.ProductContent}>
                      <Text style={Style.ProductName}>{item.name}</Text>
                      <Text style={Style.ProductDetail}>{item.detail}</Text>
                    </View>
                  
                    <TouchableOpacity onPress={() => handleRemoveProduct(item)}>
                      <Ionicons name="trash-outline" size={20} style={Style.ButtonTrash} />
                    </TouchableOpacity>
                  </View>

                  <View style={Style.ContentValues}>
                    <View style={Style.ContentAdd}>
                      <TouchableOpacity style={Style.ButtonSub} onPress={() => handleRemoveQtd(item)}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text>{item.qtd}</Text>
                      <TouchableOpacity style={Style.ButtonSub} onPress={() => handleSumQtd(item)}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={Style.TextValue}>R$ {item.price * item.qtd},00</Text>
                  </View>

                </View>
              </View>
            ))}
          </ScrollView>
          

          <View>
            <Text style={{color: '#1E1E1E', fontWeight: '600', fontSize: 16, marginVertical: 10 }}>Cupom</Text>
            <TextInput 
              style={{backgroundColor: '#f4f4f5', padding: 12, borderRadius: 5, fontSize: 14}} 
              placeholder='Insira seu cupom' 
              placeholderTextColor='#6C6C6C' 
            />

            <Text style={{color: '#1E1E1E', fontSize: 18, fontWeight: '600', marginBottom: 10, marginTop: 27}}>RESUMO DO PEDIDO</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#71717A', fontWeight: '500'}}>Subtotal</Text>
              <Text style={{color: '#71717A', fontWeight: '500'}}>R$ {amountValue},00</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#71717A', fontWeight: '500'}}>Desconto</Text>
              <Text style={{color: '#71717A', fontWeight: '500'}}>R$ 0,00</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#71717A', fontWeight: '500'}}>Frete</Text>
              <Text style={{color: '#71717A', fontWeight: '500'}}>Grátis</Text>
            </View>
          </View>
          
        </View>
        <View style={{width: '100%', height: 2, backgroundColor: '#FE001E'}}/>
        <View style={{padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View>
            <Text style={{color: '#71717A', fontSize: 14, fontWeight: '500'}}>Total</Text>
            <Text style={{color: '#27272A', fontSize: 18, fontWeight: '700'}}>R$ {amountValue},00</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('paymentMethod')} 
            style={{backgroundColor: '#FE001E', padding: 15, borderRadius: 5}}
          >
            <Text style={{color: '#F4F4F5', fontSize: 18, fontWeight: '700'}}>Finalizar compra</Text>
          </TouchableOpacity>

        </View>
    </View>
  )

}

export default Home