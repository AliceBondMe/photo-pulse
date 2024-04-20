import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BgImage from "../assets/images/background.jpg";
import { globalStyles } from "../assets/GlobalStyles";

const LoginScreen = () => {
  return (
    <ImageBackground source={BgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Увійти</Text>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Пароль" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Pressable>
          <Text style={styles.registerText}>
            Немає акаунту? &nbsp;
            <Text style={{ textDecorationLine: "underline" }}>
              Зареєструватися
            </Text>
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
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
});

export default LoginScreen;
