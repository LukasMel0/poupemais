import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  


  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity 
      
      style={styles.bnt}>
        <Text style={styles.text}>Click em mim</Text>
      </TouchableOpacity>
      <Text>{}</Text>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bnt:{
    borderWidth: 1,
    backgroundColor: '#2e0331',
    padding: 15,
    borderRadius: 10,
    shadowOpacity: 1
  },

  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
