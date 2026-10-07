import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

export default function TaskTrackerScreen() {
  // 1. State Management
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([
    { id: '1', title: 'Review React Native Hooks', completed: true },
    { id: '2', title: 'Finish Activity 3 Submission', completed: false },
  ]);

  // Add Task Handler
  const handleAddTask = () => {
    if (taskText.trim() === '') {
      Alert.alert('Empty Input', 'Please enter a task name.');
      return;
    }

    const newTask = {
      id: Date.now().toString(), // unique key
      title: taskText.trim(),
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskText(''); // Clear input
  };

  // Toggle Complete Handler
  const handleToggleComplete = (id) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete Task Handler
  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  // Render Item Component for FlatList
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={styles.taskTextContainer}
        onPress={() => handleToggleComplete(item.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, item.completed && styles.checkboxCompleted]}>
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.taskTitle, item.completed && styles.taskTitleCompleted]}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(item.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f8" />
      <View style={styles.wrapper}>
        
        {/* Header */}
        <Text style={styles.headerTitle}>Task Tracker</Text>
        <Text style={styles.subTitle}>
          {taskList.filter((t) => !t.completed).length} tasks remaining
        </Text>

        {/* User Input Section */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter new task..."
            placeholderTextColor="#9ca3af"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask} activeOpacity={0.8}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic FlatList */}
        <FlatList
          data={taskList}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No tasks found. Add one above!</Text>
            </View>
          }
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    color: '#111827',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#9ca3af',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#16a34a',
    borderColor: '#16a34a',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  taskTitle: {
    fontSize: 15,
    color: '#1f2937',
    flex: 1,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  deleteButton: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  deleteText: {
    color: '#dc2626',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 14,
  },
});