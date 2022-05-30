import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order: { Restaurant, status, id } }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id })}
      style={styles.container}
    >
      <Image source={{ uri: Restaurant.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; $34.65</Text>
        <Text>2 days age &#8226; {status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
  },
});
