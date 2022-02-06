import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import { StyleSheet, Text } from "react-native";
import { registerUserAsync } from "../redux/user/user.actions";
import { Surface, TextInput, Button, HelperText } from "react-native-paper";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const dispatch = useDispatch();

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return (
    <Surface style={styles.container}>
      <Text style={styles.headline}>Register</Text>

      <Surface style={styles.inputs}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          onBlur={() => {
            reg.test(email) === false || email.length <= 0
              ? setIsInvalidEmail(true)
              : setIsInvalidEmail(false);
          }}
        />

        <TextInput
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => {
                setIsPasswordHidden(!isPasswordHidden);
              }}
            />
          }
          label="Password"
          value={password}
          onChangeText={(email) => setPassword(email)}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          secureTextEntry={isPasswordHidden ? true : false}
        />
        <HelperText type="info" visible={false}>
          &nbsp;
        </HelperText>

        <Button
          mode="contained"
          onPress={() => {
            dispatch(registerUserAsync(name, email, password));
          }}
          color={Colors.primary}
          labelStyle={{ fontFamily: "lexendDeca" }}
        >
          Register
        </Button>
      </Surface>

      <Text style={styles.text}>
        Already have an account?{" "}
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
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
    justifyContent: "space-between",
    height: 300,
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
