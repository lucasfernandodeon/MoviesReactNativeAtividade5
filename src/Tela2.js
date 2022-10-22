import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tela2 = () => {

  const route = useRoute();

  const data = route.params.data;

  return (
    <View style={styles.viewStyle}>
      <Image source={{ uri: data.image }} style={styles.imageStyle} />
      <Text style={styles.textStyle}>FILME: {data.name}</Text>
      <Text style={styles.textStyle}>ANO: {data.year}</Text>
      <Text style={styles.textStyle}>TIPO: {data.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle:{
    color:'black',
    fontSize:20,
  },
  viewStyle:{
    margin:10
  },
  imageStyle:{
    width: 150, height: 300, alignSelf:"center"
  }
});

export default Tela2;