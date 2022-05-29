import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Header = ({
  restaurant: { image, name, deliveryFee, maxDeliveryTime, minDeliveryTime },
}) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>
          ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default Header;
