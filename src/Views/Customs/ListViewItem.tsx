import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colors} from '../components/Theme';

interface ItemMovie {
  adult: false;
  backdrop_path: String;
  genre_ids: [];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}
const ListViewItem = props => {
  const obj: ItemMovie = props.obj;
  const isLiked = props.isLiked;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{height: 330, width: '100%', padding: 10, marginBottom: 70}}>
      <View style={{height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 20,
            width: '80%',
            textAlign: 'justify',
            fontWeight: '700',
          }}>
          {obj.title}
        </Text>
        <View style={{height: 330, width: '100%', borderRadius: 10}}>
          {obj.poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${obj.poster_path}`,
              }}
              style={{height: 330, width: '100%', borderRadius: 10}}
            />
          ) : (
            <View
              style={{
                height: 330,
                width: '100%',
                borderRadius: 10,
                backgroundColor: colors.darkGrey,
              }}
            />
          )}
          <View
            style={{
              justifyContent: 'center',

              alignItems: 'center',
              height: '20%',
              width: '100%',
              borderRadius: 10,
              marginTop: -60,
              //paddingStart: 5,
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
            }}>
            <TouchableOpacity onPress={() => props.onClickStar(obj)}>
              {isLiked ? (
                <Icon name="star" size={30} color={'#FFFF'} />
              ) : (
                <Icon name="star-outline" size={30} color={'#FFFF'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListViewItem;
