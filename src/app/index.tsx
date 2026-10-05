import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "Hello Github Actions";
  return (
    <View style={styles.container}>
      <Text>Message: {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
