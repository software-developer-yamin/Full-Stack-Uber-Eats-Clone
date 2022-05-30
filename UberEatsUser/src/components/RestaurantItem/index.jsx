import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({
  restaurant: {
    image,
    name,
    deliveryFee,
    maxDeliveryTime,
    minDeliveryTime,
    rating,
    id,
  },
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id });
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantItem}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.restaurantImage}
      />
      <View style={styles.restaurantContent}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantItem: {
    width: "100%",
    marginVertical: 10,
  },
  restaurantImage: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  restaurantContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    backgroundColor: "lightgray",
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
