import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

// Add giant strings to an array. This will consume a lot of memory.
const BigStateVars = (props: Props) => {
  const [data, setData] = useState<string[]>([]);
  const fetchData = async () => {
    const largeString = new Array(100000000).join("A"); // seems like roughly 200MB RAM
    setData((p) => [...p, largeString]);
  };
  return (
    <View style={styles.container}>
      <Text onPress={fetchData}>Add giant string to array</Text>
      <Text>String in array: {data.length}</Text>
      <Text onPress={() => setData([])}>Clear data</Text>
    </View>
  );
};

export default BigStateVars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
