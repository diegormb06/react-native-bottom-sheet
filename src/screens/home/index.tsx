import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BottomSheet } from "../../components/BottomSheet";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  const [open, setOpen] = useState(false);

  function toggleSheet() {
    setOpen((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={toggleSheet}>
        <Ionicons name="options" color="#fff" size={24} />
      </TouchableOpacity>
      {open && <BottomSheet onClose={toggleSheet} />}
    </View>
  );
}
