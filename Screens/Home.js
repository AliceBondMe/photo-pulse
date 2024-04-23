import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import PostsSVG from "../assets/icons/PostsSvg";
import AddPostSVG from "../assets/icons/AddPostSvg";
import ProfileSVG from "../assets/icons/ProfileSvg";

const TabBarComponent = (props) => <BottomTabBar {...props} />;

const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        labelStyle: {
          fontSize: 17,
          fontFamily: "Roboto-Medium",
        },
        tabBarStyle: {
          height: 83,
          marginBottom: 34,
        },
        tabBarIcon: () => {
          if (route.name === "Публікації") return <PostsSVG />;
          if (route.name === "Створити публікацію") return <AddPostSVG />;
          if (route.name === "Profile") return <ProfileSVG />;
        },
      })}
    >
      <Tabs.Screen name="Публікації" component={PostsScreen} />
      <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
