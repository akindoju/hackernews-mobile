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
  }, []);

  // const sampleData = {
  //   by: "prostoalex",
  //   descendants: 340,
  //   id: 30216249,
  //   kids: [
  //     30218785, 30217594, 30217844, 30218751, 30217622, 30217782, 30216502,
  //     30216344, 30218564, 30218645, 30218017, 30216438, 30218208, 30217870,
  //     30218306, 30216443, 30218719, 30218482, 30218291, 30218222, 30218214,
  //     30217955, 30216620, 30218219, 30218427, 30218004, 30216598, 30216542,
  //     30218406, 30217666, 30216466, 30217802, 30218187, 30217939, 30218012,
  //     30217482, 30216593, 30217756, 30216501,
  //   ],
  //   score: 195,
  //   time: 1644026024,
  //   title: "Delta CEO wants U.S. to put unruly passengers on 'no-fly' list",
  //   type: "story",
  //   url: "https://www.reuters.com/business/aerospace-defense/delta-ceo-wants-us-place-convicted-unruly-passengers-no-fly-list-2022-02-04/",
  // };

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
                by <Text style={styles.by}>{receivedData.by}</Text> |{" "}
              </Text>
              <Text style={styles.time}>
                {Math.floor(receivedData.time / 1000 / 60 / 60)} hours ago
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
