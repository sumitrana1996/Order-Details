import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Order Details</Text>
      <View style={styles.productDetails}>
        <View style={styles.imageHolder}>
          <Image
            source={{
              uri:
                "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/722561e6b86eafb7fc5017da6c3e18791453fc29df5b6f08ad40d15917e89937.png"
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            SKULL CANDY Wireless Headphones
          </Text>
          <Text style={styles.productPrice}>$1000.00</Text>
        </View>
      </View>

      {/* Customer Info */}
      <Text style={styles.heading}>Customer Info</Text>
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>Sumit Rana</Text>
        <Text style={styles.customerPhone}>+917018073674</Text>
      </View>
      {/* Delivery Location */}
      <Text style={styles.heading}>Delivery Location</Text>
      <View style={styles.deliveryLocation}>
        <View style={styles.addressImageHolder}>
          <Image
            source={{
              uri: "https://image.pngaaa.com/328/1509328-small.png"
            }}
            style={styles.addressPointer}
          />
        </View>
        <View style={styles.addressInfo}>
          <Text style={styles.address}>Mohin, Hamirpur (H.P) - 177001</Text>
        </View>
      </View>
      {/* Order Info */}
      <Text style={styles.heading}>Order Info</Text>
      <View style={styles.pricingContainer}>
        <Text style={styles.pricing}>Subtotal</Text>
        <Text style={styles.pricing}>$900.00</Text>
      </View>
      <View style={styles.pricingContainer}>
        <Text style={styles.pricing}>Shipping Cost</Text>
        <Text style={styles.pricing}>+$100.00</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.pricing}>Total</Text>
        <Text style={styles.totalPrice}>$1000.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "24px"
  },
  heading: {
    color: "#111111",
    fontWeight: "bold",
    fontFamily: "monospace",
    marginTop: 30,
    fontSize: 18
  },
  productImage: {
    height: 100,
    width: 100
  },
  productDetails: {
    paddingVertical: 20,
    flexDirection: "row"
  },
  imageHolder: {
    backgroundColor: "#ccc",
    width: 100,
    borderRadius: 10
  },
  productInfo: {
    paddingHorizontal: 20,
    flexDirection: "column"
  },
  productTitle: {
    color: "#111111",
    fontWeight: "600",
    width: 200,
    fontFamily: "monospace"
  },
  productPrice: {
    color: "#ccc",
    paddingVertical: 10,
    fontFamily: "monospace"
  },
  customerInfo: {
    flexDirection: "column",
    paddingVertical: 20
  },
  customerName: {
    fontWeight: "600"
  },
  customerPhone: {
    paddingVertical: 10
  },
  deliveryLocation: {
    flexDirection: "row",
    paddingVertical: 20
  },
  addressImageHolder: {
    backgroundColor: "#ccc",
    width: 30,
    height: 30,
    borderRadius: 5
  },
  addressPointer: {
    width: 30,
    height: 30
  },
  addressInfo: {
    paddingHorizontal: 20,
    flexDirection: "column"
  },
  address: {
    color: "#111111",
    fontWeight: "600",
    fontFamily: "monospace"
  },
  pricingContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  totalContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pricing: {
    color: "#ccc"
  },
  totalPrice: {
    fontWeight: "600"
  }
});

export default App;
