import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../style/screens/feed';

export default class ActivityPost extends Component {

   createComments = (post) => {
      return post.comments.map((comment, index) => {
         return (
            <View key={index} style={styles.commentContainer}>
               <Text style={styles.commentContent}>
                  <Text style={styles.commentTitle}>
                     {comment.username}
                  </Text> {comment.comment}
               </Text>
            </View>
         );
      });
   }

   render() {
      var post = this.props.post;
      var comments = this.createComments(post);

      return (
         <View style={styles.activityPost}>
            <Text style={styles.miniText}>{post.date}</Text>
            <View style={styles.activityPostTitleContainer}>
               <Text style={styles.postTitle}>{post.username}</Text>
               <Text style={styles.postTitle}>{post.amount} {post.ticker} {post.action}</Text>
            </View>
            {comments}
            <TouchableOpacity style={styles.replyButtonContainer}>
               <Text style={styles.replyButtonText}
               //  onPress={this.reply}
               >
                  Reply
               </Text>
            </TouchableOpacity>
         </View>
      );
   };
};