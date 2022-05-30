import { Text, View, Image } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders";
import styles from "./styles";

const {
  Restaurant: { image, name },
  status,
} = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;
