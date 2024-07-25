import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CommunityFeedItems from "@/components/CommunityFeedItems";
import { IconArrowRight, IconCalendar } from "@/assets/icons";
import AppointmentItems from "@/components/AppointmentItems";
import { moderateScale } from "@/utils/proportional.util";
import NewsFeedItems from "@/components/NewsFeedItems";
import MedicalItems from "@/components/MedicalItems";
import MainHeader from "@/components/MainHeader";
import SubHeading from "@/components/SubHeading";
import CustomSwitch from "@/components/Switch";
import DrugItem from "@/components/DrugItems";
import Carousel from "@/components/Carousel";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import {
  appointmentData,
  communityFeedData,
  deviceData,
  drugData,
  medicineData,
} from "@/data/main.data";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="dark" />
        <MainHeader />

        <Carousel
          renderItems={<AppointmentItems />}
          arrayLength={appointmentData.length}
        />

        <View style={styles.switch}>
          <Text style={styles.txtAvail}>I am Avaiable</Text>
          <CustomSwitch />
        </View>

        <View style={styles.schedule}>
          <IconCalendar width={24} height={24} color={"#000"} />
          <Text style={styles.txtSch}>Schedule appointment calender</Text>
          <IconArrowRight width={18} height={18} color={"#000"} />
        </View>

        <View style={styles.section}>
          <SubHeading title="Community Feed" />
          <Carousel
            renderItems={<CommunityFeedItems />}
            arrayLength={communityFeedData.length}
            hideDots={false}
          />
        </View>

        <View style={styles.section}>
          <SubHeading title="Shop for Medical Devices" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MedicalItems item={deviceData} />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <SubHeading title="Shop for Medicines" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MedicalItems item={medicineData} />
          </ScrollView>
        </View>

        <View style={{ marginHorizontal: "auto", width: "90%" }}>
          <Carousel renderItems={<DrugItem />} arrayLength={drugData.length} />
        </View>

        <View style={{ marginHorizontal: "auto", width: "90%" }}>
          <SubHeading title="News Feed" />
          <NewsFeedItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flexGrow: 1,
    rowGap: 30,
    paddingVertical: 10,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 304,
    height: 53,
    maxWidth: "80%",
    borderRadius: 13,
    backgroundColor: Colors.color11,
    marginHorizontal: "auto",
    paddingHorizontal: 12,
  },
  txtAvail: {
    fontFamily: "GothamPro",
    fontSize: moderateScale(14),
    fontWeight: "400",
    lineHeight: 12.93,
    textAlign: "left",
    color: Colors.color12,
  },
  schedule: {
    width: 304,
    height: 52,
    maxWidth: "80%",
    padding: 14,
    borderRadius: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.color13,
    marginHorizontal: "auto",
  },
  txtSch: {
    fontFamily: "GothamPro",
    fontSize: moderateScale(12),
    fontWeight: "400",
    lineHeight: 11.48,
    letterSpacing: 0.03,
    textAlign: "left",
  },
  section: {
    width: "95%",
    marginLeft: "auto",
  },
});
