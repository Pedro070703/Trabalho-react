import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import RandomCard from "../components/Pokerandom";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pokemon Aleatorio" component={RandomCard} />
      
    </Tab.Navigator>
  );
}
