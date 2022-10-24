import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const dummyArray = [
  { id: '1', value: 'Flamengo', image: require("./assets/fla.png") },
  { id: '2', value: 'Vasco',  image: require("./assets/vasc.png") },
  { id: '3', value: 'Fluminense',  image: require("./assets/flu.png") },
  { id: '4', value: 'Botafogo',  image: require("./assets/bota.png") },
];

//const imageUrl = "https://th.bing.com/th/id/OIP.JwcF3pZcjGSGkBiwWMCo4AHaE7?pid=ImgDet&rs=1";
const App = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      // FlatList Item
      
      <ImageBackground
       source={require("./assets/background.jpg")}
       style={styles.imageFundo}>
        <TouchableOpacity
          onPress={() => getItem(item)}>
          <Text
            style={styles.item}>
            {item.image}
            {item.value}
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    );
  };

  const getItem = (item) => {
    if (item.id == '1')
      alert('Campeonato Brasileiro (8 títulos) \n\n 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020');
    if (item.id == '2')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1974, 1989, 1997 e 2000');
    if (item.id == '3')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1970, 1984, 2010 e 2012');
    if (item.id == '4')
      alert('Campeonato Brasileiro (1 título) \n\n 1995.');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 70,
  },
  item: {
    
    
    padding: 5,
    fontSize: 28,
    marginVertical: 18,
    marginHorizontal: 26,
    height: 44,
    color: 'yellow',
  },
  imageFundo: {
    margin: 4,
  }
});

export default App;
