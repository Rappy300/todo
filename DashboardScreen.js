import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, TextInput, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Make a Wireframe', status: 'Urgent' },
    { id: '2', title: 'Video Apps Redesign', status: 'Completed' },
    { id: '3', title: 'Make a Wireframe', status: 'In Progress' },
    { id: '4', title: 'Send the CEO', status: 'In Progress' },
    { id: '5', title: 'Website Design', status: 'Upcoming' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now().toString(),
      title: newTask,
      status: 'Upcoming',
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markTaskAsDone = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'Completed' } : task
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={[styles.taskStatus, getStatusStyle(item.status)]}>{item.status}</Text>
      </View>
      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.doneButton}
          activeOpacity={0.7}
          onPress={() => markTaskAsDone(item.id)}
        >
          <Ionicons name="checkmark-done" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.7}
          onPress={() => deleteTask(item.id)}
        >
          <Ionicons name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Urgent':
        return { backgroundColor: '#ff4c4c', color: '#fff' };
      case 'Completed':
        return { backgroundColor: '#00bfff', color: '#fff' };
      case 'In Progress':
        return { backgroundColor: '#ffbf00', color: '#fff' };
      case 'Upcoming':
        return { backgroundColor: '#a0a0a0', color: '#fff' };
      default:
        return { backgroundColor: '#333', color: '#fff' };
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={styles.sidebarItem}
          activeOpacity={0.6}
          onPress={() => console.log('Navigate to Task List')}
        >
          <Ionicons name="ios-list" size={24} color="#fff" />
          <Text style={styles.sidebarText}>Task List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarItem}
          activeOpacity={0.6}
          onPress={() => console.log('Navigate to New Task')}
        >
          <Ionicons name="ios-create" size={24} color="#fff" />
          <Text style={styles.sidebarText}>New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarItem}
          activeOpacity={0.6}
          onPress={() => console.log('Navigate to Task Progress')}
        >
          <Ionicons name="ios-stats-chart" size={24} color="#fff" />
          <Text style={styles.sidebarText}>Task Progress</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Tasks</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.taskList}
          />
        </View>

        {/* Add Task Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new task"
            placeholderTextColor="#888"
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={addTask}
          >
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#1e1e1e',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#333',
  },
  sidebarText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  mainContent: {
    width: '80%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  taskList: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: '#333',
  },
  taskStatus: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontSize: 14,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4c4c',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
