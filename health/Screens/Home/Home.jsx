import React, { useContext, useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../components/pallets";
import Text from "../../components/Text";
import useHeaderHeight from "../../hooks/getHeight";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { db, storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { collection, doc, getDocs, query, where } from "@firebase/firestore";
import { AuthenticatedUserContext } from "../../provider/authProvider";
import { Video } from "expo-av";
import { Dimensions } from "react-native";

// import { VideoThumbnails } from "expo-video-thumbnails";

const Home = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { insets } = useHeaderHeight();
  const [videos, setVideos] = useState([]);
  const { height } = Dimensions.get("window");

  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    try {
      const storageRef = ref(storage, `video/${user.uid}`);
      const listResult = await listAll(storageRef);
      const videoUrls = [];
      for (const itemRef of listResult.items) {
        const downloadURL = await getDownloadURL(itemRef);
        videoUrls.push({ url: downloadURL });
      }
      setVideos(videoUrls);
      // console.log(videoUrls, "videos fetched");
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleVideoPress(item.url)}>
      <View style={{ marginVertical: 10 }}>
        <Video
          source={{ uri: item.url }}
          style={{ width: "100%", height: 200, paddingHorizontal: 24 }}
          useNativeControls={true}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );

  const handleVideoPress = (videoUrl) => {
    // Open the video to be played
    console.log("Video clicked:", videoUrl);
    // You can add navigation logic here to navigate to a screen where the video is played
  };
  return (
    <View>
      <View style={{ height: insets.top }} />
      <View style={styles.container}>
        <Header />
      </View>
      <View>
        <FlatList
          style={{ height: height / 1.3 }}
          data={videos}
          ListHeaderComponent={
            <View style={{ paddingHorizontal: 24 }}>
              <Text style={{ marginTop: 40 }} fontWeight="700">
                Videos
              </Text>
            </View>
          }
          ListFooterComponent={<View style={{ width: 16 }} />}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.url}
          horizontal={false} // Set to true if you want the videos to be displayed horizontally
        />
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
