import React, { useState, KeyboardEvent } from 'react'
import {
  Container,
} from './styles'

//crio um tipo pra receber a função
type Props = {
  onEnter: (taskName: string) => void,
}

export default function AddArea({ onEnter }: Props){
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    //se a tecla clicada foi enter e tinha algo no input, faça...
    if(e.code === 'Enter' && inputText !== ''){
      //chamo a função em outro componente passando o texto
      onEnter(inputText)
      setInputText('')
    }
  }
  return(
    <Container>
      <div className='image'> + </div>
      <input 
        type='text' 
        placeholder='Adicione uma tarefa' 
        value={inputText}
        onChange={(e) => {setInputText(e.target.value)}}
        onKeyUp={handleKeyUp}
      />
    </Container>
  )
}