import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import Post from "./components/Post";
import post_data from "./post_data.json";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>POST-APP</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={post_data}
          renderItem={({item}) => (
            <Post nickname={item.nickname} text={item.text} date={item.date} />
          )}
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
