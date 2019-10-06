import React from 'react'
import { Link } from 'react-router-dom'

const invalid = () => {
    return(
        <div>
            <h3>Please login to continue</h3>
            <Link to='/' >Login</Link>
        </div>
    );
}

export default invalid