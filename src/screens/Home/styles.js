import { Platform, StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

export const Style = StyleSheet.create({
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

  Info: {
    fontSize: 12,
    fontWeight: "400",
    color: '#71717A',
    marginBottom: 5
  },

  Content: {
    width: '100%',
    padding: 25
  },

  CardContent: {
    width: '100%',
    backgroundColor: '#F4F4F5',
    padding: 8,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },

  Image: {
    height: 75,
    width: 33 
  },

  ImageContent: {
    width: 85,
    height: 85,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  ProductContent: {
    padding: 10,
    display: "flex",
  },
  ProductName: {
    fontSize: 16,
    fontWeight: "700",
    color: '#27272A'
  },

  ProductDetail: {
    fontSize: 12,
    fontWeight: "400",
    color: '#71717A'
  },

  ContentWhithTrashBtn: {
    width: '70%',
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },

  ButtonTrash: {
    paddingTop: 10,
    color: '#b0b0b0'
  },

  ButtonSub: {
    borderColor: '#FE001E', 
    borderWidth: 1, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
    paddingHorizontal: 5
  },

  ContentValues: {
    display: 'flex', 
    flexDirection: 'row'
  },

  ContentAdd: {
    marginLeft: 10, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    width: '20%'
  },

  TextValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#27272A',
    marginLeft: '32%'
  }
})