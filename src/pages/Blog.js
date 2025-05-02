import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import User from '../components/UserDataApi';

export default function Blog() {
    const [userVisible, setuserVisible] = useState();
    return (
    <div className='container'>
        <ul>
            <li><Link to='/blog/1'>Blog 1</Link></li>
            <li><Link to='/blog/2'>Blog 2</Link></li>
        </ul>
        <button onClick={() => setuserVisible(prevuserVisible => !userVisible)}>Click to load user api</button>
        {userVisible && <User />}
    </div>
  )
}
