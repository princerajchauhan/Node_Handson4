import React from 'react'
import { Link } from 'react-router-dom'

const Main = () =>{
    return(
        <div id='main'>
            <div className="prince">
                <h2 data-text="Prince">Prince</h2>
            </div>

            <div className="btns">
                <Link className="linkbtn" to="/login">Login</Link>
                <Link className="linkbtn" to="/register">Signup</Link>
            </div>

        </div>
    )
}

export default Main