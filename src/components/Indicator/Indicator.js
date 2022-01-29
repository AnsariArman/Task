import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Indicator = ({ item, index }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: index == 0 ? '#fff' : "#d4d4d490", fontWeight: index == 0 ? 'bold' : "500", fontSize: index == 0 ? 17 : 13, marginTop: index == 0 ? 0 : 5 }}>{item.name}</Text>
      {index == 0 &&
        <View style={{ height: 3, width: 60, backgroundColor: 'white' }} />
      }
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({});
