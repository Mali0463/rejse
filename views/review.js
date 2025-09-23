import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Review({ route }) {
  const { country } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detaljer om landet</Text>
      {country ? (
        <Text style={styles.country}>{country} er et godt udvekslingsland! Maden er god og menneskerne er søde</Text>
      ) : (
        <Text>Ingen data valgt.</Text>
      )}
    </View>
    
  );
}

//design ag de 
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' },

  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 20 },

  country: { 
    fontSize: 18, 
    color: '#333' },
});