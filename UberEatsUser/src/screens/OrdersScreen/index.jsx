import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrdersScreen = () => {
  return (
    <View style={styles.page} >
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 30,
    width: "100%",
  },
});
