import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { styles } from "../../styles/enquiry.styles";

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
