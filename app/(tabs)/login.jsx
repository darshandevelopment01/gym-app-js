import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [secure, setSecure] = useState(true);

  return (
    <LinearGradient
      colors={["#000000", "#1a0f05", "#000000"]}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoBox}>
        <LinearGradient
          colors={["#ff8c00", "#ff6a00"]}
          style={styles.logo}
        >
          <Ionicons name="barbell-outline" size={26} color="#fff" />
        </LinearGradient>

        <Text style={styles.appName}>FitZone</Text>
        <Text style={styles.tagline}>Employee Portal</Text>
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={18} color="#999" />
          <TextInput
            placeholder="you@fitzone.com"
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={18} color="#999" />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={secure}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? "eye-outline" : "eye-off-outline"}
              size={18}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Button */}
        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={["#ff8c00", "#ff6a00"]}
            style={styles.button}
          >
            <Ionicons name="log-in-outline" size={18} color="#fff" />
            <Text style={styles.buttonText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Contact admin if you forgot your password
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
