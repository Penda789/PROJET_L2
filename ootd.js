// L'interface qui permet d'ajouter les vêtements de l'armoire de l'utilisateur de façon manuelle
import React, { useState, useRef } from 'react';
import { View, Button, Alert, TextInput, Text, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDAA1i7B37UQG5DBinRu_wWeGeh9nEiUB0",
  authDomain: "ootd-b9ba9.firebaseapp.com",
  databaseURL: "https://ootd-b9ba9-default-rtdb.firebaseio.com",
  projectId: "ootd-b9ba9",
  storageBucket: "ootd-b9ba9.firebasestorage.app",
  messagingSenderId: "966998204208",
  appId: "1:966998204208:web:0570c715a2aac8aa0372f5",
  measurementId: "G-VQP45EZNS9"
};

const App = () => {
  // Initialisation Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//connexion utilisateur
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  // États pour l'authentification
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // États pour les formulaires
  const [formulaire, setFormulaire] = useState({
    bas: '',
    haut: '',
    accessoires: '',
  });

  const [formulaire2, setFormulaire2] = useState({
    matiere: '',
    taille: '',
    couleur: '',
  });

  const modifChamp = (field, value) => {
    setFormulaire({ ...formulaire, [field]: value });
  };

  const modifChamp2 = (field, value) => {
    setFormulaire2({ ...formulaire2, [field]: value });
  };

  const soumissionFormulaire = () => {
    console.log(formulaire, formulaire2);
    Alert.alert('Données soumises', JSON.stringify({ formulaire, formulaire2 }));
  };

  const cheminAcces = `${RNFS.DocumentDirectoryPath}/BD_Users.json`;

  const addDataToFile = async (data) => {
    try {
      await RNFS.writeFile(cheminAcces, JSON.stringify(data, null, 2), 'utf8');
      console.log('Données sauvegardées dans :', cheminAcces);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
    }
  };

  const readDataFromFile = async () => {
    try {
      const fileExists = await RNFS.exists(cheminAcces);
      if (!fileExists) {
        console.log("Le fichier n'existe pas.");
        return;
      }

      const content = await RNFS.readFile(cheminAcces, 'utf8');
      const jsonData = JSON.parse(content);
      console.log('Données lues :', jsonData);
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => Alert.alert("Accès à l'armoire")}
        title="Armoire"
        color="black"
        accessibilityLabel="Bouton permettant l'accès à l'armoire"
      />
      <Text>Bas :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un bas"
        onChangeText={(value) => modifChamp('bas', value)}
      />
      <Text>Haut :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un haut"
        onChangeText={(value) => modifChamp('haut', value)}
      />
      <Text>Accessoires :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez des accessoires"
        onChangeText={(value) => modifChamp('accessoires', value)}
      />
      <Button title="Soumettre" onPress={soumissionFormulaire} />
      <Button title="Lire les données" onPress={readDataFromFile} />
      <Button
        title="Ajouter des données"
        onPress={() =>
          addDataToFile({ bas: 'Pantalon', haut: 'Pull', accessoires: 'Écharpe' })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
  },
});

export default App;



