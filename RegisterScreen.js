import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const RegisterScreen = ({ navigation, setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (email && password) {
      setErrorMessage('');
      setUserData({ email, password });  // Store user data locally in App state
      Alert.alert('Success', 'Registration Successful!');
      navigation.navigate('Login');
    } else {
      setErrorMessage('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamer Register</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#b0b0b0" // Light grey placeholder
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#b0b0b0"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#ffffff', // White title
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'sans-serif-medium', // Stylish font
  },
  input: {
    height: 50,
    backgroundColor: '#1e1e1e', // Dark input background
    borderRadius: 15,
    borderColor: '#333333', // Dark grey border
    borderWidth: 1,
    color: '#ffffff', // White input text
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'sans-serif',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'linear-gradient(45deg, #1e90ff, #00bfff)', // Gradient blue button
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#00bfff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff', // White button text
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  linkText: {
    color: '#00bfff', // Blue link text for better contrast
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
  errorText: {
    color: '#ff4c4c', // Bright red for error messages
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
});

export default RegisterScreen;
