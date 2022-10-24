import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CardComponent from './components/CardComponent.js'

export default function App() {
  return (

    <View style={styles.card}>
    <ScrollView >
      
      
     
     <CardComponent />
     
     <CardComponent />
     
     <CardComponent />
     <CardComponent />
     <CardComponent />

    </ScrollView>
    </View>

  );
 
}

const styles = StyleSheet.create({
  card: {
    
    marginTop:100,
    flex: 4,
    backgroundColor: '#fff',
   
   
    justifyContent: 'center' 
  }
});
