import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={require('./assets/images/Photo on 27-2-25 at 9.50 AM copy.jpg')}
        />
        <Text style={styles.name}>IRESH RAMASAMY</Text>
        <Text style={styles.bio}>plays fishing game (cod)</Text>
        <Text style={styles.bio}>never play minecwaft w me</Text>
        <Text style={styles.bio}>floorball man</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#add8e6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 350,
    height: 480,
  },
  profileImage: {
    width: 260,
    height: 220,
    borderRadius: 20,
    marginBottom: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 10,
  },
});
