import { useState } from "react";
import { TextInput } from "react-native";

export const FocusingInput = ({
  placeholder,
  onChangeText,
  style,
  autoComplete = "off",
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      placeholder={placeholder}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={[style, isFocused ? { borderColor: "#FF6C00" } : null]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
