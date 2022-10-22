import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const FlatComponent = ({ data }) => {

  const navigation = useNavigation();


  const navegar = () => {
    navigation.navigate('Tela2', { data: data });
  }

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image source={{ uri: data.image }} resizeMode="contain" style={styles.imageStyle} />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text>{data.year}</Text>
        <Text>{data.type}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageStyle: { width: 100, height: 100 },
  container: {
    backgroundColor: '#cacaca',
    marginBottom: 5,
    flexDirection: 'row',
  },
  subcontainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default FlatComponent;