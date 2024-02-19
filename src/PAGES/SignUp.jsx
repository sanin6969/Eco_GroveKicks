import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Header from '../Components/Header'

function SignUp() {
    const Nav = useNavigate()
    const { signupUser, setSigupUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const submit = (e) => {
        e.preventDefault()
        const newUser = { username, email, password, cart: [] };
        setSigupUser([...signupUser, newUser]);
        console.log(newUser);
        Nav('/LogIn')
    }
    return (
        <div>
            <Header />

            <div className='mt-10'>
                <form className="max-w-md mx-auto p-11 rounded-3xl  bg-slate-700" onSubmit={submit}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Create  your username" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your email" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create password</label>
                        <input onChange={(e) => setpassword(e.target.value)} value={password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder='Create your password' />
                    </div>
                    <p className=' font-medium text-white pb-3'>Existing User? <NavLink to='/LogIn'><span className='text-blue-300'>LogIn</span></NavLink></p>

                    <button type="submit" className="text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register new account</button>
                </form>

            </div>
        </div>
    )
}

export default SignUp