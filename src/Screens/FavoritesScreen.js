import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  GET_FAVORITE_MOVIES_REQUEST,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
} from '../models/favorites/types';

import ListViewItem from '../components/ListViewItem';
import {colors, PADDING} from '../utils/Theme';

const Favorites = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  const onClickItem = article => {
    navigation.navigate('PageDetails', {article});
  };

  const getFavorites = () => {
    dispatch({
      type: GET_FAVORITE_MOVIES_REQUEST,
    });
  };
  const removeFromFavorites = favorite => {
    dispatch({
      type: REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
      payload: favorite,
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View>
      <FlatList
        data={favorites}
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            colors={[colors.primary]}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getFavorites();
              setRefreshing(false);
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <ListViewItem
              key={index}
              isLiked={false}
              onClickStar={item => removeFromFavorites(item)}
              obj={item}
              onPress={() => onClickItem(item)}
            />
          );
        }}
      />
    </View>
  );
};

export default Favorites;
