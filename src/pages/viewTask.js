import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from '../styles/styles.js'
import addTask from './addTask.js'
import { 
  Text,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Ionicons, Feather } from '@expo/vector-icons';

  


export default function ToDoList({ navigation }) {
  const [task, setTask] = useState(["Tarefa um", "Tarefa dois", "Tarefa três"])
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={0}
    behavior="padding"
    style={{ flex: 1}}
    enabled={Platform.OS === 'ios'}
    >
    <View style={styles.container}>
    {/* Header */}
      <View style={styles.header}>
          <Text style={styles.title}>TODO
            <Text style={{fontWeight: 'bold'}}>LIST</Text>
          </Text>
      </View>
    {/* Inputs*/}  

    {/* Prioridades */}
      
      <View style={styles.selectPriority}>
        <TouchableOpacity style={styles.priority}>
          <Text style={styles.textPriority}>Low</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.priority}>
          <Text style={styles.textPriority}>Medium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.priority}>
          <Text style={styles.textPriority}>High</Text>
        </TouchableOpacity>
      </View>

    {/* Body */}
      <View style={styles.body}>
        <FlatList style={styles.flatList} 
          data={task}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.viewTask}>
              <Text style={styles.textTask}>{item}</Text>
              <TouchableOpacity>
                <Feather name="delete" size={24} color="#F32222" />
              </TouchableOpacity>
            </View>

          )}

        />
      </View>
    {/* Botão */}
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('addTask')}>
            <Ionicons name="ios-add" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>



      <StatusBar style="auto" />
    </View>
    </KeyboardAvoidingView>
  );
}

