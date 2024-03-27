import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const PageA = (props: Props) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text>PageA</Text>
      <Text onPress={() => navigation.push("PageB")}>Go to PageB</Text>
    </View>
  );
};

export default PageA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
