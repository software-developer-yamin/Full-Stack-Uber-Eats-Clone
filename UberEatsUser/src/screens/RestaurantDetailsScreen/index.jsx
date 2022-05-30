import { FlatList, Pressable, View } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route?.params;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.icon}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
