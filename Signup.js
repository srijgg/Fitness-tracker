import { Button, FormControl, FormLabel, Input, Typography, Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Screen1CommonNavBar from '../Screen1CommonNavBar/ScreenOneCommonNavBar'
import './SignUp.css'
import { doSignInWithGoogle } from '../../../Firebase/Auth';
import { auth } from '../../../Firebase/Firebase';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                window.location.href = '/SleepFoodWaterHandler';
            } else {
                console.log('User is signed out');
            }
        });
        return () => unsubscribe();
    }, []);

    const genderhandle = (e) => {
        const selectedGender = e.target.value;
        setGender(selectedGender);
    }
    const handlenameChange = (e) => {
        setName(e.target.value);
    };
    const handleemailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlepasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleheightChange = (e) => {
        setHeight(e.target.value);
    };
    const handleweightChange = (e) => {
        setWeight(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('gender', gender);
        if (name === "" || email === "" || password === "" || height === "" || weight === "") {
            return false;
        }
        else {
            window.location.href = '/SleepFoodWaterHandler';
            return true;
        }
    }

    const onGoogleSignIn = () => {
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div className='body'>
            <div><Screen1CommonNavBar /></div>
            <div className='container'>
                <Box className='box'>
                    <div>
                        <div className='heading'>
                            <div className='welcome'>Welcome</div>
                        </div>
                        <div className='form'>
                            <FormControl className='name'>
                                <FormLabel>Enter Name</FormLabel>
                                <Input onChange={handlenameChange}
                                    name="usename" type='text' placeholder="Enter Name" required />
                            </FormControl><br />
                            <FormControl className='email' >
                                <FormLabel className='label'>Email</FormLabel>
                                <Input onChange={handleemailChange}
                                    // html input attribute
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email Id"
                                />
                            </FormControl><br />
                            <FormControl className='password'>
                                <FormLabel className='label' >Password</FormLabel>
                                <Input onChange={handlepasswordChange}
                                    // html input attribute
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                />
                            </FormControl>
                            <div style={{ marginTop: '5%' }}>
                                <FormLabel style={{ marginTop: '9%' }}>Gender</FormLabel>
                                <RadioGroup style={{ marginLeft: '0px', marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" checked={gender === 'male'} onClick={genderhandle} />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" checked={gender === 'male'} onClick={genderhandle} />
                                </RadioGroup>
                            </div>
                            <div className='ageheight'>
                                <div>
                                    <FormControl className='weight' >
                                        <FormLabel>Enter Weight</FormLabel>
                                        <Input onChange={handleweightChange} name="name" type='number' placeholder="Enter Weight" required />
                                    </FormControl>
                                </div>
                                <FormControl className='height' >
                                    <FormLabel>Enter Height</FormLabel>
                                    <Input onChange={handleheightChange} name="name" type='number' placeholder="Enter Height" required />
                                </FormControl>
                            </div>
                        </div>
                        <Button href='/Screen2CommonNavBar' onClick={handleSubmit} variant='contained' className='button' style={{ marginTop: '5%', marginLeft: '30%' }}>Sign up</Button>
                        <br />
                        <Button 
                            size='small'
                            disabled={isSigningIn}
                            onClick={(e) => { onGoogleSignIn(e) }}
                            className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
                            <svg style={{width:'20%',marginRight:'90%'}} className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_40)" >
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                    </div>
                </Box>
            </div >
        </div >
    );
}
export default Signup;
