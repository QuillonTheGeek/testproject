import { useState, useEffect } from "react";
import { Text, View, FlatList, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

const BlogItem = (props) => {
  const { width } = useWindowDimensions();

  const rendererProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        props.choosePost(props.id);
      },
    },
  };

  const blogItems = {
    html: `
        <a 
        href=${props.id}
        style="
        text-decoration-line: none;
        color: #000000
        textAlign: center"
        >
        <img src=${props.imageSrc}/>
        <h1> ${props.title}<h1/>
        ${props.excerpt}
        <a/>`,
  };

  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        borderStyle: "solid",
      }}
    >
      <RenderHTML
        source={blogItems}
        renderersProps={rendererProps}
        contentWidth={width}
      />
    </View>
  );
};
