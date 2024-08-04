import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
      <Image
          source={require('./Assets/profiluser.jpeg')} // Remplacez par le chemin de votre image
          style={styles.image}
        />
        <Text style={styles.text}>Good morning Lucas !</Text>
      </View>
      <View style={styles.square}>
        <Text style={styles.text1}>
          Ma progression
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '93%',
    height: '93%',
  },
  image: {
    borderRadius : 60,
    height : 40,
    width : 40,
    left : '40%',
    top : 29,
  },
  square: {
    backgroundColor: '#0FC2FB',
    width: 300,
    height: 300,
    borderRadius: 15,
    left: 39,
    bottom: 100,
  },
  text1: {
    color : 'white',
    fontWeight : 'bold',
  }
});

export default App;
