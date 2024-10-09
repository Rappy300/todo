import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Display Profile Information */}
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Ralph Ociones R.</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>ocionesralph300@gmail.com</Text>

        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>Ociones300</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#00bfff', // Bright blue title for emphasis
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'sans-serif-medium', // Modern font
  },
  profileContainer: {
    width: '85%',
    marginBottom: 50,
    backgroundColor: '#1e1e1e', // Slightly lighter background to make the profile section stand out
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: '#00bfff', // Consistent bright blue for labels
    fontFamily: 'sans-serif',
    marginBottom: 5,
  },
  info: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'sans-serif-light',
  },
  button: {
    backgroundColor: 'linear-gradient(45deg, #1e90ff, #00bfff)', // Gradient blue button
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#00bfff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff', // White button text
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
});

export default ProfileScreen;
