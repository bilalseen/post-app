import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "./Post.style";

const Post = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Text style={styles.nickname}>@{props.nickname}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.like_button}>
          <Text style={styles.like_button_text}>I LIKED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comment_button}>
          <Text style={styles.comment_button_text}>COMMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send_button}>
          <Text style={styles.send_button_text}>SEND</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save_button}>
          <Text style={styles.save_button_text}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
