import { View, StyleSheet, Image } from "react-native";
import { communityFeedData } from "@/data/main.data";

export default function CommunityFeedItems() {
  return (
    <>
      {communityFeedData.map((img, index) => (
        <View key={index} style={styles.imgContainer}>
          <Image style={styles.img} source={img} />
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: 260,
    height: 140,
    overflow: "hidden",    
    marginRight: 18,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 15,
  },
});
