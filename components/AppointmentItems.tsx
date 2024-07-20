import { IconTimer, IconArrowRight } from "@/assets/icons";
import { View, Text, StyleSheet } from "react-native";
import { appointmentData } from "@/data/main.data";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function AppointmentItems() {
  return (
    <>
      {appointmentData.map((item, index) => (
        <View key={index} style={styles.outerItemContainer}>
          <View
            style={[
              styles.innerItemContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <View style={styles.upperSection}>
              <View style={styles.dateContainer}>
                <Text style={styles.txtDay}>{item.date.day}</Text>
                <Text style={styles.txtWeek}>{item.date.dayOfWeek}</Text>
                <Text style={styles.txtTime}>{item.date.time}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.content1}>{item.content1}</Text>
                <Text style={styles.content2}>{item.content2}</Text>
                <Text style={styles.content3}>{item.content3}</Text>
              </View>
            </View>
            <View style={styles.lowerSection}>
              <View style={styles.timerContainer}>
                <IconTimer width={10} height={10} color={"#fff"} />
                <Text style={styles.timer}>{item.timer}</Text>
              </View>
              <View style={styles.button}>
                <Text style={[styles.txtView, { color: item.backgroundColor }]}>View Patient</Text>
                <AntDesign name="arrowright" size={12} color={item.backgroundColor} />
              </View>
            </View>
          </View>
          <View
            style={[styles.underlay, { backgroundColor: item.underLayColor }]}
          ></View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  outerItemContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    height: 180,
    overflow: "visible",
  },
  innerItemContainer: {
    width: 334,
    maxWidth: "90%",
    height: 146.53,
    backgroundColor: Colors.color,
    borderRadius: 15.08,
    padding: 30,
  },
  underlay: {
    width: 301.68,
    height: 146.53,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    borderRadius: 15.08,
    position: "absolute",
    zIndex: -1,
    left: 32,
    bottom: 0,
  },
  upperSection: {
    flexDirection: "row",
  },
  dateContainer: {
    width: 50,
    height: 83,
    borderRadius: 15.08,
    paddingHorizontal: 3,
    paddingVertical: 7,
    justifyContent: "center",
    backgroundColor: "#FFFFFF24",
  },
  txtDay: {
    flex: 1,
    fontFamily: "GothamPro",
    fontSize: 17.24,
    fontWeight: "400",
    lineHeight: 17.24,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
  },
  txtWeek: {
    flex: 1,
    fontFamily: "GothamPro",
    fontSize: 12.93,
    fontWeight: "400",
    lineHeight: 12.93,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#fff",
    borderBottomWidth: 0.4,
    borderBottomColor: "#fff",
  },
  txtTime: {
    flex: 1,
    fontFamily: "GothamPro",
    fontSize: 8,
    fontWeight: "400",
    lineHeight: 12.93,
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
  },
  textContainer: {
    rowGap: 5,
    marginLeft: 10,
  },
  content1: {
    fontFamily: "Poppins",
    fontSize: 12.93,
    fontWeight: "400",
    lineHeight: 12.93,
    textAlign: "left",
    color: "#fff",
    paddingTop: 5,
    marginTop: 6,
  },
  content2: {
    fontFamily: "Poppins",
    fontSize: 17.24,
    fontWeight: "600",
    lineHeight: 17.24,
    letterSpacing: 0.01,
    paddingTop: 2,
    textAlign: "left",
    color: "#fff",
  },
  content3: {
    fontFamily: "Poppins",
    fontSize: 12.93,
    fontWeight: "400",
    lineHeight: 12.93,
    paddingTop: 2,
    textAlign: "left",
    color: "#fff",
  },
  lowerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5
  },
  timer: {
    fontFamily: "GothamPro",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 12.93,
    textAlign: "left",
    color: "#fff"
  },
  button: {
    width: 102,
    height: 21,
    maxWidth: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    marginLeft: 12,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  txtView: {
    fontFamily: "GothamPro",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 12.93,
    textAlign: "left",
    color: Colors.primaryColor
  },
});
