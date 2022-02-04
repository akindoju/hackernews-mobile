import axios from "axios";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";

const Card = ({ receivedId }) => {
  const [displayedTitle, setDisplayedTitle] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${receivedId}.json?print=pretty`
      )
      .then(({ data }) => setDisplayedTitle(data.title))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Text>{displayedTitle}</Text>
    </View>
  );
};

export default Card;
