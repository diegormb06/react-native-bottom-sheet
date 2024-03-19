import { Text, View } from "react-native";
import { SHEET_HEIGHT, SHEET_OVER_DRAG, styles } from "./bottomSheet.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

type BottonSheetProps = {
  onClose: () => void;
};

export function BottomSheet({ onClose }: BottonSheetProps) {
  const offSet = useSharedValue(0);

  function close() {
    offSet.value = 0;
    onClose();
  }

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offSet.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

      offSet.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offSet.value < SHEET_HEIGHT / 3) {
        offSet.value = withSpring(0);
      } else {
        offSet.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offSet.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown}
        style={[styles.container, translateY]}
      >
        <MaterialCommunityIcons name="drag-horizontal" color="#999" size={24} style={styles.dragIcon} />
        <Text style={styles.title}>OPÇÕES</Text>
      </Animated.View>
    </GestureDetector>
  );
}
