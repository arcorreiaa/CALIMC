import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  console.log(props);
  return (
    <View style={styles.contextImc}>
      <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
      <Text style={styles.resultImc}>{props.resultImc}</Text>
    </View>
  );
}
