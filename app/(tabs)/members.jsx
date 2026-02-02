import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { styles } from "../../styles/members.styles";

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
