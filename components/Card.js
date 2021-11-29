import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Card = ({
  title,
  image,
  author,
  date,
  avatar,
  id,
  description,
  showdetails,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={showdetails}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subHeading}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.avatarLogo}
          />
          <Text style={styles.avatarAuthor}>{author}</Text>
        </View>
      </View>
      <View>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.blogText} numberOfLines={2}>
          {' '}
          {description}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    height: 250,
    width: 380,
    maxWidth: '100%',
    elevation: 4,
    backgroundColor: '#efefef',
  },
  header: {
    backgroundColor: '#efefef',
    elevation: 4,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '24%',
  },
  title: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 20,
    color: '#2c387e',
  },
  subHeading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    marginTop: 5,
  },
  avatarLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#2c387e',
    borderWidth: 1,
    marginRight: 5,
  },
  avatarAuthor: {
    fontFamily: 'GoogleSans-Regular',
    color: '#2c387e',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  blogText: {
    marginTop: 2,
    paddingHorizontal: 10,
    textAlign: 'left',
    fontFamily: 'GoogleSans-Regular',
    color: '#2c387e',
  },
});
