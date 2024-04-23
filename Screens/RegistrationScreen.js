import {
  Image,
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
import AddSVG from "../assets/icons/AddSvg";
import { useState } from "react";
import { FocusingInput } from "../components/FocusingInput";

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onRegister = () => {
    console.log("Username: ", name, "Email: ", email, "Password: ", password);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={BgImage} style={styles.container}>
        <View style={styles.regContainer}>
          <Text style={styles.regText}>Реєстрація</Text>
          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <FocusingInput
              placeholder="Логін"
              onChangeText={setName}
              style={styles.input}
            />
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
                <Text style={styles.loginText}>
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.regButton} onPress={onRegister}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
          </Pressable>

          <View style={styles.avatarContainer}>
            <Pressable style={styles.addBtn}>
              <AddSVG />
              <Image source={require("../assets/images/add.svg")} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  regContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 92,
    paddingBottom: 68,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formWrapper: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  regText: {
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
    ...globalStyles.text,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  regButton: {
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
  loginText: {
    ...globalStyles.text,
    color: "#1B4371",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addBtn: {
    position: "absolute",
    top: 81,
    right: -12,
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 15,
  },
});

export default RegistrationScreen;
