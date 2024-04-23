import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BgImage from "../assets/images/background.jpg";
import { globalStyles } from "../assets/GlobalStyles";
import { useState } from "react";
import { FocusingInput } from "../components/FocusingInput";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () => {
    console.log("Email: ", email, "Password: ", password);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={BgImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.loginContainer}>
          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.loginText}>Увійти</Text>
            <FocusingInput
              placeholder="Адреса електронної пошти"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={setEmail}
              style={[styles.input]}
            />
            <View>
              <FocusingInput
                placeholder="Пароль"
                autoComplete="password"
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                style={styles.input}
              />
              <TouchableOpacity
                style={styles.showPassBtn}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Text style={styles.registerText}>
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logButton} onPress={onLogin}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Registration")}>
              <Text style={styles.registerText}>
                Немає акаунту? &nbsp;
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </Text>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 489,
    paddingTop: 32,
    paddingBottom: 68,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formWrapper: {
    display: "flex",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    color: "#BDBDBD",
    ...globalStyles.text,
  },
  logButton: {
    display: "flex",
    alignItems: "center",
    width: 343,
    height: 51,
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    ...globalStyles.text,
    color: "#ffffff",
  },
  registerText: {
    ...globalStyles.text,
    color: "#1B4371",
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 15,
  },
});

export default LoginScreen;
