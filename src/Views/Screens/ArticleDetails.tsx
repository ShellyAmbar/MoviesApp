import React, {useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import dateFormat from 'dateformat';
import {ItemMovie} from '../components/objects/movie';

const ArticleDetails = props => {
  const article: ItemMovie = props.route.params.article;

  const convertDateToStringFormat = date => {
    return dateFormat(date, 'mmmm dS, yyyy');
  };

  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          alignItems: 'center',
          padding: 10,
        }}>
        <Text
          style={{
            margin: 10,
            padding: 10,
            fontSize: 30,
            width: '90%',
            textAlign: 'justify',
            fontWeight: '700',
          }}>
          {article.title}
        </Text>
        <Text
          style={{
            margin: 10,
            padding: 10,
            fontSize: 25,
            width: '100%',

            textAlign: 'center',

            fontWeight: '700',
          }}>
          {` Released Date:${convertDateToStringFormat(
            article.release_date,
          )},  Vote average: ${article.vote_average}  `}
        </Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${article.poster_path}`,
          }}
          style={{height: 330, width: '100%', borderRadius: 10}}
        />
        <Text
          style={{
            margin: 10,
            padding: 10,
            fontSize: 20,
            width: '90%',

            textAlign: 'justify',
            fontWeight: '400',
          }}>
          {article.overview}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ArticleDetails;
