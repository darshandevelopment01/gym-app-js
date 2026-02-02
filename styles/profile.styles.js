import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
