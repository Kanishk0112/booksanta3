import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./Apptabnavigator";
import CustomsideBar from "./Customsidebymenu";
export const AppDrawerNavigator=createDrawerNavigator({
    home:{screen:AppTabNavigator},
    },
    {contentComponent:CustomsideBar},{
        initialRouteName:"home"
})