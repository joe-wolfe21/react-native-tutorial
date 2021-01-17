import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});

const AppBarTab = ({ text, url }) => (
  <Link to={url} component={TouchableWithoutFeedback}>
    <View>
      <Text style={styles.header}>{text}</Text>
    </View>
  </Link>
);

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Sign in" url="/login" />
      <AppBarTab text="Repositories" url="/" />
    </View>
  );
};

export default AppBar;
