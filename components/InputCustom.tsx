import { CustomInputProps } from "@/type";
import React from "react";
import { Text, View } from "react-native";

const InputCustom = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  return (
    <View>
      <Text>InputCustom</Text>
    </View>
  );
};

export default InputCustom;
