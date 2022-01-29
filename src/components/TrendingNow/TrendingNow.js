import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
import Tunes from 'react-native-vector-icons/SimpleLineIcons';
import Phone from 'react-native-vector-icons/MaterialCommunityIcons';
import Fire from 'react-native-vector-icons/MaterialCommunityIcons';
import Gift from 'react-native-vector-icons/Octicons';



const TrendingNow = ({ }) => {
  return (
    <View style={{ borderRadius: 10, marginTop: 40, backgroundColor: '#fff', padding: 5, height: 150, elevation: 3, borderWidth: 0.5, borderColor: "#74747410", marginHorizontal: 10 }}>

      <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20, }}>

        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#e8e7f9', marginLeft: 0, justifyContent: 'center', alignItems: 'center' }}>
          <Fire name='fire' size={25} color="#344B71" />
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Trending now</Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5, justifyContent: 'space-around' }}>

        <View style={{}}>
          <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#e8e7f9', marginLeft: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Gift name='gift' size={25} color="#344B71" />
          </View>

          <Text style={{ color: '#747474', fontWeight: 'bold', fontSize: 10, width: 50, marginTop: 8 }}>4G data vouchers</Text>
        </View>


        <View>
          <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#e8e7f9', marginLeft: 0, justifyContent: 'center', alignItems: 'center', alignSelf: "center" }}>
            <Account name='account' size={22} color="#344B71" />
          </View>

          <Text style={{ color: '#747474', fontWeight: 'bold', fontSize: 10, width: 60, marginTop: 8 }}>Recharge for</Text>
          <Text style={{ color: '#747474', fontWeight: 'bold', fontSize: 10, width: 60, marginLeft: 2 }}> a friend</Text>

        </View>


        <View>
          <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#e8e7f9', marginLeft: 0, justifyContent: 'center', alignItems: 'center', alignSelf: "center" }}>
            <Tunes name='music-tone' size={25} color="#344B71" />
          </View>

          <Text style={{ color: '#747474', fontWeight: 'bold', fontSize: 10, width: 50, marginTop: 8 }}>JioTunes</Text>
        </View>


        <View style={{}}>
          <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#e8e7f9', marginLeft: 0, justifyContent: 'center', alignItems: 'center', alignSelf: "center", }}>
            <Phone name='phone-message-outline' size={25} color="#344B71" />
          </View>

          <Text style={{ color: '#747474', fontWeight: 'bold', fontSize: 10, marginTop: 8 }}>Help & support</Text>
        </View>

      </View>

    </View>
  );
};

export default TrendingNow;

const styles = StyleSheet.create({});
