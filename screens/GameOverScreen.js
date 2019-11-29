import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")} //loading image locally
          //   source={{
          //     uri:
          //       "https://pbs.twimg.com/profile_images/438756755397300224/kp8rmJes_400x400.jpeg" //load image from url
          //   }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 60,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
