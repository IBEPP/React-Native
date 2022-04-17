import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Pressable,
} from "react-native";

const App = () => {
  const [text, onChangeText] = React.useState();
  const [password, onChangePassword] = React.useState();
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  const [changer, setChanger] = React.useState(false);

  const test = (e) => {
    if (e.target.value.length > 6) {
      onChangePassword("error password");
      console.log("error");
    } else if (e.target.value.length === 2) {
      onChangePassword("correct password");
      console.log("error2");
    }
  };

  return (
    <SafeAreaView style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}>
      <Text style={styles.text}> LOGIN </Text>

      <TextInput
        style={styles.input}
        onChange={(e) => {
          console.log(e);
          console.log(e.target.value);
          let verification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

          if (verification.test(e.target.value) === false) {
            setEmail("Email is Not Correct");
            setChanger(false);
          } else {
            setEmail("Correct Email");
            setChanger(true);
          }
        }}
        value={text}
        placeholder="  entrez votre nom d'utilisateur s'il vous plaît"
      />
      <Text> {email} </Text>
      {/**************************************** Partie Mot De Passe *********************************************/}
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        onChange={test}
        placeholder="  entrez votre mot de passe s'il vous plait"
      />
      <Text> {password} </Text>

      <Button
        onPress={() =>
          test == true
            ? alert("Vos Informations sont bien prises en compte")
            : alert("Error")
        }
        style={styles.button}
        title="login"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
  },

  emailError: {
    borderColor: "red",
  },

  emailCorrect: {
    borderColor: "green",
  },
});

export default App;
