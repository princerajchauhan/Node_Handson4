import "./Register.css"
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

const Signup = ({updateUser} ) => {
    const [value, setValue] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Password: ''
    })

    const navigate = useNavigate()

    const clickHandle = (event) => {
        // setValue({...value, [event.target.name]: event.targt.value})
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted...")
        // console.log(value)
        axios.post("https://prince-handson4-backend.onrender.com/signup", value)
        .then(res => {
            alert(res.data.msg)
            if (res.data.detail) {
                updateUser(res.data.detail)
                localStorage.setItem("Token",res.data.token)
                navigate("/home")
            }
        })
        .catch(err => console.log(err))
        setValue({
            Name: '',
            Phone: '',
            Email: '',
            Password: ''
        })

    }

    return (
        <div className='register'>
            <form onSubmit={submitForm} method='POST'>

                <div className="registStyle">
                    <h2 data-text="Register Here">Register Here</h2>
                </div>

                <label htmlFor="">Name</label>
                <input type="text" name='Name' value={value.Name} onChange={clickHandle} required /><br />

                <label htmlFor="">Phone</label>
                <input type="number" name='Phone' value={value.Phone} onChange={clickHandle} required /><br />

                <label htmlFor="">Email</label>
                <input type="email" name='Email' value={value.Email} onChange={clickHandle} required /><br />

                <label htmlFor="">Password</label>
                <input type="password" name='Password' autoComplete="off" value={value.Password} onChange={clickHandle} required /><br />

                <input type="Submit" value="Register" />

                <p>ALready registered? <Link to="/login">Click Here</Link></p>

            </form>
        </div>
    )
}

export default Signup