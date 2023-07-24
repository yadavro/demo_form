import React, { useState } from 'react'
import Validation from './Validation';


const FormComponent = () => {

  const [userInput, setuserInput] = useState({
    username: "",
    age: "",
    email: "",
    phone: "",
    password: ""
  })
  const [Record, setRecord] = useState([]);
  const [errors, setError] = useState({});

  const changeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setuserInput({...userInput, [name] : value});
  }

  const handleValidation = (e)=>{
    e.preventDefault();
    setError(Validation(userInput))
    if(errors.hasError === false)
    handleSubmit(e);
  }

  const handleSubmit = (e)=>{
    // e.preventDefault();
    
    
    const newRecord = {...userInput , id: new Date().getTime().toString()}

    setRecord([...Record, newRecord]);

    setuserInput({username: "", age: "", email: "", phone: "", password: ""});
  }

  return (
    <div>
        <form action="">
          <h2>FORM</h2>
          <div>
            <p htmlFor='username'>Name:</p>
            <input type='text' autoComplete='off' value={userInput.username} onChange={changeHandler} name='username' id='username'/>
            {errors.username && <p className='errorShow'>{errors.username}</p>}
          </div>

          <div>
            <p htmlFor='age'>Age:</p>
            <input type='text' autoComplete='off' value={userInput.age} onChange={changeHandler} name='age' id='age'/>
            {errors.age && <p className='errorShow'>{errors.age}</p>}
          </div>

          <div>
            <p htmlFor='email'>Email:</p>
            <input type='email' autoComplete='off' value={userInput.email} onChange={changeHandler} name='email' id='email'/>
            {errors.email && <p className='errorShow'>{errors.email}</p>}
          </div>

          <div>
            <p htmlFor='phone'>Phone:</p>
            <input type='text' autoComplete='off' value={userInput.phone} onChange={changeHandler} name='phone' id='phone'/>
            {errors.phone && <p className='errorShow'>{errors.phone}</p>}
          </div>

          <div>
            <p htmlFor='password'>Password:</p>
            <input type='password' autoComplete='off' value={userInput.password} onChange={changeHandler} name='password' id='password'/>
            {errors.password && <p className='errorShow'>{errors.password}</p>}
          </div>

          <button type='submit' onClick={handleValidation}>Submit</button>

        </form>

        <div>
          {
            Record.map((currEle, i)=>{
              const {id, username, age, email, phone, password} = currEle;
              return(
                <div className='ShowData' key={id}>
                  <h3>Entered Data: &nbsp;{i+1}</h3>
                  <p>Name: &nbsp;&nbsp;&nbsp;{username}</p>
                  <p>Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{age}</p>
                  <p>Email: &nbsp;&nbsp;&nbsp;{email}</p>
                  <p>Phone: &nbsp;&nbsp;{phone}</p>
                  <p>Password: &nbsp;{password}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default FormComponent
