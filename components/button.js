import { Pressable, Text, StyleSheet } from 'react-native';
//pressable, er funktionen der gør man at der sker en reaktion når man trykker på knappen

// En generel knap, som kan bruges i alle Views, som kan navigere mellem views
export default function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
    //pressable er knappen, mens onPress funktionen 
  );
}

// Jeg prøvede at lave et separate stylesheet, men det virkede ikke, så jeg har lavet det her i samme fil
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#1e88e5', // tilføjet baggrundsfarve
    borderWidth: 1,             // så borderColor virker
    borderColor: 'black',
    margin: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});