import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { styles } from "../../styles/profile.styles";
import { useRouter } from "expo-router";
export default function Profile() {
  const router = useRouter();
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
        <TouchableOpacity activeOpacity={0.85} style={styles.logoutBtn} onPress={()=>router.replace("/(auth)/login")}>
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
