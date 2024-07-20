import { View, Text, StyleSheet, Image } from "react-native";
import { newsFeedData } from "@/data/main.data";
import { Colors } from "@/constants/Colors";

export default function NewsFeedItems() {
  return (
    <>
      {newsFeedData.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={item.image} />
          </View>
          <View style={{ width: "auto", flex: 1 }}>
            <Text style={styles.txtTitle}>{item.title}</Text>
            <Text style={styles.txtSubTitle}>{item.subTitle}</Text>
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 14,
    width: "auto",
    marginBottom: 15,
  },
  imgContainer: {},
  img: {
    width: 98,
    height: 98,
    borderRadius: 10,
  },
  txtTitle: {
    marginVertical: 8,
    fontFamily: "Gilroy",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: -0.011428571306169033,
    textAlign: "left",
    color: Colors.color10,
  },
  txtSubTitle: {
    fontFamily: "GothamPro",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 17.23,
    textAlign: "left",
  },
});
