
import Home from './Home';
import CompletePurchase from './CompletePurchase';
import PaymentMethod from './PaymentMethod';

const Screens = [
  { id: 'home', label: 'home', component: Home, initial: true },
  { id: 'paymentMethod', label: 'Forma de pagamento', component: PaymentMethod },
  { id: 'completePurchase', label: 'compra finalizada', component: CompletePurchase },
]

export default Screens