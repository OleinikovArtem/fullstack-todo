import React, { Component } from 'react'
import { Footer } from './components/Footer/'
import Header from './components/Header/'
import Main from './components/Main/'
// import {fetchAllTodos, fetchCreateTodo, fetchDeleteTodo} from './util/Api'

const App = () => {
  return (
    <section className='todoapp'>
      <Header />
      <Main />
      <Footer />
    </section>
  )

}

export default App