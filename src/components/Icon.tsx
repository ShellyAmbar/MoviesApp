import React from 'react';
import {View, ViewStyle} from 'react-native';
import {colors} from '../utils/Theme';
const iconsPath = '../../assets/images/icons/';

export const Icons = {
  add: require(iconsPath + 'add.svg').default,

  heart: require(iconsPath + 'heart.svg').default,
  favorite: require(iconsPath + 'favorite.svg').default,

  info: require(iconsPath + 'info.svg').default,

  google: require(iconsPath + 'google.svg').default,

  star: require(iconsPath + 'star.svg').default,

  home: require(iconsPath + 'home.svg').default,
  user: require(iconsPath + 'user.svg').default,
  search: require(iconsPath + 'search.svg').default,
  trash: require(iconsPath + 'trash.svg').default,

  profile: require(iconsPath + 'profile.svg').default,
};

interface IconProps {
  name: keyof typeof Icons;
  color?: string;
  style?: ViewStyle;
  size?: number;
}

const Icon = ({name, color, style, size}: IconProps) => {
  const AppIcon = Icons[name];

  return (
    <View {...{style}}>
      <AppIcon
        fill={color || colors.black}
        width={size || 17}
        height={size || 17}
      />
    </View>
  );
};

export default Icon;
