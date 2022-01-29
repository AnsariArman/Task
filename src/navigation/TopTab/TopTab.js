import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

//top tab third party
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';

//global
import Animated from 'react-native-reanimated';

const TopTab = ({
}) => {

  const Tab = createMaterialTopTabNavigator();

  function MyTabBar({ state, descriptors, navigation, position }) {
    animatedValue = new Animated.Value(0)

    return (
      <View style={{
        flexDirection: 'row', marginHorizontal: 70, borderRadius: 25, backgroundColor: 'skyblue',
        height: 45, width: 270
      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                justifyContent: 'center', backgroundColor: isFocused ? 'white' : 'skyblue', borderRadius: 50, height: 30, marginTop: 7,
                width: 120, marginLeft: 10,
              }}
            >
              <Animated.Text style={{ color: isFocused ? 'black' : 'white', alignSelf: 'center' }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

      <NavigationContainer >
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen
            name="Home" component={Home}
          />
          <Tab.Screen
            name="Mobile" component={Home}
          />
          <Tab.Screen
            name="Fiber" component={Home}
          />
        </Tab.Navigator>
      </NavigationContainer >

    </View >
  );
}
export default TopTab;
