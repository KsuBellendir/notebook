import React from 'react';
import './SignUp.css'
import { useForm } from "react-hook-form";
import {NavLink} from 'react-router-dom';

function SignUp() {
    const {register, handleSubmit, formState:{errors}} = useForm({ mode: 'onBlur'});
    const onSubmit = (data) => {
        console.log(data)
/*         axios.put('http://localhost:8080/vprolete/person/2', {data})
        .then(res =>{
        getPers()
        }).catch(error => {
        console.error(error)
        });  */
} 
  return (
    <div className='form-container'>
         <form className='register-form' onSubmit={handleSubmit((data) => onSubmit(data))}>
            <input {...register('firstName')} placeholder='Имя' className="form-field"/>
            <input {...register('email')} placeholder='Email' className="form-field"/>
            <NavLink to='/home'>  <input type="submit" className="form-button" /></NavLink>
          
         </form>
    </div>
  )
}

export default SignUp