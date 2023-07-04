
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './context';

import Screens from './screens';
 
const App = ({ globalContext = {} }) => {
  const CheckoutStack = createNativeStackNavigator();
  
  return (
    <CartProvider>
      <NavigationContainer>
        <CheckoutStack.Navigator
        >
          {Screens.map(screen => (
            <CheckoutStack.Screen
              key={screen.id}
              name={screen.id}
              options={({ route, navigation }) => ({
                // title: route.params.userId,
                title: screen.label,
                headerShown: false
              })}
            >
              {(props) => {
                const Page = screen.component
                return <Page {...props} globalContext={globalContext} />
              }}
            </CheckoutStack.Screen>
          ))}
          
        </CheckoutStack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App;
 