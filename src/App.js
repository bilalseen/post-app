import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Post from "./components/Post";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>POST-APP</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Post nickname="yilmaz" text="Halı çalan adamdan herşey beklenir." />
        <Post
          nickname="mandosi_kadir"
          text="Benim adım Kadir. Dükkanın adı Esat fotoğrafçılık."
        />
        <Post
          nickname="boyga_hakan"
          text="Sizden tek bir şey istedim, tek bir şey ya."
        />
        <Post
          nickname="yilmaz"
          text="İlkkan bizim senle sırt sırta verip de s*kemeyeceğimiz insan yok, ben buna inanıyorum kardeşim.."
        />
        <Post
          nickname="ilkkan"
          text="Avcı ne kadar hile bilirse, ayı da o kadar yol bilir."
        />
        <Post
          nickname="yilmaz"
          text="Ben yanlış geldiğimi anladım da siz çok yanlış gözüküyorsunuz. Buraya ‘Mandosi’ yazıp, kendine Esat diyip, Kadir ismiyle olmuyor."
        />
        <Post nickname="ilkkan" text="SMS geldi mi lan?" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#E1D5C9",
  },
  header_container: {
    margin: 10,
  },
  header_text: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;
