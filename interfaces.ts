import { RouteProp, ParamListBase } from "@react-navigation/native";

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
