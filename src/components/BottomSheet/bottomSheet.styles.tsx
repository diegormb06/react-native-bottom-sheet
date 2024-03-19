import { StyleSheet, Dimensions } from "react-native";

const DIMENSIONS = Dimensions.get("window");
export const SHEET_HEIGHT = DIMENSIONS.height / 3;
export const SHEET_OVER_DRAG = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DIMENSIONS.width,
    minHeight: SHEET_HEIGHT,
    backgroundColor: "#1e1f23",

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 1.3,
    paddingBottom: SHEET_OVER_DRAG * 1.3,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    margin: 18,
  },
  dragIcon: {
    alignSelf: "center",
    marginTop: 5,
  },
});
