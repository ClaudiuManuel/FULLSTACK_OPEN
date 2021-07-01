import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
        <div>
          name: <input 
                  value={props.firstValue}
                  onChange={props.firstHandler}
                />
        </div>
        <div>
          number: <input
                  value={props.secondValue} 
                  onChange={props.secondHandler}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm