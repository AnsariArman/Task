import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PrepaidMobile = () => {
  return (
    <View style={{ borderRadius: 10, marginTop: 0, backgroundColor: '#FACA1E', padding: 5, height: 200, marginHorizontal: 10, width: 375 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 10 }}>

        <View>
          <Text style={{ color: '#00000090', fontWeight: 'bold', fontSize: 12 }}>PREPAID MOBILE</Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 3 }}>7977655731</Text>
        </View>

        <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#747474', width: 125, height: 35, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
          <Text style={{ color: '#0d47a1', fontSize: 16, fontWeight: "700" }}>Recharge</Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10 }}>

        <View>
          <Text style={{ color: '#00000090', fontWeight: 'bold', fontSize: 12 }}>PLAN</Text>
          <Text style={{ color: 'black', fontWeight: '900', fontSize: 18, marginLeft: 2 }}>₹ 555</Text>
          <Text style={{ color: '#00000090', fontWeight: 'bold', fontSize: 12, marginTop: 1 }}>expires on 01 Jan 2022</Text>
          <Text style={{ color: '#0d47a1', fontWeight: 'bold', fontSize: 13, marginTop: 1 }}>View plan details</Text>
        </View>

        <View style={{ marginLeft: 60 }}>
          <Text style={{ color: '#00000090', fontWeight: 'bold', fontSize: 12 }}>DATA BALANCE</Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>1.48 GB</Text>
          <Text style={{ color: '#00000090', fontWeight: 'bold', fontSize: 12, marginTop: 1 }}>remaining of 1.50 GB</Text>
          <Text style={{ color: '#0d47a1', fontWeight: 'bold', fontSize: 13, marginTop: 1 }}>View data usage</Text>
        </View>

      </View>

      <View style={{ height: 1.5, backgroundColor: 'white', marginHorizontal: 10, marginTop: 10 }} />

      <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

        <View>
          <Text style={{ color: '#0d47a1', fontWeight: 'bold', fontSize: 13 }}>Switch Account</Text>
        </View>

        <View style={{ marginLeft: 40 }}>
          <Text style={{ color: '#0d47a1', fontWeight: 'bold', fontSize: 13 }}>Go to Mobile</Text>
        </View>

      </View>

    </View>


  );
};

export default PrepaidMobile;

const styles = StyleSheet.create({});
