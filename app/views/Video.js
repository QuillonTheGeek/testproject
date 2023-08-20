import { useState, useEffect } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Image,
} from "react-native-render-html";
import { FlatList } from "react-native";
import { error } from "console";

//component used as FlatList to display each video in the list
const TubeItem = (props) => {
  // this item will be passed to the Tubeitem to enable navigation to each selected vid
  const videoChoice = () => {
    props.chooseVid(props.id);
  };

  return (
    <TouchableWithoutFeedback onPress={videoChoice}>
      <View
        style={{
          paddingTop: 20,
          alignItems: "center",
          borderTopColor: "#000000",
          borderTopWidth: 2,
        }}
      >
        //for the default thumbnail return my YT
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: props.imageSrc }}
        />
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Video = ({ navigation }) => {
  const [listLoaded, setListLoaded] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const getVids = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=hdcamerapictures&type=video&key=AIzaSyAR0q5VqbMOfjk7gfP92QO_UQDLGx0Jz7c"
      );
      const vids = await response.json();
      // take the responses and put them in an array
      setVideoList(Array.from(vids.items));
    } catch (error) {
      console.log(error);
    } finally {
      setListLoaded(true);
    }
  };

  useEffect(() => {
    getVids();
  }, []);

  // passes to the TubeItem a func that allows navigation to the video details
  const selectVid = (vidID) => {
    navigation.navigate("VideoDetail", { vidId: vidID });
  };
  return (
    <View>
      {listLoaded && (
        <View style={{ paddingTop: 30 }}>
          <FlatList
            data={videoList}
            renderItem={(item) => (
              <TubeItem
                id={item.id}
                title={item.snippet.title}
                imageSrc={item.snippet.thumbnail.high.url}
                chooseVid={selectVid}
              />
            )}
          />
        </View>
      )}
      {!listLoaded && (
        <View style={{ paddingTop: 30 }}>
          <Text>LOADING!!!</Text>
        </View>
      )}
    </View>
  );
};
export default video;
