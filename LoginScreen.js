import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation, userData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (userData && email === userData.email && password === userData.password) {
      setErrorMessage('');
      navigation.navigate('Dashboard'); // Navigate to Dashboard after login
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
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
        placeholderTextColor="#b0b0b0" // Light grey placeholder
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    color: '#ffffff', // White title text
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'sans-serif-medium',
  },
  input: {
    height: 50,
    borderColor: '#444444', // Dark grey border
    borderWidth: 1,
    borderRadius: 10,
    color: '#ffffff', // White text
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'sans-serif',
    backgroundColor: '#1e1e1e', // Darker background for input field
    shadowColor: '#000', // Input shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'linear-gradient(45deg, #1e90ff, #00bfff)', // Gradient button
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
    color: '#ffffff', // White text for contrast
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  linkText: {
    color: '#1e90ff', // Light blue link text for contrast
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'sans-serif-light',
    marginTop: 10,
  },
  errorText: {
    color: '#ff4c4c', // Red for error message
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;
