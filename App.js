import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movimento from './components/Movimento';
import Teste from './components/Teste';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Movimento" component={Movimento}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name="walk-outline"
                          size={size}
                          color={color}
                        />
                      )
                    }}
        />
        <Tab.Screen name="Contador de Passos" component={Teste}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name="footsteps-outline"
                          size={size}
                          color={color}
                        />
                      )
                    }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
