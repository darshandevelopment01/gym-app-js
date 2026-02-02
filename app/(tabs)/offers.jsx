import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { styles } from "../../styles/offers.styles";


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
