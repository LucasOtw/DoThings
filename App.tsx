import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Pour connaitre la largeur de l'ecran et donc responsive

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
      <Image
          source={require('./Assets/profiluser.jpeg')} // Remplacez par le chemin de votre image
          style={styles.image}
        />
        <Text style={styles.text}>Good morning Lucas !</Text>
        <Text style={styles.textdebut}>Ma progression</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    width: '93%',
    height: '93%',
    marginLeft: 6,
    marginVertical: 0,
  },
  image: {
    borderRadius : 60,
    height : 40,
    width : 40,
    left : '40%',
    top : 29,
    marginBottom: 0,
  },
  textdebut: {
    fontWeight: 'bold',
    bottom : 460,
    right: 110,
    fontSize: 15,


  },

  square: {
    backgroundColor: '#0FC2FB',
    width: width * 0.9,
    height: 100,
    borderRadius: 15,
    marginLeft: 20,
    bottom: 430,

  },
  button1: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 35,
    width: width * 0.35,
    justifyContent: 'center',
    left: 178,
    top: 34,

  },
  textbutton1: {
    color : 'black',
    left: 10,
    fontSize: 15,
  },
});

export default App;
