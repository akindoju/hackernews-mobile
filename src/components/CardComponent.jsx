import axios from "axios";
import { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import { Colors } from "../constants/Colors";
import { saveStoryUrl } from "../redux/storyItems/storyItems.actions";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";

const CardComponent = ({ receivedId, navigation }) => {
  const [receivedData, setReceivedData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${receivedId}.json?print=pretty`
      )
      .then(({ data }) => {
        setReceivedData(data);
      })
      .catch((err) => console.log(err));
  }, [receivedId]);

  const dispatch = useDispatch();

  return (
    <TouchableNativeFeedback
      onPress={() => {
        dispatch(saveStoryUrl(receivedData.url));
        navigation.navigate("WebViewScreen");
      }}
    >
      <View>
        <Surface style={styles.surface}>
          <View style={styles.score}>
            <Text style={styles.scoreText}>
              <Text>
                {receivedData.score} <Text style={styles.subText}>vote(s)</Text>
              </Text>
            </Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.title}>{receivedData.title}</Text>
            <View style={styles.about}>
              <Text>
                by <Text style={styles.by}>{receivedData.by}</Text> |
              </Text>
              <Text style={styles.time}>
                {" "}
                {new Date(receivedData.time * 1000).toLocaleString()}
              </Text>
            </View>
          </View>
        </Surface>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  surface: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    height: "100%",
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "1%",

    elevation: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  score: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: 10,
  },

  scoreText: {
    color: Colors.primary,
    fontFamily: "lexendDeca",
    fontSize: 20,
    flexDirection: "row",
    textAlign: "center",
  },

  subText: {
    fontSize: 12,
  },

  title: {
    fontSize: 19,
    fontFamily: "lexendDecaBold",
  },

  details: {
    width: "90%",
    padding: 10,
  },

  about: {
    flexDirection: "row",
    alignItems: "center",
  },

  by: {
    color: Colors.primary,
  },
});

export default CardComponent;
