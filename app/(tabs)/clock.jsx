import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { styles } from "../../styles/clock.styles";

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
