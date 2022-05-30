import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.quantityContainer}>
        <AntDesign
          onPress={() => quantity > 0 && setQuantity(quantity - 1)}
          name="minuscircleo"
          size={50}
          color="#FF5A5F"
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          onPress={() => setQuantity(quantity + 1)}
          name="pluscircleo"
          size={50}
          color="#FF5A5F"
        />
      </View>

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>
          Add {quantity} items to basket &#8226; $
          {(dish.price * quantity).toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, // temporary fix
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 20,
  },
  description: {
    fontSize: 15,
    color: "#525252",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 30,
    fontWeight: "600",
    marginHorizontal: 20,
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
