import React from 'react';
import {RefreshControl} from 'react-native';
import {theme} from '../styles/theme';

const Refresh = ({
  onRefresh,
  refreshing = false,
  colors = [theme.colors.white],
  tintColor = theme.colors.primary,
  ...rest
}) => (
  <RefreshControl
    {...rest}
    // progressBackgroundColor={theme.colors.blue}
    tintColor={tintColor}
    colors={colors}
    refreshing={refreshing}
    onRefresh={onRefresh}
  />
);

export default Refresh;
