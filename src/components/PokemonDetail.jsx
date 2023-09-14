import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PokemonDetail({ route }) {
  const { name } = route.params;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));
  }, [name]);

  if (!pokemonData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemonData.sprites.front_default }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>Name: {pokemonData.name}</Text>
      <Text style={styles.pokemonInfo}>Height: {pokemonData.height} decimetres</Text>
      <Text style={styles.pokemonInfo}>Weight: {pokemonData.weight} hectograms</Text>
      <Text style={styles.pokemonInfo}>Base Experience: {pokemonData.base_experience}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: 'white',
  },
  pokemonImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  pokemonInfo: {
    fontSize: 18,
    color: 'white',
  },
});
