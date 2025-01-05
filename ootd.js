// L'interface qui permet d'ajouter les vetements de l'armoire de l'user de façon manuel
console.log("oui");

import React from 'react';
import RNFS from 'react-native-fs';
import { View, Button, Alert, TextInput , Text, StyleSheet } from 'react-native'; //textInput= saisie de text, Text=affiche le text
const App () => {
  //Authetification
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const bd=getDatabase(app);

  const [email,SetEmail]=useState('');
  const [password,SetPassword]=useState('');

  const formRef = useRef(null);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
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
  


  const [formulaire, MAJFormulaire] = React.useState({ //useState creer un tableau avec l'etat de base de la variable ici formulaire, la maj qui permet 
    bas: '',
    haut: '',
    accessoires: '',
  });
  
  const ModifChamp = (field, value) => { // la fonction met à jour le formulaire qd il y aune modif
    MAJFormulaire({ ...formulaire, [field]: value });
  };

  const [formulaire2,MAJFormulaire2]= React.useState({
    matiere:'',
    taille:'',
    couleur:'',
  });

  const ModifChamp2= (field,value) =>{
    MAJFormulaire2({...formulaire2,[field]:value})
  };

  const SoumissionFormulaire = () => {
    console.log(formulaire,formulaire2);
    Alert.alert("Données soumises", JSON.stringify(formulaire,formulaire2));
  };

  const CheminAcces='${RNFS.DocumentDirectoryPath}/BD_Users.json';
  const fs= require("fs"); // c'est un module de node qui permet de lire/ecrire dans un fichier

  const connexionBD= async ()=> { 
    try{
      CheminAcces;
      await RNFS.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log('Données sauvegardées dans :', filePath);
    }   catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
    }
  };
  const readDataFromFile = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/BD_Users.json`;
  
      // Vérifier si le fichier existe
      const fileExists = await RNFS.exists(filePath);
  
      if (!fileExists) {
        console.log('Le fichier n\'existe pas.');
        return;
      }
  
      // Lire le contenu du fichier
      const content = await RNFS.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(content);
      console.log('Données lues :', jsonData);
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier :', error);
    }
  };



  return ( // l'interface de l'user
    <View style={styles.container}> //applique les styles definis dans l'interface
      <Button
        onPress={() => Alert.alert('Accès à l’armoire')}
        title="Armoire"
        color="black"
        accessibilityLabel="Bouton permettant l'accès à l'armoire"
      />
      <Text>Bas :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un bas"
        onChangeText={(value) => ModifChamp('bas', value)}
      />
      <Text>Haut :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un haut"
        onChangeText={(value) => ModifChamp('haut', value)}
      />
      <Text>Accessoires :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez des accessoires"
        onChangeText={(value) => ModifChamp('accessoires', value)}
      />
      <Button title="Suivant" onPress={SoumissionFormulaire} /> //recup les données
      <Button title="Lire les données" onPress={readDataFromFile} />
      <Button title="Ajouter des données" onPress={() => addDataToFile({ bas: 'Pantalon', haut: 'Pull', accessoires: 'Écharpe' })} /> 
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


