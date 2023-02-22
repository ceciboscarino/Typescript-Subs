import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List';

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu a veces hace de moderador' 
  },
  {
    nick: 'sergio-serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]

interface Sub{
  nick: string,
  subMonths: number,
  avatar: string,
  description?: string 
}

interface AppState{
  subs: Array<Sub>
  newSubNum: number
}



function App() {
const [subs, setSubs]= useState<AppState["subs"]>([])
const [newSubNum, setNewSubNum]= useState<AppState["newSubNum"]>(0)

useEffect(() => {
  setSubs(INITIAL_STATE)
}, []
)

  return (
    <div className="App">
     <h1>midu subs</h1>
     <ul>
      <List subs={subs} /> 
     </ul>
    </div>
  );
}

export default App;
