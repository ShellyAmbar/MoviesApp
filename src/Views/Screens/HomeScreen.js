import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {ADD_TO_FAVORITE_MOVIES_REQUEST} from '../../models/favorites/types';
import {GET_MOVIES_REQUEST} from '../../models/movies/types';
import {GET_GENERS_REQUEST} from '../../models/generes/types';

import OptionsScrollView from '../Customs/OptionsScrollView';
import ListViewItem from '../Customs/ListViewItem';
import {FlatList, RefreshControl, View} from 'react-native';
import {colors, PADDING} from '../components/Theme';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Home = () => {
  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.movies);
  const {genres} = useSelector(state => state.genres);
  const {favorites} = useSelector(state => state.favorites);
  const [refreshing, setRefreshing] = useState(false);
  const [numOfFavorites, setnumOfFavorites] = useState(favorites);

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
  const getGenres = () => {
    dispatch({
      type: GET_GENERS_REQUEST,
    });
  };

  useEffect(() => {
    getMovies('popular');
    getGenres();
  }, []);

  const navigation = useNavigation();

  const onClickGenre = genre => {
    // getMovies(genre.name);
    getMovies('popular');
  };

  const onClickItem = article => {
    navigation.navigate('ArticleDetails', {article});
  };

  return (
    <View>
      <FlatList
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
              isLiked={false}
              onClickStar={item => addToFavorites(item)}
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
