import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import { StyleSheet, Text } from "react-native";
import { registerUserAsync, loginUserAsync } from "../redux/user/user.actions";
import { Surface, TextInput, Button, HelperText } from "react-native-paper";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isIncorrectDetails, setIsIncorrectDetails] = useState(false);

  const dispatch = useDispatch();

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const emailInvalid = reg.test(email) === false || email.length <= 0;

  const registerErrMsg = useSelector((state) => state.user.loginErrMsg);

  return (
    <Surface style={styles.container}>
      <Text style={styles.headline}>Register</Text>

      <Surface style={styles.inputs}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(name) => {
            setName(name);
            // setIsIncorrectDetails(false);
            setIsInvalidName(false);
          }}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          onBlur={() => {
            name.length <= 0 ? setIsInvalidName(true) : setIsInvalidName(false);
          }}
        />
        <HelperText type="error" visible={isInvalidName}>
          Name cannot be blank
        </HelperText>

        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
            // setIsIncorrectDetails(false);
          }}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          onBlur={() => {
            reg.test(email) === false || email.length <= 0
              ? setIsInvalidEmail(true)
              : setIsInvalidEmail(false);
          }}
        />
        <HelperText type="error" visible={isInvalidEmail}>
          Email address is invalid!
        </HelperText>

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
          onChangeText={(email) => {
            setPassword(email);
            // setIsIncorrectDetails(false);
          }}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          secureTextEntry={isPasswordHidden ? true : false}
          onBlur={() => {
            name.length <= 0
              ? setIsInvalidPassword(true)
              : setIsInvalidPassword(false);
          }}
        />
        <HelperText type="error" visible={isInvalidPassword}>
          Password cannot be empty
        </HelperText>

        <Button
          mode="contained"
          onPress={() => {
            dispatch(registerUserAsync(name, email, password));
          }}
          color={Colors.primary}
          labelStyle={{ fontFamily: "lexendDeca" }}
          disabled={emailInvalid || password.length <= 0 || name.length <= 0}
        >
          Register
        </Button>
        <HelperText type="error" visible={!registerErrMsg}>
          Something went wrong!
        </HelperText>
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
