import './App.css';
import { useState, useEffect } from 'react';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import {Button, TextField, Fab} from "@mui/material";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState();

  const addItem = async () => {
    await addDoc(collection(db, "todo"), {item: newItem});
    window.location.reload(true);
  }

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "todo", id));
    window.location.reload(true);
  }
  

  useEffect (() => {
    const listCollectionRef = collection(db, "todo");

    const getItems = async () => {
      const data = await getDocs(listCollectionRef);
      setItems(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      //console.log(items);
    };
    getItems();
  })

  return (
    <main>
    <h1>To Do List</h1>
    <TextField className="tf" onChange = {(event) => setNewItem(event.target.value)} /><Button className="b" variant="outlined" onClick={addItem}>Add to List</Button>
    <ul>
    {items.map((item) => (
      <li>{item.item} <Fab className="resize" size="small" aria-label="remove" onClick = {() => {deleteItem(item.id)}}>✖</Fab></li>
    ))}
    </ul>
    </main>
  );
}

export default App;
