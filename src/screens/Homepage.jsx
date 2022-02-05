import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardComponent from "../components/CardComponent";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import CustomHeaderButton from "../components/CustomHeaderButton";
import { Colors } from "../constants/Colors";
import {
  fetchStoryItems,
  setActivePage,
} from "../redux/storyItems/storyItems.actions";

const Homepage = () => {
  const [activePageNumber, setActivePageNumber] = useState(pageNumber);

  const dispatch = useDispatch();
  const retrievedIds = useSelector((state) => state.storyItems.activePageIds);
  const pageNumber = useSelector((state) => state.storyItems.pageNumber);

  // const CardItem = ({ item }) => <CardComponent receivedId={item} />;

  return (
    <View style={styles.container}>
      {/* <Button
        onPress={() => {
          dispatch(fetchStoryItems());
          dispatch(setActivePage(1));
        }}
        title="Fetch"
      /> */}
      {/* <FlatList
        keyExtractor={(item) => item}
        data={retrievedIds}
        renderItem={CardItem}
        // onRefresh={() => fetchIds()}
      /> */}
      <ScrollView>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </ScrollView>
    </View>
  );
};

Homepage.navigationOptions = (navData) => {
  return {
    //   headerTitle: 'Filter Meals',
    headerStyle: {
      backgroundColor: Colors.primary,
    },

    // headerLeft: () => {
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>;
    // },
    // headerRight: () => {
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //     <Item
    //       title="Search"
    //       iconName="ios-search"
    //       //   onPress={navData.navigation.getParam("save")}
    //     />
    //   </HeaderButtons>;
    // },
  };
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homepage;
