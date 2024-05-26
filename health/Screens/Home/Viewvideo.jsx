import React, { useContext, useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../components/pallets";
import Text from "../../components/Text";
import useHeaderHeight from "../../hooks/getHeight";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { AuthenticatedUserContext } from "../../provider/authProvider";
import { addDoc, doc, serverTimestamp } from "@firebase/firestore";
import { db, storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

const Viewvideo = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { insets } = useHeaderHeight();
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isRecording, setIsRecording] = useState(false);
  const video = React.useRef(null);
  const [recordingStartTime, setRecordingStartTime] = useState(null);
  const [recordingTimeout, setRecordingTimeout] = useState(null);

  const saveSoundAndUpdateDoc = async (writing, recordings) => {
    const timestamp = new Date().getTime(); // Generate a unique timestamp
    const filename = `video_${timestamp}.mp4`; // Construct filename with timestamp
    const path = `video/${user.uid}/${filename}`;
    const blob = await new Promise((resolve, reject) => {
      const fetchXHR = new XMLHttpRequest();
      fetchXHR.onload = function () {
        resolve(fetchXHR.response);
      };
      fetchXHR.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      fetchXHR.responseType = "blob";
      fetchXHR.open("GET", record, true);
      fetchXHR.send(null);
    }).catch((err) => console.log(err));

    const recordRef = ref(storage, path);
    const metadata = {
      contentType: "video/mp4", // Adjust content type according to your video format
    };
    await uploadBytes(recordRef, blob, metadata)
      .then(async (snapshot) => {
        const downloadURL = await getDownloadURL(recordRef).then(
          (recordURL) => {
            addDoc(doc(db, "posts"), {
              creator: user.uid,
              recordURL,
              creation: serverTimestamp(),
            })
              .then(() => {})
              .then(() => resolve())
              .catch((err) => console.log(err));
          }
        );
        blob.close();
      })
      .catch((err) => console.log(err));
  };
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

      const timeout = setTimeout(stopVideo, 60000);
      setRecordingTimeout(timeout);
    }
  };
  const IconControl = () => {
    setIsRecording(!isRecording);
  };

  const stopVideo = async () => {
    if (recordingTimeout) {
      clearTimeout(recordingTimeout);
    }
    const recordingDuration = Date.now() - recordingStartTime;
    camera.stopRecording();
    setIsRecording(false);

    if (recordingDuration < 3000) {
      Alert.alert(
        "Recording too short",
        "The video must be at least 3 seconds long."
      );
      setRecord(null);
      console.log("Video recording was too short and was discarded.");
    } else {
      await saveSoundAndUpdateDoc();
      console.log("Video stopped and saved.");
    }
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
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Camera
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
          </Camera>
        </View>
      </View>
    </View>
  );
};

export default Viewvideo;

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
