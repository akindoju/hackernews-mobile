import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardComponent from "../components/CardComponent";
import Pagination from "../components/Pagination";
import { fetchStoryItemsAsync } from "../redux/storyItems/storyItems.actions";

const Homepage = ({ navigation }) => {
  const retrievedIds = useSelector((state) => state.storyItems.activePageIds);
  const isLoadingStoryItems = useSelector(
    (state) => state.storyItems.isLoadingStoryItems
  );
  const pageNumber = useSelector((state) => state.storyItems.pageNumber);

  const CardItem = ({ item }) => (
    <CardComponent receivedId={item} navigation={navigation} />
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoryItemsAsync());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item}
        data={retrievedIds}
        renderItem={CardItem}
        onRefresh={() => {
          dispatch(fetchStoryItemsAsync(pageNumber));
        }}
        refreshing={isLoadingStoryItems}
      />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
  },

  image: {
    height: 35,
    width: 35,
  },

  headerTitleText: {
    color: "white",
    fontFamily: "lexendDeca",
    fontSize: 25,
  },
});

export default Homepage;
