import { Component, useState } from 'react'
import './App.css'
import { useTodo } from './hooks/useTodo'
import { Poject } from './componentes/Poject'
import { TodoAdd } from './componentes/TodoAdd'
import { Button, useColorMode, Stack, ChakraProvider } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <Stack spacing={4} className='card-to-do'>
      <Stack
        spacing={4}
        direction='column'
        align='end'
      >
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Stack>
      <h1>Lista de tareas</h1>
      <div className='counter-todos'>
        <h3>
          N° Tareas: <span>{todosCount}</span>
        </h3>
        <h3>
          Pendientes: <span>{pendingTodosCount}</span>
        </h3>
      </div>
      <div className='add-todo'>
        <h3>Añadir Tarea</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
      <Poject
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </Stack>
  );
}




export default App
