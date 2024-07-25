import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const proportionHeight = (distance: number) => {
  const proportionateDistance = (height / guidelineBaseHeight) * distance;
  return proportionateDistance;
};

export const proportionWidth = (distance: number) => {
  const proportionateDistance = (width / guidelineBaseWidth) * distance;
  return proportionateDistance;
};

const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
