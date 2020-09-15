import React, {useState} from 'react';
import { render } from 'react-dom'
import './App.css';
import Member from './Member'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
  
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newMember.name || !newMember.name || !newMember.role){
      return
    }

    setTeamMembers(teamMembers.concat(newMember))
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <h1>Team Form</h1>

      <Form 
        values = {formValues}
        update = {updateForm}
        submit = {submitForm}
        />

    {
      teamMembers.map(member => {
        return (
          <Member key = {member.id} details={member} />
        )
      })
    }
    </div>

  )
}

render (
  <App />, document.querySelector('#root')
)

export default App;
