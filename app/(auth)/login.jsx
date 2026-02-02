import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/login.styles";
export default function Login() {
  const [secure, setSecure] = useState(true);
  const router = useRouter();
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
            keyboardType="email-address"
            autoCapitalize="none"
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

        {/* Sign In Button */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => router.replace("/(tabs)/profile")}>
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
