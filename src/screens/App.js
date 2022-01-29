import { FlatList, StyleSheet, Text, View, Animated, Image, Dimensions } from 'react-native';
import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { DATA, PREPAID_MOBILE, TXT_DATA } from './DummyData';
import FlatListRenderItem from '../components/FlatListRenderItem/FlatListRenderItem';
import TrendingNow from '../components/TrendingNow/TrendingNow';
import PrepaidMobile from '../components/PrepaidMobile/PrepaidMobile';
import Indicator from '../components/Indicator/Indicator';


const App = ({ }) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width


  const renderItemPrepaid = ({ item }) => {
    return (
      <PrepaidMobile />
    )

  }

  const renderItem = ({ item }) => {
    return (
      <FlatListRenderItem item={item} />
    );
  };

  const renderItemText = ({ item, index }) => {
    return (
      <Indicator item={item} index={index} />
    );
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header />

      <FlatList
        contentContainerStyle={{ marginLeft: 5, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, marginBottom: -100 }}
        data={TXT_DATA}
        renderItem={renderItemText}
        keyExtractor={(item) => item.id}
      />

      <FlatList
        horizontal={true}
        contentContainerStyle={{ marginLeft: 5, marginBottom: 65 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={{
        marginTop: 0, height: "50%", backgroundColor: 'white'
      }} >

        <View style={{ marginTop: -95, }}>
          <Animated.FlatList
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
            data={PREPAID_MOBILE}
            renderItem={renderItemPrepaid}
            pagingEnabled={true}
            bounces={false}
            contentContainerStyle={{}}
            horizontal={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.dotsCon, { position: 'absolute', bottom: 280, right: 12, alignSelf: 'flex-end', }]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={PREPAID_MOBILE}
            renderItem={({ item, index }) => {
              const inputRange = [(index - 1) * windowWidth, index * windowWidth, (index + 1) * windowWidth];

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 1, 0.7],
                extrapolate: 'clamp',
              });

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 1, 0.7],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View style={[styles.circle, { opacity, transform: [{ scale }] }]} />
              )
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <TrendingNow />
      </View>

    </Container >
  );
};

export default App;

const styles = StyleSheet.create({
  circle: {
    height: 2,
    width: 20,
    borderRadius: 2,
    backgroundColor: "black",
  },
});
