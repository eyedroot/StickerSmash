import Ionicons from "@expo/vector-icons/Ionicons";
import {Pressable, StyleSheet} from "react-native";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type CheckboxProps = {
  onChange: (prevState: boolean) => void;
  checked: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  activeButtonStyle?: StyleProp<ViewStyle>;
  inactiveButtonStyle?: StyleProp<ViewStyle>;
  activeIconProps?: object;
  inactiveIconProps?: object;
}

export default function Checkbox({
  onChange,
  checked = false,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}: CheckboxProps) {
  const iconProps = checked ? activeIconProps : inactiveIconProps;

  return (
    <Pressable
      style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}
      onPress={() => onChange(checked)}
    >
      {checked && <Ionicons name="checkmark" size={24} color="white" {...iconProps} />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  }
});