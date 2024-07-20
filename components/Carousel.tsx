import { Colors } from "@/constants/Colors";
import { ICarousel } from "@/interfaces";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

export default function Carousel({
  renderItems,
  arrayLength,
  hideDots = true,
}: ICarousel) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const x = event.nativeEvent.contentOffset.x;
          const index = Math.floor(x / (width - 60));
          if (index !== activeIndex) {
            setActiveIndex(index);
          }
        }}
        // scrollEventThrottle={16}
      >
        {renderItems}
      </ScrollView>
      {hideDots && (
        <View style={styles.dotContainer}>
          {Array.from({ length: arrayLength }).map((_, index) => (
            <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      index === activeIndex
                        ? Colors.dotActiveColor
                        : Colors.dotInactiveColor,
                  },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    textAlign: "center",
  },
  dotContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    margin: 5,
  },
});
