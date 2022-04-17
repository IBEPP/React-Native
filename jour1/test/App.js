import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
  },

  con: {
    backgroundColor: "white",
  },

  text1: {
    fontSize: 30,
    marginTop: 80,
    marginBottom: 80,
  },

  text2: {
    textAlign: "center",
    marginTop: 80,
    marginBottom: 80,
  },

  text3: {
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 80,
  },

  image: {
    height: 18,
    width: 60,
  },

  button: {
    backgroundColor: "white",
  },
});

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.con}>
        <Text style={styles.text1}> Hello </Text>
        <Text style={styles.text2}> Hola </Text>
        <Text style={styles.text3}> Salut </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
        }}
      />
      <Image
        style={styles.image}
        source={require("./image/konexio-logo_1.png")}
      />
      <Pressable onPress={() => alert("hello")}>
        <Text style={styles.button}> Clikez ici </Text>
      </Pressable>
      <ActivityIndicator />
    </ScrollView>
  );
};

export default App;
