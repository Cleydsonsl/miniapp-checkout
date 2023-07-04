import { Platform, StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  statusBar: {
    height: statusBarHeight,
  },
  AppBar: {
    backgroundColor: '#FE001E',
    height: appBarHeight,
  },
  Header: {
    width: '100%',
    height: 70,
    backgroundColor: '#FE001E',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 30
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4F4F5'
  },
  Content: {
    width: '100%',
    padding: 25,
    alignItems: "center",
  },
  ContentButtonsPayments: {
    width: '100%',
    backgroundColor: '#F4F4F5',
    borderRadius: 5,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20
  },

  contentPaymentCard: {
    marginHorizontal: 20
  },

  AddingCardPaymentBtn: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: '#EF001E',
    paddingHorizontal: 18,
    paddingVertical: 8,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },

  Inputs: {
    backgroundColor:'#f4f4f5', 
    padding: 12, 
    borderRadius: 5, 
    fontSize: 14
  },
  Labels: {
    color: '#1E1E1E', 
    fontWeight: '600', 
    fontSize: 16, 
    marginVertical: 10 
  },
})