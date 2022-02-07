import { StyleSheet, View } from "react-native";
import { IconButton, Surface, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import {
  setActivePageIds,
  fetchStoryItems,
} from "../redux/storyItems/storyItems.actions";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.storyItems.pageNumber);
  const numberOfPages = useSelector((state) => state.storyItems.numberOfPages);

  const dispatch = useDispatch();

  return (
    <Surface style={styles.container}>
      <IconButton
        icon="chevron-double-left"
        color={Colors.primary}
        size={30}
        onPress={() => {
          dispatch(setActivePageIds(pageNumber - 1));
        }}
        disabled={pageNumber <= 1}
      />

      <Text style={styles.pageNumber}>{pageNumber}</Text>

      <IconButton
        icon="chevron-double-right"
        color={Colors.primary}
        size={30}
        onPress={() => {
          dispatch(setActivePageIds(pageNumber + 1));
        }}
        disabled={pageNumber >= numberOfPages}
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
    fontFamily: "lexendDecaBold",
  },
});

export default Pagination;
