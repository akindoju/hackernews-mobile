import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardComponent from "../components/CardComponent";
import Pagination from "../components/Pagination";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import CustomHeaderButton from "../components/CustomHeaderButton";
import { Colors } from "../constants/Colors";

const Homepage = () => {
  const retrievedIds = useSelector((state) => state.storyItems.activePageIds);

  const CardItem = ({ item }) => <CardComponent receivedId={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item}
        data={retrievedIds}
        renderItem={CardItem}
        // onRefresh={() => fetchIds()}
      />
      <Pagination />
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homepage;
