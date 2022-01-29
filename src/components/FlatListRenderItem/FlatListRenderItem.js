import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width
const FlatListRenderItem = ({ item }) => {
  return (
    <View style={{ width: windowWidth * 0.72, marginHorizontal: 5 }}>
      <Image borderRadius={10} source={{ uri: item.image }} style={{ height: 180, width: "100%" }} />
    </View>
  );
};

export default FlatListRenderItem;

const styles = StyleSheet.create({});
