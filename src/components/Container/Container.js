import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.mainCon, { ...style }]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: '#02114A',
  },
});
