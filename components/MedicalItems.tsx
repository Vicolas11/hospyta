import { View, Text, Image, StyleSheet } from "react-native";
import { moderateScale } from "@/utils/proportional.util";
import { IMedData } from "@/interfaces";

export default function MedicalItems({ item }: { item: IMedData[] }) {
  return (
    <>
      {item.map((item, index) => (
        <View key={index} style={[styles.container, { marginLeft: item.tag ? 15 : 0 }]}>
          {item.tag && (
            <View style={styles.tag}>
              <Text style={styles.txtTag}>{item.tag}</Text>
            </View>
          )}
          <View style={styles.imgContainer}>
            <Image source={item.image} style={styles.img} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 142,
    height: 190,
    rowGap: 6,
    position: "relative",
  },
  tag: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: -8,
    width: 55,
    height: 19,
    borderRadius: 4,
    zIndex: 2,
    backgroundColor: "#000",
  },
  txtTag: {
    color: "#fff",
    fontFamily: "GothamPro",
    fontSize: moderateScale(10),
    fontWeight: "400",
    lineHeight: 9.57,
    textAlign: "center",
  },
  imgContainer: {
    width: 118,
    height: 118,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontFamily: "GothamPro",
    fontSize: moderateScale(10),
    fontWeight: "400",
    textAlign: "left",
  },
  price: {
    fontFamily: "GothamPro",
    fontSize: moderateScale(12),
    fontWeight: "700",
    textAlign: "left",
  },
});
