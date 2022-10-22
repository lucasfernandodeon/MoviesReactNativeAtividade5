import React, { useState } from 'react';
import { searchTitleByName } from 'movier';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import FlatComponent from './components/FlatComponent';
import { TextInput } from 'react-native-gesture-handler';
import { Movie } from './model/movie';


const Tela1 = () => {


  // const data = [
  //   { key: '0', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
  //   { key: '1', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' }
  // ]

  const [movie, onChangeMovie] = useState('');
  const [movies, setMovies] = useState([]);


  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          onChangeText={
            newText => {
              onChangeMovie(newText);
            }
          } style={{ flex: 2.5 }


          }></TextInput>

        <Icon name="search" size={30} color="black" style={{
          flex: 0.5,
          alignSelf: "center"
        }} onPress={
          () => searchTitleByName(movie).then((result) => {
            console.log(result);
            //var myObject = JSON.parse(result);
            var aux=[];
          
            for( i=0;i<5;i++){
              var dataAux = result[i];
              aux = [...aux, new Movie(dataAux['name'],
              dataAux['titleYear'],
              dataAux['titleType'],
              dataAux['thumbnailImageUrl'])]
            }
            setMovies(aux);
          })
        } />

      </View>
      <FlatList data={movies} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View>
  );
}

export default Tela1;