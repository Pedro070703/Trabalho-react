import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import RandomCard from "../components/Pokerandom";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#003366",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginForm}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: color, 
                borderRadius: 15, 
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: color,
                borderRadius: 15,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pokemon Aleatorio"
        component={RandomCard}
        options={{
          tabBarLabel: "Pokemon Aleatório",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: color,
                borderRadius: 15,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
