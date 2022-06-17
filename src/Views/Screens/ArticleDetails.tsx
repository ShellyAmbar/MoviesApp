import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import dateFormat from 'dateformat';
import {ItemMovie} from '../components/objects/movie';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_TO_FAVORITE_MOVIES_REQUEST,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
} from '../../models/favorites/types';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colors} from '../components/Theme';

const ArticleDetails = props => {
  const article: ItemMovie = props.route.params.article;
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  const [numOfFavorites, setnumOfFavorites] = useState(favorites);

  useEffect(() => {
    setnumOfFavorites(favorites);
  }, [favorites]);

  const convertDateToStringFormat = date => {
    return dateFormat(date, 'mmmm dS, yyyy');
  };

  const removeFromFavorites = favorite => {
    dispatch({
      type: REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
      payload: favorite,
    });
  };
  const addToFavorites = favorite => {
    dispatch({
      type: ADD_TO_FAVORITE_MOVIES_REQUEST,
      favorite,
    });
  };

  const isLiked = () => {
    let isLiked = false;
    let liked = favorites.filter(item => item.id === article.id);
    if (liked.length === 1) {
      isLiked = true;
    }
    return isLiked;
  };

  const onClickeLike = () => {
    if (isLiked()) {
      removeFromFavorites(article);
    } else {
      addToFavorites(article);
    }
  };

  return (
    <>
      {
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="star" size={30} color={colors.primary} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
            }}>{`Favorites: ${
            numOfFavorites ? numOfFavorites.length : 0
          }`}</Text>
        </View>
      }
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
          <View
            style={{
              justifyContent: 'center',

              alignItems: 'center',
              height: 60,
              width: 100,
              borderRadius: 10,
              marginBottom: 10,
              //paddingStart: 5,
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
            }}>
            <TouchableOpacity onPress={() => onClickeLike()}>
              {isLiked() ? (
                <Icon name="star" size={30} color={'#FFFF'} />
              ) : (
                <Icon name="star-outline" size={30} color={'#FFFF'} />
              )}
            </TouchableOpacity>
          </View>
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
    </>
  );
};

export default ArticleDetails;
