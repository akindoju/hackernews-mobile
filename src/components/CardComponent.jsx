import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import { Colors } from "../constants/Colors";
import SkeletonContent from "react-native-skeleton-content";
import { saveStoryUrl } from "../redux/storyItems/storyItems.actions";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const CardComponent = ({ receivedId, navigation }) => {
  const [receivedData, setReceivedData] = useState("");
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${receivedId}.json?print=pretty`
      )
      .then(({ data }) => {
        setReceivedData(data);
        setIsLoadingContent(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingContent(false);
      });
  }, []);

  const dispatch = useDispatch();

  return (
    <SkeletonContent
      isLoading={isLoadingContent}
      containerStyle={{
        flex: 1,
        width: 480,
        paddingHorizontal: 5,
        justifyContent: "center",
      }}
      boneColor="#ddd"
      animationDirection="horizontalLeft"
      layout={[{ width: 350, height: 100 }]}
    >
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
                  {receivedData.score}{" "}
                  <Text style={styles.subText}>vote(s)</Text>
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
                  {receivedData.time
                    ? new Date(receivedData.time * 1000).toDateString()
                    : null}
                </Text>
              </View>
            </View>
          </Surface>
        </View>
      </TouchableNativeFeedback>
    </SkeletonContent>
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
    fontSize: 10,
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
