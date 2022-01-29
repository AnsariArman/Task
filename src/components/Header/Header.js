import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Account from 'react-native-vector-icons/MaterialCommunityIcons'
import Menu from 'react-native-vector-icons/Entypo'
import BarCode from 'react-native-vector-icons/MaterialCommunityIcons'
import Notify from 'react-native-vector-icons/Ionicons'

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#02114A', marginVertical: 5, alignItems: 'center' }}>

      <View style={{ marginLeft: 20, marginRight: 10 }}>
        <Menu name='menu' size={30} color="white" />
      </View>
      <View>
        <TextInput
          style={{
            height: 30,
            width: 185,
            borderRadius: 16,
            padding: 2,
            backgroundColor: '#d4d4d450',
            color: 'white',
            paddingLeft: 12,
            fontWeight: "bold",
            marginTop: 5

          }}
          placeholder="MyJio search"
          placeholderTextColor={"#ffffff"}
        />
      </View>

      <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#34416E80', marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Account name='account' size={22} color="white" />
      </View>
      <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#34416E80', marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
        <BarCode name='barcode-scan' size={22} color="white" />
      </View>
      <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#34416E80', marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
        <Notify name='ios-notifications' size={22} color="white" />
        <View style={{ position: "absolute", backgroundColor: "#ea0202", height: 12, width: 12, top: 4, right: 4, borderRadius: 10 }}>
          <Text style={{ color: "white", marginTop: -2, fontSize: 10, alignSelf: "center", fontWeight: "bold" }}>1</Text>
        </View>
      </View>


    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
