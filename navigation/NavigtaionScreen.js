import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Color/Colors';
import BlogActivityScreen from '../screens/BlogActivityScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import CreateBlogScreen from '../screens/CreateBlogScreen';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BlogScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#2c387e'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'GoogleSans-Bold',
        },
      }}>
      <Stack.Screen
        name="AllBlogs"
        component={BlogActivityScreen}
        options={{title: 'Bloggers'}}
      />
      <Stack.Screen
        name="BlogDetails"
        component={BlogDetailScreen}
        options={({route}) => ({
          title: route.params.blogName,
        })}
      />
    </Stack.Navigator>
  );
};
const CreateScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="createBlog" component={CreateBlogScreen} />
    </Stack.Navigator>
  );
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={BlogScreen}
        options={{
          tabBarLabel: 'Blogs',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: Colors.secondary,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarInactiveBackgroundColor: '#fff',
          tabBarIcon: ({focused}) => {
            console.log(focused);
            return (
              <Icon
                name="home"
                color={focused ? '#fff' : Colors.secondary}
                size={26}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: 'Create Blog',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: Colors.secondary,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarInactiveBackgroundColor: '#fff',
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus-circle"
              color={focused ? '#fff' : Colors.secondary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: Colors.secondary,
          tabBarActiveBackgroundColor: Colors.primary,
          tabBarInactiveBackgroundColor: '#fff',
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              color={focused ? '#fff' : Colors.secondary}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
