import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  attribute: {
    fontSize: 16,
    color: "#ffffff",
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => (
  <View style={styles.item}>
    <Text style={styles.attribute}>{fullName}</Text>
    <Text style={styles.attribute}>{description}</Text>
    <Text style={styles.attribute}>{language}</Text>
    <Text style={styles.attribute}>{forksCount}</Text>
    <Text style={styles.attribute}>{stargazersCount}</Text>
    <Text style={styles.attribute}>{ratingAverage}</Text>
    <Text style={styles.attribute}>{reviewCount}</Text>
    <Text style={styles.attribute}>{ownerAvatarUrl}</Text>
  </View>
);

export default RepositoryItem;
