import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RandomPokemon() {
  const [randomPokemon, setRandomPokemon] = useState(null);

  const getRandomPokemon = () => {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1; // Existem 898 Pokémon no total
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setRandomPokemon(data);
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
      });
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Pokémon</Text>
      {randomPokemon ? (
        <View style={styles.pokemonContainer}>
          <Image
            source={{ uri: randomPokemon.sprites.front_default }}
            style={styles.pokemonImage}
          />
          <Text style={styles.pokemonInfo}>Name: {randomPokemon.name}</Text>
          <Text style={styles.pokemonInfo}>Height: {randomPokemon.height}</Text>
          <Text style={styles.pokemonInfo}>Weight: {randomPokemon.weight}</Text>
          <Text style={styles.pokemonInfo}>Base Experience: {randomPokemon.base_experience}</Text>
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
      <Button title="New Random Pokémon" onPress={getRandomPokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  pokemonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  pokemonImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  pokemonInfo: {
    fontSize: 18,
    marginTop: 10,
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
  },
});
