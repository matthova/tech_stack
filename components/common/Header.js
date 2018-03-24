import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#00D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20,
  },
};

const Header = ({ children }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

// Header.propTypes = {
//   children: Object,
// };

export { Header };
