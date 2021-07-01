
const Course = ({ course }) => {
    return (
        <div>
          <Header title = {course.name}/>
          <Content parts = {course.parts}/>
          <Total parts = {course.parts}/>
        </div>
      )
  }

const Header = (props) => {
    return(
    <div>
      <h1>{props.title}</h1>
    </div>
    )
  }
  
  const Content = (props) => {
    var parts = props.parts
    return(
      <div>
        {parts.map(partProp =>
            <Part part={partProp.name} exercises={partProp.exercises}/>  
        )}
      </div>
    )
  }
  
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    return(
    <div>
      <p>Total of {props.parts.reduce((total,part) =>
          total + part.exercises,0
        )} exercises</p>
    </div>
    )
  }

  export default Course