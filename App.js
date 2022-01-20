import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Main from "./src/components/Main/";
import ResultImc from "./src/components/Form/ResultImc";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 80,
  },
});
