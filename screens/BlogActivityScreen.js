import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useSelector} from 'react-redux';
import Card from '../components/Card';

const handleNotification = item => {
  PushNotification.localNotification({
    channelId: 'test-channel id',
    title: 'Demo title',
    message: 'item.description',
  });
};
const BlogActivityScreen = ({route, navigation}) => {
  const blogs = useSelector(state => state.blog);
  const renderItem = blog => {
    return (
      <Card
        title={blog.item.title}
        image={blog.item.image}
        id={blog.item.id}
        author={blog.item.name}
        date={blog.item.createdAt}
        avatar={blog.item.avatar}
        description={blog.item.description}
        showdetails={() => {
          navigation.navigate('BlogDetails', {
            blogName: blog.item.title,
            blogId: blog.item.id,
          });
        }}
        onPress={() => {
          handleNotification(blog.item);
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={blogs}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BlogActivityScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
