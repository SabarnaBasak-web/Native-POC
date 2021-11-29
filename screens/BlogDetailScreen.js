import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BlogDetailScreen = ({route}) => {
  const blogId = route.params.blogId;
  const allBlogs = useSelector(state => state.blog);
  const blogDetails = allBlogs.find(item => item.id === blogId);
  console.log('id ', blogId, ' Blog Details', blogDetails);

  const [isLiked, setIsLiked] = useState(false);
  const onLikePressHandler = () => {
    setIsLiked(prevState => !prevState);
  };
  const date = blogDetails.createdAt.split('T')[0];
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.blogHeader}>
          <Image
            source={{uri: blogDetails.avatar}}
            style={styles.avatarImage}
          />
          <View style={styles.blogSubHeading}>
            <Text style={styles.subHeading}>{blogDetails.name}</Text>
            <Text style={styles.subHeading}>{date}</Text>
          </View>
        </View>
        <View style={styles.blogContent}>
          <Image source={{uri: blogDetails.image}} style={styles.imageCover} />
          <Text style={styles.contentText}>{blogDetails.description}</Text>
        </View>
        <View style={styles.mediaIcons}>
          <View style={styles.icons}>
            <Icon
              name={isLiked ? 'thumbs-up' : 'thumbs-o-up'}
              onPress={onLikePressHandler}
              size={30}
            />
            <Text style={styles.iconText}>10</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="comment-o" size={25} />
            <Text style={styles.iconText}>5</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="share" size={25} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  blogHeader: {
    marginTop: 20,
    width: '100%',
  },
  avatarImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#2c387e',
    borderWidth: 1,
  },
  blogSubHeading: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  subHeading: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
  },
  blogContent: {
    marginTop: 10,
  },
  imageCover: {
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  contentText: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 20,
    marginTop: 10,
  },
  mediaIcons: {
    paddingHorizontal: 5,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  icons: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 5,
  },
});
