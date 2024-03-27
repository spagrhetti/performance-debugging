import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

type Props = {};

export const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } =
  Dimensions.get("window");

const PageB = (props: Props) => {
  const navigation: any = useNavigation();
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <Image
        style={{
          width: (DEVICE_WIDTH - 4) / 3,
          aspectRatio: 1,
          backgroundColor: "red",
          marginRight: index % 3 === 2 ? 0 : 2,
          marginBottom: 2,
        }}
        source={{ uri: `https://picsum.photos/id/${index}/200` }}
        cachePolicy={"none"}
        recyclingKey={index.toString()}
      />
    );
  };
  return (
    <View style={styles.container}>
      {/* <Text>PageB</Text>
      <Text onPress={() => navigation.goBack()}>Go Back</Text> */}
      {/* <FlashList
        data={new Array(10000)}
        renderItem={renderItem}
        numColumns={3}
        estimatedItemSize={DEVICE_WIDTH / 3 - 4}
      /> */}
      <FlatList
        data={new Array(10000)}
        renderItem={renderItem}
        numColumns={3}
        // estimatedItemSize={DEVICE_WIDTH / 3 - 4}
      />
    </View>
  );
};

export default PageB;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
