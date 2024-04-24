import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import PostsSVG from "../assets/icons/PostsSvg";
import AddPostSVG from "../assets/icons/AddPostSvg";
import ProfileSVG from "../assets/icons/ProfileSvg";
import LogoutSVG from "../assets/icons/LogoutSvg";
import BackSVG from "../assets/icons/BackSvg";

const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <LogoutSVG />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <BackSVG />
          </TouchableOpacity>
        ),
        tabBarStyle: {
          height: 83,
        },
        tabBarIcon: () => {
          if (route.name === "Публікації")
            return (
              <View style={{ marginTop: -24, marginRight: -80 }}>
                <PostsSVG />
              </View>
            );
          if (route.name === "Створити публікацію")
            return (
              <View style={{ marginTop: -24 }}>
                <AddPostSVG />
              </View>
            );
          if (route.name === "Profile")
            return (
              <View style={{ marginTop: -24, marginLeft: -80 }}>
                <ProfileSVG />
              </View>
            );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name="Публікації" component={PostsScreen} />
      <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
