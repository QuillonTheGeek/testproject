import { WebView } from "react-native-webview";

const VideoDetail = ({ route }) => {
  const { vidId } = route.params;

  let tubeUrl = `https://www.youtube.com/embed/${vidId}`;
  return (
    <WebView
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      //   source={{ uri: tubeUrl }}
      source={{
        html: `<iframe width="100%" height="100%" src="${tubeUrl}" frameborder="0" allowfullscreen></iframe>`,
      }}
    />
  );
};
export default VideoDetail;
