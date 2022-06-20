import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';

const OptionsScrollView = ({dataList, onClickOption}) => {
  return (
    <FlatList
      horizontal={true}
      data={dataList}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onClickOption(item);
            }}>
            <View>
              <Text
                style={{
                  textTransform: 'uppercase',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#800000',
                  fontSize: 20,
                  margin: 10,
                  borderRadius: 10,
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default OptionsScrollView;
