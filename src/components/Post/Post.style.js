import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#ECE8E4',
  },
  top: {
    margin: 10,
    marginBottom: 0,
  },
  nickname: {
    fontWeight: 'bold',
  },
  middle: {
    margin: 10,
  },
  text: {
    fontSize: 14
  },
  bottom: {
    margin: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  like_button_text: {
    paddingLeft: 6,
    paddingRight: 6,
    color: "white",
    backgroundColor: "#bdb76b",
    borderRadius: 10,
  },
  comment_button_text: {
    paddingLeft: 6,
    paddingRight: 6,
    color: "white",
    backgroundColor: "#bdb76b",
    borderRadius: 10,
  },
  send_button_text: {
    paddingLeft: 6,
    paddingRight: 6,
    color: "white",
    backgroundColor: "#bdb76b",
    borderRadius: 10,
  },
  save_button_text: {
    paddingLeft: 6,
    paddingRight: 6,
    color: "white",
    backgroundColor: "#bdb76b",
    borderRadius: 10,
  },
  date: {
    color: 'grey',
    fontSize: 9,
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: 5,
  }
});

export default styles;
