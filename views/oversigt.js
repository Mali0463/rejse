import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COUNTRIES } from '../components/data'; //Data.js med lande i 
import ListButton from '../components/list';
import { useNavigation } from '@react-navigation/native';

//her er der lavet en liste over landet, det er knapper hvor man bliver videre ført til et review om landet 
export default function OversigtScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Udvekslingslande</Text>
  
      <View style={styles.listContainer}>
        <ScrollView> //ScrollView bruges til at gøre det muligt at scrolle gennem listen af lande
          {COUNTRIES.map((country, index) => (
            <ListButton
            key={index}
            title={country}
            onPress={() => navigation.getParent()?.navigate('Review', { country })}/>
          ))}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Jeg prøvede at lave et separate stylesheet, men det virkede ikke, så jeg har lavet det her i samme fil
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // lys neutral baggrund
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827', // mørkere grå for bedre kontrast
    marginBottom: 24,
  },
  listContainer: {
    height: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '85%',
    padding: 16,
    shadowColor: '#000', // let skygge for "kort"-look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android skygge
  },
});