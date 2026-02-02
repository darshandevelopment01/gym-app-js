import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
