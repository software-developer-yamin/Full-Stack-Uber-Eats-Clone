import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from '@expo/vector-icons';

const { image, name, deliveryFee, maxDeliveryTime, minDeliveryTime, rating } =
  restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: image }} style={styles.image} />
      <Ionicons name="arrow-back-circle" size={45} color="white" style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>
          ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  icon: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  info: {
    margin: 10,
  },
  name: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252", 
  },
});
