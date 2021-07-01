import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchedElement, setSearchedElement ] = useState('')
  const [notifMessage, setNotifMessage] = useState('Message here...')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personsName = persons.map(person => person.name)

    if(personsName.includes(newName)){
      alert(`${newName} is already added to phonebook`)
    }else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length
      }

      console.log(personObject)
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotifMessage(
          `Added ${personObject.name}`
        )
        setTimeout(() => {
          setNotifMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id) => {
    const personToBeDeletedName = persons.find(currentPerson => currentPerson.id === id)
    console.log(personToBeDeletedName.name)
    if (window.confirm(`Delete ${personToBeDeletedName.name}?`)) {
      personService
      .deleteFromDb(id)
      .then(setPersons(persons.filter(currentPerson => currentPerson.id !== id)))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchElement = (event) => {
    setSearchedElement(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage} />
      <Filter handler={handleSearchElement} value={searchedElement}></Filter>
      <h2>add a new</h2>
      <PersonForm submit={addName} firstValue={newName} firstHandler={handleNameChange} secondValue={newNumber} secondHandler={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filterWord={searchedElement} deleteFunction={deletePerson}></Persons>
    </div>
  )
}

export default App
