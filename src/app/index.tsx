import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "Hello Github Actions";
  useEffect(() => {
    if (Math.random() > 0.5) {
      console.log("Over 50%");
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message: {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
    justifyContent: "center",
  },
});
