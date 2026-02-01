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

export default function Profile() {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <Text style={styles.heading}>My Profile</Text>

        {/* Profile Card */}
        <LinearGradient
          colors={["#ff8c00", "#ff6a00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileCard}
        >
          <View style={styles.avatarWrapper}>
            <Text style={styles.avatarText}>RS</Text>
          </View>

          <Text style={styles.name}>Rahul Sharma</Text>

          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>Sales Executive</Text>
          </View>
        </LinearGradient>

        {/* Contact Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>CONTACT DETAILS</Text>

          <InfoRow
            icon="mail-outline"
            label="Email"
            value="abc@gmail.com"
          />

          <InfoRow
            icon="call-outline"
            label="Phone"
            value="+91 98765 43210"
          />

          <InfoRow
            icon="briefcase-outline"
            label="Role"
            value="Sales Executive"
          />

          <InfoRow
            icon="calendar-outline"
            label="Join Date"
            value="15 Jun 2023"
          />
        </View>

        {/* Logout */}
        <TouchableOpacity activeOpacity={0.85} style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={20} color="#ff3b3b" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* 🔹 Reusable Info Row */
function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={18} color="#ff8c00" />
      </View>

      <View>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

/* 🔹 Styles */
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 16,
  },

  profileCard: {
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 20,
  },

  avatarWrapper: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.11,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },

  roleBadge: {
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },

  roleText: {
    fontSize: 13,
    color: "#fff",
  },

  detailsCard: {
    backgroundColor: "#151515",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 12,
    letterSpacing: 1,
    color: "#888",
    marginBottom: 14,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#241500",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoLabel: {
    fontSize: 12,
    color: "#aaa",
  },

  infoValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },

  logoutBtn: {
    borderWidth: 1,
    borderColor: "#ff3b3b",
    borderRadius: 14,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 40,
  },

  logoutText: {
    color: "#ff3b3b",
    fontSize: 15,
    fontWeight: "600",
  },
});
