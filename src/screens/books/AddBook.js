import React, {useState} from 'react';
import {View, Text, TextInput, Button, Switch, StyleSheet} from 'react-native';
import BookFactory from '../../factories/BookFactory';

const AddBookForm = ({onAddBook}) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    price: '',
    status: false,
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newBook = BookFactory.createBook(formState);
    onAddBook(newBook);
    setFormState({
      title: '',
      author: '',
      price: '',
      status: false,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={formState.title}
        name="title"
        onChangeText={handleChange}
        placeholder="Enter title"
      />
      <Text style={styles.label}>Author</Text>
      <TextInput
        style={styles.input}
        value={formState.author}
        name="author"
        onChangeText={handleChange}
        placeholder="Enter author"
      />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={formState.price}
        name="price"
        onChangeText={handleChange}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Status</Text>
        <Switch
          value={formState.status}
          onValueChange={handleChange}
          name="status"
        />
      </View>
      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default AddBookForm;
