import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ updateUser, user }) => {
    const navigate = useNavigate()

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1)
    }

    return (
        <div className='homepage'>
            <div className="details">
                <h1>Welcome To Home Page, {capitalize(user.Name)}</h1>
                <button onClick={() => { updateUser({}); navigate("/login"); localStorage.setItem("Token",'') }}>Logout</button>
            </div>
        </div>
    )
}

export default Home