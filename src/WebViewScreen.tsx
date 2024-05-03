import {View, Text} from "react-native";

type WebViewScreenProps = {
  test: string
}

export function WebViewScreen({test}: WebViewScreenProps) {
  return <View><Text>{test}</Text></View>
}
