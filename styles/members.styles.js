import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
