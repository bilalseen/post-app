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
        <Post
          nickname="yilmaz"
          text="Halı çalan adamdan herşey beklenir."
          date="26 minutes ago"
        />
        <Post
          nickname="mandosi_kadir"
          text="Benim adım Kadir. Dükkanın adı Esat fotoğrafçılık."
          date="41 minutes ago"
        />
        <Post
          nickname="boyga_hakan"
          text="Sizden tek bir şey istedim, tek bir şey ya."
          date="57 minutes ago"
        />
        <Post
          nickname="yilmaz"
          text="İlkkan bizim senle sırt sırta verip de s*kemeyeceğimiz insan yok, ben buna inanıyorum kardeşim.."
          date="1 hour ago"
        />
        <Post
          nickname="ilkkan"
          text="Avcı ne kadar hile bilirse, ayı da o kadar yol bilir."
          date="1 hour ago"
        />
        <Post
          nickname="yilmaz"
          text="Ben yanlış geldiğimi anladım da siz çok yanlış gözüküyorsunuz. Buraya ‘Mandosi’ yazıp, kendine Esat diyip, Kadir ismiyle olmuyor."
          date="1 hour ago"
        />
        <Post nickname="ilkkan" text="SMS geldi mi lan?" date="2 hour ago" />
        <Post
          nickname="yilmaz"
          text="Ne olduğu önemli değil senin ne anladığın önemli."
          date="5 hour ago"
        />
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
