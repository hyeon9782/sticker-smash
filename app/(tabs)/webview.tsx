import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { Alert, StyleSheet } from "react-native";
import { useRef } from "react";

export default function WebviewScreen() {
  const webviewRef = useRef(null);

  const sendMessageToWeb = () => {
    const message = "Hello from App!";
    const script = `window.postMessage('${message}', '*');`;
    webviewRef.current.injectJavaScript(script);
  };
  const handleMessage = (event) => {
    const message = event.nativeEvent.data;
    Alert.alert("Message from Web", message);
  };
  return (
    <WebView
      ref={webviewRef}
      style={styles.container}
      source={{ uri: "https://expo.dev" }}
      onMessage={handleMessage}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
