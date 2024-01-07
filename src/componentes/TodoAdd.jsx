import React, { useState } from "react";
import { useForm } from "../hooks/useform";
import { Input, Button, useColorMode, AlertIcon, AlertTitle, Alert, AlertDescription } from '@chakra-ui/react'


export const TodoAdd = ({ handleNewTodo }) => {
  const { colorMode } = useColorMode()
  const [validation, setValidation] = useState(false)
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = e => {
    e.preventDefault();

    if (description.length <= 1) {
      setValidation(true)
      setTimeout(() => {
        setValidation(false)
        
      }, 2000);
      return
    };

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit} style={{ display: "flex", marginBottom: "15px" }}>
        <Input
          type='text'
          className='input-add'
          style={{ color: "white" }}
          name='description'
          value={description}
          onChange={onInputChange}
          placeholder='¿Qué hay que hacer?'
          _placeholder={{ color: colorMode === "dark" ? "white" : "black" }}
        />

        <Button type='submit'>
          Agregar
        </Button>
      </form>
      {validation === true ? <Alert status='error' style={{borderRadius: "10px"}}>
        <AlertIcon />
        <AlertDescription>Debe insertar mas de 1 caracter.</AlertDescription>

      </Alert> : null}
    </>
  );
};
