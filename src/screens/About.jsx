import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Headline, Surface } from "react-native-paper";
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
          Hello! My name is Olusola Akindoju and I am a Javascript Web
          Developer. I wrote my first line of code back in 2019, and I have
          since enjoyed the experience in using my skills to contribute to
          exciting and personal projects. I graduated from high school with a
          Best Graduating Student honourary Award and I have experience wroking
          with Pear Systems Development Company. During that time I have been
          able to learn the fundamentals of Javascript and related frameworks
          and libraries including React JS, Redux, CSS, SASS and even React
          Native. I am passionate about improving my skills and learning new
          technologies. Do well to get in touch, please message me at{" "}
          <Text style={styles.mail}>davidd.akindoju@gmail.com</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
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
