import { View, Text, StyleSheet, Image } from "react-native";
import { IconNaira } from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import { drugData } from "@/data/main.data";

export default function DrugItem() {
  return (
    <>
      {drugData.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.section}>
            <View style={{ width: "50%" }}>
              <Text style={styles.txtDrug}>{item.drug}</Text>
              <Text style={styles.txtDesc}>{item.desc}</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <View style={styles.priceContent}>
                <IconNaira width={9.33} height={10.5} color={Colors.color8} />
                <Text style={styles.txtPrice}>{item.price}</Text>
              </View>
              <View style={[styles.priceContent, { marginTop: 5 }]}>
                <IconNaira width={9.33} height={10.5} color={Colors.color9} />
                <Text style={styles.txtPriceSlash}>{item.priceSlash}</Text>
              </View>
            </View>
          </View>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={item.image} />
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 20,
    width: 328,
    height: 329,
    maxWidth: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
    // marginHorizontal: "auto",
  },
  section: {
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-between",
    width: "100%",
  },
  txtDrug: {
    fontFamily: "GothamPro",
    fontSize: 26.73,
    fontWeight: "400",
    lineHeight: 25.58,
    letterSpacing: 0.546207070350647,
    textAlign: "left",
    color: "#fff",
  },
  txtDesc: {
    fontFamily: "GothamPro",
    fontSize: 12.55,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.24275869131088257,
    textAlign: "left",
    color: "#fff",
    marginTop: 5,
  },
  priceContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtPrice: {
    fontFamily: "GothamPro",
    fontSize: 20.55,
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0.24275869131088257,
    textAlign: "left",
    color: "#fff",
    paddingTop: 5
  },
  txtPriceSlash: {
    fontFamily: "GothamPro",
    fontSize: 13.55,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.24275869131088257,
    textAlign: "left",
    color: Colors.color7,
    textDecorationLine: "line-through",
  },
  imgContainer: {
    width: 134,
    height: 153,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
