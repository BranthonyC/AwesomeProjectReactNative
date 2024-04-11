// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BooksList from './src/screens/books/BooksList';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {ROUTES} from './src/helpers/routes';
import AddBookForm from './src/screens/books/AddBook';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// screenOptions={({navigation}) => ({
//   headerShown: false,
//   ...TransitionPresets.SlideFromRightIOS, // optional: slide animation for transition
// })}
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME.STACK.HOME}>
      <Stack.Screen
        name={ROUTES.HOME.STACK.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function BooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.BOOKS.STACK.BOOKS_LIST}
        component={BooksList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.BOOKS.STACK.NEW_BOOK}
        component={AddBookForm}
      />
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.HOME.HOME;

  switch (routeName) {
    case ROUTES.HOME.HOME:
      return 'Libreria Da Vinci';
    case ROUTES.BOOKS.STACK.BOOKS_LIST:
      return 'Lista de libros';
    case ROUTES.BOOKS.STACK.NEW_BOOK:
      return 'Agregar libro';
    default:
      return 'Not implemented yet';
  }
}
function shouldRenderDrawerParent(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
  switch (routeName) {
    case undefined:
    case ROUTES.BOOKS.STACK.BOOKS_LIST:
      return true;
    default:
      return false;
  }
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={ROUTES.HOME.INDEX}>
        <Drawer.Screen
          name={ROUTES.HOME.INDEX}
          component={HomeStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            drawerLabel: getHeaderTitle(route),
            headerShown: shouldRenderDrawerParent(route),
          })}
        />
        <Drawer.Screen
          name={ROUTES.BOOKS.INDEX}
          component={BooksStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            drawerLabel: getHeaderTitle(route),
            headerShown: shouldRenderDrawerParent(route),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;