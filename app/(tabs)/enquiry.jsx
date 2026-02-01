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

export default function Enquiry() {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.heading}>Enquiries</Text>
            <Text style={styles.subHeading}>4 enquiries</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="filter-outline" size={18} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#9a9a9a" />
          <TextInput
            placeholder="Search by name, phone or program..."
            placeholderTextColor="#9a9a9a"
            style={styles.searchInput}
          />
        </View>

        {/* Enquiry Cards */}
        <EnquiryCard
          name="Priya Patel"
          status="new"
          program="Weight Loss Program"
          phone="+91 99887 65432"
          date="29 Jan, 10:30 AM"
          icon="chatbubbles-outline"
        />

        <EnquiryCard
          name="Amit Kumar"
          status="contacted"
          program="Muscle Building"
          phone="+91 88776 54321"
          date="28 Jan, 02:00 PM"
          icon="people-outline"
          highlighted
        />

        <EnquiryCard
          name="Sneha Reddy"
          status="follow-up"
          program="Yoga Classes"
          phone="+91 77665 43210"
          date="27 Jan, 11:15 AM"
          icon="walk-outline"
        />

        <EnquiryCard
          name="Rajesh Nair"
          status="new"
          program="General Fitness"
          phone="+91 66554 32109"
          date="29 Jan, 09:00 AM"
          icon="chatbubbles-outline"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* 🔹 Enquiry Card Component */
function EnquiryCard({
  name,
  status,
  program,
  phone,
  date,
  icon,
  highlighted,
}) {
  const statusColors = {
    new: "#ff8c00",
    contacted: "#2f80ff",
    "follow-up": "#f2c94c",
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.card,
        highlighted && { borderColor: "#ff8c00" },
      ]}
    >
      <View style={styles.avatar}>
        <Ionicons name={icon} size={18} color="#fff" />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusColors[status] },
            ]}
          >
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>

        <Text style={styles.program}>{program}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="call-outline" size={14} color="#9a9a9a" />
            <Text style={styles.metaText}>{phone}</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#9a9a9a" />
            <Text style={styles.metaText}>{date}</Text>
          </View>
        </View>
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

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  iconBtn: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 10,
  },

  addBtn: {
    backgroundColor: "#ff8c00",
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
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
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

  statusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#000",
    textTransform: "capitalize",
  },

  program: {
    fontSize: 13,
    color: "#9a9a9a",
    marginVertical: 4,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  metaText: {
    fontSize: 12,
    color: "#9a9a9a",
  },
});
