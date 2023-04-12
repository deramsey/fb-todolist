# To Do List Application

This is a simple To Do List app using React, Firebase, and Material-UI. The app allows users to add and remove items from their To Do List.

## Imports
import './App.css'; - Import the CSS styling for the app.
import { useState, useEffect } from 'react'; - Import useState and useEffect hooks from React.
import { db } from "./firebase"; - Import the Firebase database configuration.
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"; - Import Firestore methods.
import {Button, TextField, Fab} from "@mui/material"; - Import Material-UI components.

## Functional Component
function App() { ... } - The main functional component of the app.
State Variables
const [items, setItems] = useState([]); - State variable to store the list of items.
const [newItem, setNewItem] = useState(); - State variable to store the new item input.

## Functions
const addItem = async () => { ... } - Asynchronous function to add an item to the list.
const deleteItem = async (id) => { ... } - Asynchronous function to delete an item from the list based on its ID.

## useEffect
useEffect(() => { ... }) - useEffect hook to fetch the items from the Firestore collection.
Rendered Components
The rendered components include a title, TextField for input, a Button to add items, and a list of items with a Fab component to delete each item.
