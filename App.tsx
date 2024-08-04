import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.textbutton1}>Voir mes tâches</Text>
        </TouchableOpacity>
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
    width: 330,
    height: 100,
    borderRadius: 15,
    left: 22,
    bottom: 430,

  },
  button1: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 35,
    width: 130,
    justifyContent: 'center',
    left: 178,
    top: 34,

  },
  textbutton1: {
    fontWeight : 'bold',
    color : 'black',
    left: 10,
  }
});

export default App;
