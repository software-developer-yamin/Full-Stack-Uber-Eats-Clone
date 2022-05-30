import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>Your Items</Text>
      <View style={styles.separator} />
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>Create Order</Text>
      </Pressable>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, // temporary fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    fontSize: 19,
    marginTop: 20,
    color: "#525252",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: "yellow",
    padding: 15,
    marginTop: "auto",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
});
