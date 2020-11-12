import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import styles from '../styles/styles.js'

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard
} from 'react-native';
let b = ['oioi']
export default function addTask() {
  const [selectedValue, setSelectedValue] = useState("")
  const [task, setTask] = useState(["Tarefa um", "Tarefa dois", "Tarefa três"])
  const [newTask, setNewTask] = useState("")
  let a = ['oi']

  async function createTask() {
    const search = task.filter(task =>  task === newTask) // Verificar se já tem a tarefa em Task
    if (newTask == "") {
      return
    } else if (search.length !== 0) {
      Alert.alert("Erro ao adicionar a tarefa", newTask + " já existe na sua lista!")
      return
    }

    setTask([...task, newTask]) /// ... task -> atribuir tudo que já tinha em task + o newTask
    setNewTask("") // Limpar o input

    Keyboard.dismiss() // Dispensar o teclado após adicionar a tarefa
  }

  return (
      <View style={styles.container2}>
        <View style={styles.input}>
          <TextInput style={styles.inputStyle}
            placeholderTextColor="#BEBEBE"
            placeholder="Nova tarefa..."
            autoCorrect={true}
            onChangeText={text => setNewTask(text)} // Adicionar o valor do input em newTask sempre que ele alterar
            value={newTask}
          />

        </View>

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



        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.addButton} onPress={ () => createTask()}>
            <Text style={styles.txtBtn}>Add</Text>
          </TouchableOpacity>
        </View>
     </View>
    )
}
