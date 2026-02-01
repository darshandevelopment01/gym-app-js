import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";

const { width } = Dimensions.get("window");

export default function Clock() {
  const isClockedIn = false; // later connect backend

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <Text style={styles.heading}>Clock In / Out</Text>
        <Text style={styles.subHeading}>Track your working hours</Text>

        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.clockIcon}>
            <Ionicons name="time-outline" size={34} color="#9a9a9a" />
          </View>

          <Text style={styles.statusLabel}>Current Status</Text>
          <Text
            style={[
              styles.statusValue,
              { color: isClockedIn ? "#4cd964" : "#9a9a9a" },
            ]}
          >
            {isClockedIn ? "CLOCKED IN" : "CLOCKED OUT"}
          </Text>
        </View>

        {/* Clock Button */}
        <TouchableOpacity activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff8c00", "#ff6a00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.clockBtn}
          >
            <Ionicons
              name={isClockedIn ? "log-out-outline" : "log-in-outline"}
              size={20}
              color="#fff"
            />
            <Text style={styles.clockBtnText}>
              {isClockedIn ? "Clock Out" : "Clock In"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Last Session */}
        <View style={styles.sessionCard}>
          <Text style={styles.sectionTitle}>LAST SESSION</Text>

          <View style={styles.sessionRow}>
            <View style={styles.sessionBox}>
              <Ionicons name="log-in-outline" size={18} color="#4cd964" />
              <Text style={styles.sessionLabel}>Clock In</Text>
              <Text style={styles.sessionTime}>09:00 AM</Text>
            </View>

            <View style={styles.sessionBox}>
              <Ionicons name="log-out-outline" size={18} color="#ff5a5a" />
              <Text style={styles.sessionLabel}>Clock Out</Text>
              <Text style={styles.sessionTime}>06:30 PM</Text>
            </View>
          </View>
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
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 13,
    color: "#9a9a9a",
    marginBottom: 20,
  },

  statusCard: {
    backgroundColor: "#151515",
    borderRadius: 16,
    paddingVertical: 28,
    alignItems: "center",
    marginBottom: 20,
  },

  clockIcon: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.11,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  statusLabel: {
    fontSize: 13,
    color: "#9a9a9a",
    marginBottom: 4,
  },

  statusValue: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },

  clockBtn: {
    flexDirection: "row",
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 24,
  },

  clockBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  sessionCard: {
    backgroundColor: "#151515",
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
  },

  sectionTitle: {
    fontSize: 12,
    letterSpacing: 1,
    color: "#888",
    marginBottom: 14,
  },

  sessionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sessionBox: {
    width: "48%",
    backgroundColor: "#1e1e1e",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
  },

  sessionLabel: {
    fontSize: 12,
    color: "#9a9a9a",
    marginTop: 6,
  },

  sessionTime: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginTop: 4,
  },
});
