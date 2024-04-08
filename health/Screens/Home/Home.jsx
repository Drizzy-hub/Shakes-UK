import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../components/pallets";
import Text from "../../components/Text";
import useHeaderHeight from "../../hooks/getHeight";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";

const Home = () => {
  const navigation = useNavigation();
  const { insets } = useHeaderHeight();
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isRecording, setIsRecording] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);
  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({});
      setRecord(data.uri);
      console.log(data.uri);
    }
  };
  const IconControl = () => {
    setIsRecording(!isRecording);
  };
  const stopVideo = async () => {
    camera.stopRecording();
    console.log(record);
    console.log("video stopped");
  };
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <View style={{ height: insets.top }} />
      <View style={styles.container}>
        <Header />
        <View
          style={{
            maginTop: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.camera}
            ratio={"4:3"}
            type={type}
          >
            <View style={styles.buttonContainer}>
              {isRecording ? (
                <TouchableOpacity
                  onPress={() => {
                    stopVideo();
                    IconControl();
                  }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: colors.red,
                    width: 50,
                    height: 50,
                  }}
                ></TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    takeVideo();
                    IconControl();
                  }}
                  style={{
                    borderRadius: 100,
                    backgroundColor: colors.red,
                    width: 100,
                    height: 100,
                  }}
                ></TouchableOpacity>
              )}
            </View>
          </Camera> */}
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  camera: {
    height: 400,
    width: "100%",
    // flex: 1,
  },
  buttonContainer: {
    // flex: 1,
    marginTop: 300,
    alignItems: "center",
  },
  button: {
    // flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
