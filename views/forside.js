//Forside af appen 
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/button';

const Forside = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Know Before You Go</Text>
      <CustomButton title="Gå til Oversigt" onPress={() => navigation.navigate('Oversigt')}/> {/* Der er tilføjet en general knap, som er lavet i CustomButton.js */}
    </View>
    );
};

// Jeg prøvede at lave et separate stylesheet, men det virkede ikke, så jeg har lavet det her i samme fil
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    marginBottom: 20,
  },
});

export default Forside;
