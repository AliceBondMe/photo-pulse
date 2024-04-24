import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraSVG from "../assets/icons/CameraSvg";

const CreatePostsScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);
  const [photoTitle, setPhotoTitle] = useState("");

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setCapturedPhotoUri(uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrapper}>
        {capturedPhotoUri ? (
          <Image
            source={{ uri: capturedPhotoUri }}
            style={styles.capturedPhoto}
          />
        ) : (
          <Camera style={styles.camera} type="back" ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity onPress={handleTakePhoto}>
                <View style={styles.takePhotoOut}>
                  <CameraSVG color="#BDBDBD" />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setCapturedPhotoUri(null)}
      >
        <Text style={styles.editPhotoText}>
          {capturedPhotoUri ? "Редагувати фото" : "Завантажити фото"}
        </Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Назва..."
        onChangeText={setPhotoTitle}
        style={styles.titleInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
  },
  cameraWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
  },
  camera: {
    width: Dimensions.get("window").width - 32,
    height: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  photoView: {
    backgroundColor: "transparent",
  },
  takePhotoOut: {
    backgroundColor: "white",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  capturedPhoto: {
    width: Dimensions.get("window").width - 32,
    height: 240,
    resizeMode: "cover",
  },
  editButton: {
    alignSelf: "flex-start",
    marginBottom: 32,
  },
  editPhotoText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "left",
  },
  titleInput: {
    width: Dimensions.get("window").width - 32,
    alignSelf: "flex-start",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "left",
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
});
export default CreatePostsScreen;
