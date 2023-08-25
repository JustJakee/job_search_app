import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.darkModeSafe : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 10
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? COLORS.white : COLORS.black,
  }),
});

export default styles;
