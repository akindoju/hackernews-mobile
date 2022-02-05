import { StyleSheet, View } from "react-native";
import { IconButton, Surface, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import { setActivePageIds } from "../redux/storyItems/storyItems.actions";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.storyItems.pageNumber);
  const numberOfPages = useSelector((state) => state.storyItems.numberOfPages);

  const dispatch = useDispatch();

  return (
    <Surface style={styles.container}>
      <IconButton
        icon="arrow-left"
        color={Colors.primary}
        size={30}
        onPress={() => {
          dispatch(setActivePageIds(pageNumber - 1));
        }}
        disabled={pageNumber <= 1}
      />
      {/* <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        activeOutlineColor={Colors.primary}
        keyboardType="number-pad"
        maxLength={3}
      /> */}

      <Text style={styles.pageNumber}>{pageNumber}</Text>

      <IconButton
        icon="arrow-right"
        color={Colors.primary}
        size={30}
        onPress={() => {
          dispatch(setActivePageIds(pageNumber + 1));
        }}
        disabled={pageNumber > numberOfPages}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "8%",
  },

  pageNumber: {
    fontSize: 25,
    fontFamily: "lexendDeca",
  },
});

export default Pagination;
