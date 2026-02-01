import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";

export default function Members() {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.heading}>Members</Text>
            <Text style={styles.subHeading}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="filter-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#9a9a9a" />
          <TextInput
            placeholder="Search by name or phone..."
            placeholderTextColor="#9a9a9a"
            style={styles.searchInput}
          />
        </View>

        {/* Members List */}
        <MemberCard
          initials="VS"
          name="Vikram Singh"
          status="active"
          phone="+91 98765 11111"
          plan="Annual Platinum"
          expiry="09 Jan 2025"
        />

        <MemberCard
          initials="AG"
          name="Ananya Gupta"
          status="active"
          phone="+91 98765 22222"
          plan="Quarterly Premium"
          expiry="31 Mar 2024"
        />

        <MemberCard
          initials="KM"
          name="Karthik Menon"
          status="active"
          phone="+91 98765 33333"
          plan="Monthly Basic"
          expiry="14 Feb 2024"
        />

        <MemberCard
          initials="DR"
          name="Deepika Rao"
          status="expired"
          phone="+91 98765 44444"
          expired
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* 🔹 Member Card Component */
function MemberCard({
  initials,
  name,
  status,
  phone,
  plan,
  expiry,
  expired,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.card,
        expired && { borderColor: "#ff8c00" },
      ]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{name}</Text>

          <View
            style={[
              styles.statusBadge,
              status === "active"
                ? styles.activeBadge
                : styles.expiredBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                status === "active"
                  ? styles.activeText
                  : styles.expiredText,
              ]}
            >
              {status}
            </Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <Ionicons name="call-outline" size={14} color="#9a9a9a" />
          <Text style={styles.metaText}>{phone}</Text>
        </View>

        {plan && (
          <View style={styles.metaRow}>
            <Ionicons name="calendar-outline" size={14} color="#ff8c00" />
            <Text style={styles.metaText}>
              {plan} • Expires {expiry}
            </Text>
          </View>
        )}
      </View>

      <Ionicons name="chevron-forward" size={18} color="#777" />
    </TouchableOpacity>
  );
}

/* 🔹 Styles */
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },

  subHeading: {
    fontSize: 13,
    color: "#9a9a9a",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  iconBtn: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 10,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    gap: 8,
  },

  searchInput: {
    color: "#fff",
    flex: 1,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#2a1a0f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#ff8c00",
    fontWeight: "700",
    fontSize: 14,
  },

  cardBody: {
    flex: 1,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },

  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  activeBadge: {
    backgroundColor: "#1e3a2a",
  },

  expiredBadge: {
    backgroundColor: "#3a1e1e",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  activeText: {
    color: "#4cd964",
  },

  expiredText: {
    color: "#ff5a5a",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },

  metaText: {
    fontSize: 12,
    color: "#9a9a9a",
  },
});
