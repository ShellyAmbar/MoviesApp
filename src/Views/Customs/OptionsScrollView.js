import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

const OptionsScrollView = ({dataList, onClickOption}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {dataList &&
        dataList.map((item, index) => (
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
        ))}
    </ScrollView>
  );
};

export default OptionsScrollView;
