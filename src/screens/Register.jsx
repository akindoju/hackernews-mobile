import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Surface, Headline, TextInput, Button } from "react-native-paper";
import { Colors } from "../constants/Colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Surface style={styles.container}>
      <Text style={styles.headline}>Register</Text>

      <Surface style={styles.inputs}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
        />

        <TextInput
          right={<TextInput.Icon name="eye" />}
          label="Password"
          value={password}
          onChangeText={(email) => setPassword(email)}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
        />

        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          color={Colors.primary}
        >
          Register
        </Button>
      </Surface>

      <Text style={styles.text}>
        Don't have an account? <Text style={styles.register}>Register</Text>
      </Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    padding: 20,
  },

  headline: {
    fontFamily: "lexendDeca",
    fontSize: 50,
    color: Colors.primary,
    textAlign: "center",
  },

  inputs: {
    justifyContent: "space-around",
    height: 200,
  },

  text: {
    fontFamily: "lexendDeca",
    fontSize: 15,
    textAlign: "center",
  },

  register: {
    color: Colors.primary,
  },
});

export default Register;
