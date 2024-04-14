import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ROUTES} from '../helpers/routes';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({type: 'INCREMENT'});
  };

  const decrementCounter = () => {
    dispatch({type: 'DECREMENT'});
  };
  return (
    <ImageBackground
      source={{uri: 'https://source.unsplash.com/1600x900/?books'}} // Replace URL with your image URL
      style={styles.container}
      blurRadius={1}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenidos a {counter}</Text>
        <Button title="Decrementar contador" onPress={decrementCounter} />
        <Button title="Incrementar contador" onPress={incrementCounter} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.BOOKS.STACK.BOOKS_LIST)}>
          <Text style={styles.buttonText}>Lista de libros</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});

HomeScreen.navigationOptions = ({navigation}) => ({
  headerShown: navigation.isFirstRouteInParent(), // Hide header if not the initial screen
});

export default HomeScreen;
