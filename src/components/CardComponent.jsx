import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import { Colors } from "../constants/Colors";
import {
  fetchStoryItems,
  setActivePage,
} from "../redux/storyItems/storyItems.actions";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Button,
} from "react-native";

const CardComponent = ({ receivedId }) => {
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

  const receivedTime = Math.floor(receivedData.time / 1000 / 60 / 60);

  return (
    <TouchableNativeFeedback>
      <View>
        <Surface style={styles.surface}>
          <View style={styles.score}>
            <Text style={styles.scoreText}>{receivedData.score}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.title}>{receivedData.title}</Text>
            <View style={styles.about}>
              <Text>
                by <Text style={styles.by}>{receivedData.by}</Text> |
              </Text>
              <Text style={styles.time}>recehours ago</Text>
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
    marginBottom: "1%",
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
