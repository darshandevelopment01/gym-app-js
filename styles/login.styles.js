import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logoBox: {
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  appName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },

  tagline: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#151515",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },

  label: {
    fontSize: 13,
    color: "#fff",
    marginBottom: 6,
    marginTop: 14,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    gap: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
  },

  button: {
    flexDirection: "row",
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    color: "#888",
    fontSize: 12,
    marginTop: 24,
  },
});
