import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart } from './screens/Cart';
import {Provider} from 'react-redux';
import store from './store';
import { getCategories } from './store/actions/categories.actions';

import { Home } from './screens/Home';

export default function App() {

  const Tab = createBottomTabNavigator();

  // store.dispatch(getCategories);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'home'
                        : 'home-outline'
                    }
                    size= {30}
                    color={color}
                  />
                );
              } else if (route.name === 'Cart') {
                return (
                  <Ionicons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={30}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: 'tomato',
            headerTitleAlign: 'center',
            tabBarStyle: styles.tabBar
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
          />
          <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 3 }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    color: 'white',
  }
})

