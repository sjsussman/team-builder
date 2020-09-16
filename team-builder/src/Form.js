import React from 'react'

export default function Form(props) {

  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value) 
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return (
    <form onSubmit={onSubmit}>
      <div>

        <label>Name
            <input 
                type='text' 
                name='name'
                value={values.name} 
                onChange={onChange}
                placeholder = 'type members name'
                maxLength = '30'
            />
        </label><br />

        <label>Email
            <input
                type='email'
                name='email'
                value={values.email}
                onChange = {onChange}
                placeholder = 'type an email'
                maxLength = '30'
            />
        </label> <br />


        <label>Role
          <select name='role' value={values.role} onChange = {onChange}>
          
          <option value=''>-- Select Role --</option>
          <option value='Project Lead'>Project Lead</option>
          <option value='Front End Developer'>Front End Developer</option>
          <option value='Back End Developer'>Back End Development</option>

          </select>

        </label>
        
        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}

