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
        <ScrollView>
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

//design af Oversigt.js view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    height: 300,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    width: '80%',
    padding: 10,
  },
});