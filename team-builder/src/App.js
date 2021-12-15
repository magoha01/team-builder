
import React, { useState, useEffect } from 'react'
import Member from './Components/Member'
import MemberForm from './Components/MemberForm'


const membersList = [

  {
    id: 1,
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'Student'
  },

    {
      id: 2,
      name: 'Alvin',
      email: 'Alvin@Alvin.com',
      role: 'Backend Engineer'
    },

    {
      id: 3,
      name: 'Simon',
      email: 'Simon@Simon.com',
      role: 'Frontend Engineer'},

    {
      id: 4,
      name: 'Theodore',
      email: 'Theodore@Theodore.com',
      role: 'Designer'},

]
// the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App ( props ) {

  const [members, setMembers] = useState(membersList) // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues); // fix this using the state hook
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  // const change = (evt) => {
  //   const { value, name } = evt.target;
  //   /**
  //    * const value = evt.target.value
  //    * const name = evt.target.name
  //    */
  //   setFormValues({ ...formValues, [name]: value });
  //   /**
  //    * formValues = {
  //    *  petName: "",
  //    *  petType: "",
  //    * }
  //    */
  // }

  const submitForm = () => {
   
 
    const newMember= {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      setError("All fields are required, ya chump!!!");
    } else {
      setError("");
      setMembers(members.concat(newMember));
      setFormValues(initialFormValues);
    }
}

  return (

    <div className='container'>
      <h1>Form App</h1>
      <h2>{error}</h2>
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map((member) => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}