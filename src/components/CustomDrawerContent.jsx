import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants/Colors";

export function CustomDrawerContent(props) {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 200,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Text
          style={{ color: "white", fontSize: 30, fontFamily: "lexendDeca" }}
        >
          {currentUser.name}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} inActiveBackgroundColor={Colors.primary} />
        <DrawerItem
          label="Sign Out"
          // label={{ focused, color }) => <Text style={{ color }}>{focused ? 'Focused text' : 'Unfocused text'}</Text>
          onPress={() => {
            if (props.logout) {
              props.logout();
            }
          }}
          focused={false}
          labelStyle={() => {
            color: Colors.primary;
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
