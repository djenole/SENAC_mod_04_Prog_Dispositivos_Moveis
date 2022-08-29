import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  const onPressButton = () => {
    setTitleText("Bird's Nest");
  };

  return (
    <View style={styles.view}>
      <Text>
    
        <Text style={styles.baseText}  onPress={onPressButton}>
          <Text style={styles.titleText} >
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>

        <Button title="Press me"  onPress={onPressTitle} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "sans-serif"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  view: {
    padding: 100
  }
});

export default TextInANest;