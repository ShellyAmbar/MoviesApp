import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import dateFormat from 'dateformat';
import {ItemMovie} from '../objects/movie';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_TO_FAVORITE_MOVIES_REQUEST,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
} from '../models/favorites/types';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colors} from '../utils/Theme';
import {rootState} from '../models/root-reducer';

const ArticleDetails = props => {
  const article: ItemMovie = props.route.params.article;
  const dispatch = useDispatch();
  const {favorites} = useSelector((state: typeof rootState) => state.favorites);

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
        <View style={styles.container}>
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
        <View style={styles.scrollview}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subTitle}>
            {` Released Date:${convertDateToStringFormat(
              article.release_date,
            )},  Vote average: ${article.vote_average}  `}
          </Text>
          <View style={styles.btnLike}>
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
            style={styles.img}
          />
          <Text style={styles.mainText}>{article.overview}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  mainText: {
    margin: 10,
    padding: 10,
    fontSize: 20,
    width: '90%',

    textAlign: 'justify',
    fontWeight: '400',
  },
  title: {
    margin: 10,
    padding: 10,
    fontSize: 30,
    width: '90%',
    textAlign: 'justify',
    fontWeight: '700',
  },
  subTitle: {
    margin: 10,
    padding: 10,
    fontSize: 25,
    width: '100%',

    textAlign: 'center',

    fontWeight: '700',
  },
  btnLike: {
    justifyContent: 'center',

    alignItems: 'center',
    height: 60,
    width: 100,
    borderRadius: 10,
    marginBottom: 10,
    //paddingStart: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
  },
  img: {
    height: 330,
    width: '100%',
    borderRadius: 10,
  },
});
