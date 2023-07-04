import { Text, TouchableOpacity } from "react-native";
import { Styles } from './styles';
import { useState } from "react";


export const BtnOptionsPayment = ({ text }) => {
  const [isActive, setIsActive] = useState(false);
  const [isColor, setIsColor] = useState('null');

  const handleClick = () => {
    if(isActive) {
      setIsColor(null);
      setIsActive(false);
    } else {
      setIsColor('#FFF');
      setIsActive(true)
    }
  }

  return (
    <TouchableOpacity
      style={[Styles.Container, isColor && { backgroundColor: isColor }, isActive && Styles.selectButton]}
      onPress={handleClick}
    >
      <Text
        style={[Styles.Text, isActive ? Styles.TextSelect : Styles.TextUnselect]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}