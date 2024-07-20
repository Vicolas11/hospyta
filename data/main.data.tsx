import {
  IconCalendar2,
  IconHome,
  IconPeople,
  IconProfile,
  IconShop,
} from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import { ParamListBase, RouteProp } from "@react-navigation/native";

const img1 = require("../assets/images/Feed3.png");
const img2 = require("../assets/images/Feed2.png");
const deviceDataImg = require("../assets/images/device.png");
const medicineDataImg1 = require("../assets/images/drug1.png");
const medicineDataImg2 = require("../assets/images/drug2.png");
const drugDataImg = require("../assets/images/amartem.png");
const feedImg1 = require("../assets/images/Feed.png");
const feedImg2 = require("../assets/images/Feed2.png");

export const appointmentData = [
  {
    backgroundColor: Colors.color,
    underLayColor: Colors.color1,
    date: {
      day: 29,
      dayOfWeek: "Tue",
      time: "2:00PM",
    },
    content1: "Pending appointment",
    content2: "Tanvir Ahmed",
    content3: "High Blood Pressure",
    timer: "0:01:20",
  },
  {
    backgroundColor: Colors.color5,
    underLayColor: Colors.color6,
    date: {
      day: 25,
      dayOfWeek: "Thu",
      time: "4:30PM",
    },
    content1: "Pending appointment",
    content2: "Yakub Mohammed",
    content3: "Cough and Catarrh",
    timer: "0:09:20",
  },
  {
    backgroundColor: Colors.color,
    underLayColor: Colors.color1,
    date: {
      day: 21,
      dayOfWeek: "Mon",
      time: "1:00PM",
    },
    content1: "Pending appointment",
    content2: "Stephen Pius",
    content3: "Hypertension",
    timer: "0:03:10",
  },
];

export const communityFeedData = [img1, img2];

export const deviceData = [
  {
    image: deviceDataImg,
    title: "Temperature checker",
    price: "N5,000",
  },
  {
    image: deviceDataImg,
    title: "Statoscope",
    price: "N15,000",
  },
  {
    image: deviceDataImg,
    title: "Toothache Soothe Med",
    price: "N15,000",
  },
];

export const medicineData = [
  {
    image: medicineDataImg1,
    title: "Panadol (50mg) 200ta.",
    price: "N5,000",
    tag: "46% off",
  },
  {
    image: medicineDataImg2,
    title: "Toothache Soothe Med",
    price: "N15,000",
    tag: "16% off",
  },
  {
    image: medicineDataImg2,
    title: "Toothache Soothe Med",
    price: "N25,000",
    tag: "6% off",
  },
];

export const drugData = [
  {
    image: drugDataImg,
    drug: "Amartem 2201",
    desc: "For malaria and Fever made for both.",
    price: "2,000",
    priceSlash: "12,000",
  },
  {
    image: drugDataImg,
    drug: "Amartem 9998",
    desc: "For malaria and Fever made for both.",
    price: "3,000",
    priceSlash: "22,400",
  },
  {
    image: drugDataImg,
    drug: "Cough Syrup",
    desc: "For Cough and Catarrh.",
    price: "1,500",
    priceSlash: "10,000",
  },
];

export const newsFeedData = [
  {
    image: feedImg1,
    title: "r/worldnews",
    subTitle: "Getting The Upper Hand On Asthma Allergy",
  },
  {
    image: feedImg2,
    title: "r/worldnews",
    subTitle: "Skin Cancer Prevention 5 Ways To Protect Yourself ",
  },
];

export const iconLabel = (route: RouteProp<ParamListBase, string>) => {
  let label = "";
  let Icon = null;

  switch (route.name) {
    case "index":
      label = "Home";
      Icon = <IconHome width={24} height={24} color={Colors.textColor4} />;
      break;
    case "schedule":
      label = "Sche...";
      Icon = <IconCalendar2 width={24} height={24} color={Colors.textColor4} />;
      break;
    case "people":
      label = "People";
      Icon = <IconPeople width={24} height={24} color={Colors.textColor4} />;
      break;
    case "shop":
      label = "Shop";
      Icon = <IconShop width={24} height={24} color={Colors.textColor4} />;
      break;
    case "profile":
      label = "Profile";
      Icon = <IconProfile width={24} height={24} color={Colors.textColor4} />;
      break;
    default:
      label = "";
      Icon = null;
      break;
  }

  return { label, Icon };
};
