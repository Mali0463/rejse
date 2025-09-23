import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Review({ route }) {
  const { country } = route.params || {};

  return (
   <View style={styles.container}>
  <Text style={styles.title}>Detaljer om landet</Text>  

  {country ? (
    <View style={styles.reviewCard}>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.reviewText}>
        "{country} er et godt udvekslingsland! Maden er god og menneskerne er søde."
      </Text>
      <Text style={styles.reviewer}>⭐️⭐️⭐️⭐️ – Anbefalet af studerende</Text>
    </View>
  ) : (
    <Text>Ingen data valgt.</Text>
  )}
</View>
);}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F3F4F6',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
  },

  title: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#111827',
    marginBottom: 20,
  },

  reviewCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  country: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#1F2937',
    marginBottom: 10,
  },

  reviewText: { 
    fontSize: 16, 
    fontStyle: 'italic',
    color: '#374151',
    marginBottom: 12,
    lineHeight: 22,
  },

  reviewer: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'right',
  },
});
