import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../constants/Colors";

const About = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={styles.details}>
        <Text style={styles.title}>Olusola Akindoju</Text>
        <Text style={styles.text}>
          Hello! My name is Olusola Akindoju and I am a Mobile and Web
          Developer. I enjoy creating applications that scale. Some of the tools
          I use include: React JS, React Native, CSS, SASS, Redux, e.t.c. I love
          learning and I'm always adding new skills and improving the quality of
          my products. I can be reached at{"            "}
          <Text style={styles.mail}>davidd.akindoju@gmail.com</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },

  title: {
    color: Colors.primary,
    fontFamily: "lexendDecaBold",
    fontSize: 30,
  },

  details: {
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20,
  },

  text: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "lexendDeca",
    fontSize: 18,
    lineHeight: 30,
  },

  mail: {
    color: Colors.primary,
  },
});

export default About;
