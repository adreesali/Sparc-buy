import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoIcons from "../assest/logoIcons.png"

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
      email: "",
      password: ""
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target
      setData((preve) => {
        return{
          ...preve,
          [name]: value
        }
      })
    }
    
    const handleSubmit =(e: { preventDefault: () => void; }) => {
      e.preventDefault()
    } 
    console.log("data login", data)
    return (
        <section id='login'>
            <div className="bg-white w-full max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto mt-4">
              <img src={logoIcons} alt="login Icon" />
            </div>
                <div className="bg-white p-6 w-full max-w-md mx-auto rounded-lg shadow-lg">
                    <h1 className='text-2xl font-bold text-center mb-6'>Login</h1>
                    <form className='pt-6' onSubmit={handleSubmit}> 
                        <div className="mb-4">
                            <label className='block text-gray-700 mb-1'>Email:</label>
                            <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
                                <input
                                    type="email"
                                    placeholder='Enter email'
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    className='w-full h-full outline-none bg-transparent rounded-lg p-2'
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className='block text-gray-700 mb-1'>Password:</label>
                            <div className="bg-gray-100 p-2 flex items-center rounded-lg shadow-sm">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter password'
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    className='w-full h-full outline-none bg-transparent rounded-lg p-2'
                                />
                                <div
                                    className="cursor-pointer text-xl ml-2 text-gray-600"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right mb-4">
                            <Link to="/forgot-password" className='text-purple-600 hover:underline'>
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 shadow-lg transition-transform transform hover:scale-105"
                    >
                        Login
                    </button>
                    </form>
                    <p className='my-4 '>Don't have account? <Link to={'/sign-up'} className='text-purple-500 hover:text-purple-600'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;