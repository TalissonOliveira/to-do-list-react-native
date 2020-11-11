import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoList from './src/pages/viewTask'
import addTask from './src/pages/addTask'

const Stack = createStackNavigator();

export default function App() {
	return (
    	<NavigationContainer>
	     	<Stack.Navigator initialRouteName="ToDoList">
	        	<Stack.Screen 
	        		name="Home" 
	        		component={ToDoList} 
	        		options={{
	        			headerShown: {
	        				headerMode: 'none'
	        			},
	        			headerShown: false
	        		}}
	        	/>
	        	<Stack.Screen 
	        		name="addTask"
	        		component={addTask}
	        		options={{
	        			title: 'Add Task',
	        			headerStyle: {
	        				backgroundColor: '#FFF'
	        			}
	        		}}
	        	/>
	      	</Stack.Navigator>
    	</NavigationContainer>
  	);
}