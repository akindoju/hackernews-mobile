import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import { StyleSheet, Text } from "react-native";
import { loginUserAsync, logout } from "../redux/user/user.actions";
import { Surface, TextInput, Button, HelperText } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const dispatch = useDispatch();

  const loginErrMsg = useSelector((state) => state.user.loginErrMsg);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const emailInvalid = reg.test(email) === false || email.length <= 0;

  return (
    <Surface style={styles.container}>
      <Text style={styles.headline}>Login</Text>

      <Surface style={styles.inputs}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          keyboardType="email-address"
          onBlur={() => {
            emailInvalid ? setIsInvalidEmail(true) : setIsInvalidEmail(false);
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
          }}
          mode="outlined"
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          secureTextEntry={isPasswordHidden ? true : false}
        />
        <HelperText type="info" visible={false}>
          Password is invalid!
        </HelperText>

        <Button
          mode="contained"
          color={Colors.primary}
          labelStyle={{ fontFamily: "lexendDeca" }}
          onPress={() => {
            dispatch(loginUserAsync(email, password));
          }}
          disabled={emailInvalid || password.length <= 0}
        >
          Login
        </Button>
        <HelperText type="error" visible={loginErrMsg.length}>
          Something went wrong!
        </HelperText>
      </Surface>

      <Text style={styles.text}>
        Don't have an account?{" "}
        <Text
          style={styles.register}
          onPress={() => {
            navigation.navigate("Register");
            dispatch(logout());
            setEmail("");
            setPassword("");
            setIsInvalidEmail("");
          }}
        >
          Register
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
    justifyContent: "center",
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

export default Login;
