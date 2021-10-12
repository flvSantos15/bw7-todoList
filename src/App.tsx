import React, { useState } from 'react';
import {
  Container,
  Area,
  Header
} from './App.styles'
import { Item } from './types/Item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea';

export default function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: 'Praticar React', done: false,
    },
    {
      id: 2, name: 'Praticar ReactNative', done: true,
    },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName, 
      done: false,
    })
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask}/>

        {/*Lista de tarefas*/}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
}
