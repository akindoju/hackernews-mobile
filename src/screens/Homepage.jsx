import { useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardComponent from "../components/CardComponent";
import Pagination from "../components/Pagination";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { Colors } from "../constants/Colors";
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

// Homepage.navigationOptions = (navData) => {
//   return {
//     headerTitle: () => {
//       <View style={styles.headerTitle}>
//         <Image
//           source={require("../../assets/hackerNewsLogo.png")}
//           style={styles.image}
//         />
//         <Text style={styles.headerTitleText}>Hacker News</Text>
//       </View>;
//     },
//     headerStyle: {
//       backgroundColor: Colors.primary,
//     },

//     headerLeft: () => {
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Menu"
//           iconName="ios-menu"
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>;
//     },
//   };
// };

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
