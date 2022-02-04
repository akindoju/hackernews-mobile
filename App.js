import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import Homepage from "./src/screens/Homepage";

export default function App() {
  const [retrievedIds, setRetrievedIds] = useState([]);

  const fetchIds = async () => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then(({ data }) => setRetrievedIds(data))
      .catch((err) => console.log(err));
  };

  const CardComponent = ({ item }) => <Card receivedId={item} />;

  return (
    <View style={styles.container}>
      <Homepage />
      <Button
        onPress={() => {
          fetchIds();
        }}
        title="Fetch"
      />
      <FlatList
        keyExtractor={(item) => item}
        data={retrievedIds}
        renderItem={CardComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
