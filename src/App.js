import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	StatusBar
} from 'react-native';
import { FUNDO } from './styles/styles'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Inicial from './views/Inicial/Inicial';
import Home from './views/Home/Home';

const Stack = createStackNavigator()

const App = () => {
	return (
		<>
			<StatusBar backgroundColor="#CC7D00" />
			<NavigationContainer>
				<SafeAreaView style={styles.container}>
					<Stack.Navigator initialRouteName='Home'>
						<Stack.Screen
							name='Inicial'
							component={Inicial}
							options={{ headerShown: false }} />
						<Stack.Screen
							name='Home'
							component={Home}
							options={{ headerShown: false }} />
					</Stack.Navigator>
				</SafeAreaView>
			</NavigationContainer>
		</>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: FUNDO },
})

export default App;
