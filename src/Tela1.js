import React, { useState } from 'react';
import { searchTitleByName } from 'movier';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import FlatComponent from './components/FlatComponent';
import { TextInput } from 'react-native-gesture-handler';
import { Movie } from './model/movie';


const Tela1 = () => {


  const [movie, onChangeMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("Procure o nome de um filme");
  const [fullList, setFullList] = useState(false);
  const [enabledSearch, setEnabledSearch] = useState(true);

  const search = () => {

    setEnabledSearch(false)
    setMovies([])
    setFullList(false);
    setMessage("Aguarde...")

    searchTitleByName(movie).then((result) => {

      if (result.length === 0) {
        setMovies([])
        setFullList(false);
        setMessage("Sem Resultados")
      } else {
        var auxMovies = [];
        for (i = 0; i < 15; i++) {
          var data = result[i];
          auxMovies = [...auxMovies, new Movie(data['name'],
            data['titleYear'],
            data['titleType'],
            data['thumbnailImageUrl'])]
        }
        setMovies(auxMovies);
        setFullList(true);
      }

      setEnabledSearch(true)

    })
  }

  return (
    <View>

      <View style={styles.viewStyle}>
        <TextInput
          onChangeText={
            newText => {
              onChangeMovie(newText);
            }
          } style={styles.textInputStyle


          }></TextInput>

        <Icon name="search" size={30} color="black" style=
        {[styles.iconStyle, enabledSearch ? styles.enabledColor : styles.disabledColor]} onPress={() => {
          if (enabledSearch) {
            search();
          }
        }
        } />

      </View>

      {!fullList ? (
        <Text
          style={styles.messageListTextSytle}>
          {message}
        </Text>) : null}
      <FlatList data={movies} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    margin: 5
  },
  iconStyle: {
    flex: 0.5,
    alignSelf: "center",
    margin: 2,
  },
  enabledColor:{
    color:"black"
  },  
  disabledColor:{
    color:"grey"
  },
  messageListTextSytle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  textInputStyle: {
    flex: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  }
});
export default Tela1;