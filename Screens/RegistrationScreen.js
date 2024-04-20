import {
  Image,
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
import AddSVG from "../components/AddSvg";

const RegistrationScreen = () => {
  return (
    <ImageBackground source={BgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.regContainer}>
        <Text style={styles.regText}>Реєстрація</Text>
        <TextInput placeholder="Логін" style={styles.input}></TextInput>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Пароль" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.regButton}>
          <Text style={styles.buttonText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Pressable>
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
  );
};

const styles = StyleSheet.create({
  regContainer: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 549,
    paddingTop: 92,
    paddingBottom: 68,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    color: "#BDBDBD",
    ...globalStyles.text,
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
});

export default RegistrationScreen;
