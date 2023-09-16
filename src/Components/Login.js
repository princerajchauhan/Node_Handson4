import "./Login.css"

import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Login = ({updateUser}) => {
    const [value, setValue] = useState({
        Email: '',
        Password: ''
    })

    const navigate = useNavigate()

    const clickHandle = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(value)
        axios.post("https://prince-handson4-backend.onrender.com/login", value)
        .then(res => {
            // console.log(res.data.token)
            alert(res.data.msg); 
            if(res.data.details){
                updateUser(res.data.details)
                localStorage.setItem("Token",res.data.token)
                navigate("/home")
            }
        })
        .catch(err => console.log(err))

        setValue({
            Email: '',
            Password: ''
        })
    }

    return (
        <div className='login'>

            <form onSubmit={submitForm}>
                <div className="logstyle">
                    <h2 data-text="Login...">Login...</h2>
                </div>
                <label htmlFor="">Email</label>
                <input type="email" name='Email' value={value.Email} onChange={clickHandle} required /><br />

                <label htmlFor="">Password</label>
                <input type="password" name='Password'  autoComplete="off" value={value.Password} onChange={clickHandle} required /><br />

                <label className="forgot">Forgot Password</label>

                <button type='submit' className="submitBtn">Sign in</button>

                <p>Not registered yet? <Link to="/register">Click Here</Link></p>

            </form>
        </div>
    )
}

export default Login