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
