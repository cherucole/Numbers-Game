import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>The Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameOverScreen;
