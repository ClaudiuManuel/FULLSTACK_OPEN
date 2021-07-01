import React from 'react'
import Person from "./Person"
import personService from "../services/persons"

const Persons = ({ persons,filterWord,deleteFunction }) => {
  return (
    <ul>
      {persons.map(currentPerson =>{
          if(currentPerson.name.includes(filterWord)) 
            return <Person key={currentPerson.name} person={currentPerson} deletePerson={() => deleteFunction(currentPerson.id)} />
          else
            return ""
        }
      )}
    </ul>
  )
}

export default Persons