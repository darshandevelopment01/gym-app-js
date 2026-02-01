import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";

export default function Offers() {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <Text style={styles.heading}>Active Offers</Text>
        <Text style={styles.subHeading}>0 offers available</Text>

        {/* Empty State */}
        <View style={styles.emptyCard}>
          <Ionicons
            name="pricetag-outline"
            size={40}
            color="#9a9a9a"
            style={styles.icon}
          />
          <Text style={styles.emptyText}>
            No active offers at the moment
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* 🔹 Styles */
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },

  subHeading: {
    fontSize: 13,
    color: "#9a9a9a",
    marginBottom: 20,
  },

  emptyCard: {
    backgroundColor: "#151515",
    borderRadius: 16,
    paddingVertical: 40,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },

  icon: {
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 14,
    color: "#9a9a9a",
  },
});
