import { Dimensions } from "react-native";

export const proportionHeight = (distance: number) => {
  const { height: screenHeight } = Dimensions.get("window");
  const proportionateDistance = (screenHeight / 812) * distance;
  return proportionateDistance;
};

export const proportionWidth = (distance: number) => {
  const { width: screenWidth } = Dimensions.get("window");
  const proportionateDistance = (screenWidth / 375) * distance;
  return proportionateDistance;
};
