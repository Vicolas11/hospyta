import { RouteProp, ParamListBase } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

export interface IMedData {
  image: any;
  title: string;
  price: string;
  tag?: string;
}

export interface ICarousel {
  renderItems: React.JSX.Element;
  arrayLength: number;
  hideDots?: boolean;
}

export interface ITabIcon {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
}

export interface IDrawerIconData {
  title: string;
  name: string;
  drawerIcon: (props: {
    color: string;
    size: number;
    focused: boolean;
  }) => React.ReactNode;
}

export interface InputType {
  placeHolder: string;
  isPasswordInput?: boolean;
  Icon: React.ReactNode;
}

export interface ICustomButton {
  title: string | React.ReactElement;
  onPress: () => void;
  isOutline?: boolean;
  xtraStyle?: StyleProp<ViewStyle>;
}