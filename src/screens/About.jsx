import { Text, View } from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import CustomHeaderButton from "../components/CustomHeaderButton";

const About = () => {
  return (
    <View>
      <Text>This is the About Page</Text>
    </View>
  );
};

// About.navigationOptions = (navData) => {
//   return {
//     //   headerTitle: 'Filter Meals',
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

//     headerRight: () => {
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Search"
//           iconName="ios-search"
//           //   onPress={navData.navigation.getParam("save")}
//         />
//       </HeaderButtons>;
//     },
//   };
// };

export default About;
