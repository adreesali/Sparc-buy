import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoIcons from "../assest/logoIcons.png";
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUploadPic = async (e) => {
        try {
            const file = e.target.files[0];

            if (!file) {
                console.log("No file selected");
                return;
            }

            const imagePic = await imageTobase64(file);
            console.log("Base64 image data:", imagePic);

            setData((prev) => ({
                ...prev,
                profilePic: imagePic
            }));
        } catch (error) {
            console.error("Error converting image to base64:", error);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     if (data.password === data.confirmPassword) {
    //         console.log("SummaryApi.signUP.url",SummaryApi.signUP.url)

    //             const dataResponse = await fetch('http://localhost:8080/api/signup',{
    //                 method: "post",
    //                 headers: {
    //                     "content-type": "application/json"
    //                 },
    //                 body: JSON.stringify(data)
    //             });
    //             const dataApi = await dataResponse.json()

    //             console.log("data", dataApi)
           
    //     } else {
    //         alert("Please check password and confirm password");
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate password and confirmPassword match
        if (data.password !== data.confirmPassword) {
            alert("Please ensure the password and confirm password match.");
            return;
        }
    
        try {
            // Use the URL from SummaryApi
            const url = SummaryApi.signUP.url;
    
            // Make the POST request to the server
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            // Check for errors in the server response
            if (!response.ok) {
                throw new Error(`Server responded with status code: ${response.status}`);
            }
    
            // Parse the JSON response
            const dataApi = await response.json();
    
            console.log("Server response:", dataApi);
    
            // Handle server response data
            if (dataApi.success) {
                // Success - handle successful sign-up
                alert("Sign-up successful!");
                // Redirect the user or perform other actions upon successful sign-up
            } else {
                // Handle API error
                alert(`Sign-up failed: ${dataApi.message}`);
            }
        } catch (error) {
            // Handle fetch errors
            console.error("Error making fetch request:", error);
            alert("An error occurred while signing up. Please try again later.");
        }
    };

    
    console.log("data login", data);


    return (
        <section id='signup'>
            <div className="mx-auto container p-4">
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className="w-24 h-24 mx-auto relative overflow-hidden rounded-full">
                        <img src={data.profilePic || logoIcons} alt="Signup Icon" />
                        {data.profilePic === "" && (
                            <form>
                                <label>
                                    <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full'>
                                        Upload Photo
                                    </div>
                                    <input type="file" className='hidden' onChange={handleUploadPic} />
                                </label>
                            </form>
                        )}
                    </div>
                    <div className="bg-white p-4 w-full max-w-md mx-auto rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Form inputs */}
                            <div className="mb-4 grid">
                                <label className='block text-gray-700 mb-1'>Name:</label>
                                <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
                                    <input
                                        type="text"
                                        placeholder='Enter your name'
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        className='w-full h-full outline-none bg-transparent rounded-lg p-2'
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                      <label className='block text-gray-700 mb-1'>Email:</label>
           <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
        <input
            type="email"  // Email input ke liye type ko "email" rakhein
            placeholder='Enter your email'
            name="email"
            value={data.email}
            onChange={handleChange}  // Handle input changes using handleChange function
            required  // Optional: Add required attribute to make email input field mandatory
            className='w-full h-full outline-none bg-transparent rounded-lg p-2'
        />
    </div>
</div>

                            {/* Other input fields and form submission */}
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

                            <div className="mb-4">
                                <label className='block text-gray-700 mb-1'>Confirm Password:</label>
                                <div className="bg-gray-100 p-2 flex items-center rounded-lg shadow-sm">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder='Enter confirm password'
                                        name="confirmPassword"
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className='w-full h-full outline-none bg-transparent rounded-lg p-2'
                                    />
                                    <div
                                        className="cursor-pointer text-xl ml-2 text-gray-600"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                            </div>

                            {/* Forgot password link */}
                            <div className='text-right mb-4'>
                                <Link to="/forgot-password" className='text-purple-600 hover:underline'>
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Sign up button */}
                            <button
                                type="submit"
                                className='bg-purple-500 text-white w-full py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105 shadow-sm'
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* Login link */}
                        <p className='mt-4 text-center'>
                            Already have an account? <Link to='/login' className='text-purple-500 hover:text-purple-600'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
