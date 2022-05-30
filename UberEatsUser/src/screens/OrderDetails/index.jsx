import { FlatList } from "react-native";
import React from "react";
import OrderDetailsHeader from "./OrderDetailsHeader";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useRoute } from "@react-navigation/native";

const { dishes } = restaurants[0];

const OrderDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  console.warn(id);

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader />}
      data={dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
