import {SafeAreaView} from "react-native";
import WebView from "react-native-webview";

type WebViewScreenProps = {
  url: string
}

export function WebViewScreen({url}: WebViewScreenProps) {
  return <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
    <WebView
      source={{uri: url}}
    />
  </SafeAreaView>
}
