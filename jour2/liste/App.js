import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "./components/List";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Test </Text>
      <List style={styles.item} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
