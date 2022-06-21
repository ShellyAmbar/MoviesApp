import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  ADD_TO_FAVORITE_MOVIES_REQUEST,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
} from '../models/favorites/types';
import {GET_MOVIES_REQUEST} from '../models/movies/types';
import {GET_GENERS_REQUEST} from '../models/generes/types';

import OptionsScrollView from '../components/OptionsScrollView';
import ListViewItem from '../components/ListViewItem';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, PADDING} from '../utils/Theme';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Home = () => {
  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.movies);
  const {genres} = useSelector(state => state.genres);
  const {favorites} = useSelector(state => state.favorites);
  const [refreshing, setRefreshing] = useState(false);
  const [numOfFavorites, setnumOfFavorites] = useState(favorites);
  const navigation = useNavigation();

  const getMovies = genre => {
    dispatch({
      type: GET_MOVIES_REQUEST,
      genre,
    });
  };
  const addToFavorites = favorite => {
    dispatch({
      type: ADD_TO_FAVORITE_MOVIES_REQUEST,
      favorite,
    });
  };

  const removeFromFavorites = favorite => {
    dispatch({
      type: REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
      payload: favorite,
    });
  };

  const isLiked = favoriteMovie => {
    let isLiked = false;
    let liked = favorites.filter(item => item.id === favoriteMovie.id);
    if (liked.length === 1) {
      isLiked = true;
    }
    return isLiked;
  };

  const onClickeLike = favoriteMovie => {
    if (isLiked(favoriteMovie)) {
      removeFromFavorites(favoriteMovie);
    } else {
      addToFavorites(favoriteMovie);
    }
  };

  useEffect(() => {
    setnumOfFavorites(favorites);
  }, [favorites]);

  const getGenres = () => {
    dispatch({
      type: GET_GENERS_REQUEST,
    });
  };

  const navigateToFavorites = () => {
    navigation.navigate('Favorites');
  };

  useEffect(() => {
    getMovies('popular');
    getGenres();
  }, []);

  const onClickGenre = genre => {
    // getMovies(genre.name);
    getMovies('popular');
  };

  const onClickItem = movie => {
    navigation.navigate('PageDetails', {movie});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnFavorites}
        onPress={() => navigateToFavorites()}>
        <Icon name="star" size={30} color={colors.primary} />
        <Text style={styles.faveText}>{`${
          numOfFavorites ? numOfFavorites.length : 0
        }`}</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={movies}
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            colors={[colors.primary]}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getMovies('popular');
              setRefreshing(false);
            }}
          />
        }
        ListHeaderComponent={
          <OptionsScrollView
            dataList={genres}
            onClickOption={value => onClickGenre(value)}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <ListViewItem
              key={index}
              isLiked={isLiked(item)}
              onClickStar={item => onClickeLike(item)}
              obj={item}
              onPress={() => onClickItem(item)}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnFavorites: {
    marginTop: 20,
    start: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  list: {
    marginTop: 100,
  },
  faveText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});
