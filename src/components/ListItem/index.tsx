import React, { useState } from 'react'
import {
  Container,
} from './styles'

import { Item } from '../../types/Item';

type Props = {
  item: Item
}

export default function ListItem({ item }: Props){
  const [isChecked, setIsChecked] = useState(item.done)

  //Tarefa mudar o valor de done no componente app
  const handleCheckDone = () => {
    //se clicou mudar o valor de item.done
    
  }
  return(
    <Container done={isChecked}>
      <input 
        type='checkbox' 
        checked={isChecked}
        //pego o evento e chamo o useState para setar o valor de isChecked
        onChange={e => setIsChecked(e.target.checked)}
        onClick={() => {alert('clicou!')}}
      />
      <label>{item.name}</label>
    </Container>
  )
}