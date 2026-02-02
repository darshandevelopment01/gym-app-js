import { StyleSheet, Platform } from "react-native";

export const tabStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#0f0f0f",
    borderTopWidth: 0,
    height: Platform.OS === "ios" ? 85 : 65,
    paddingBottom: Platform.OS === "ios" ? 18 : 8,
  },
  tabLabel: {
    fontSize: 11,
  },
});
