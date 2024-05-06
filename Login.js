import { Button, FormControl, FormLabel, Input, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Screen1CommonNavBar from '../Screen1CommonNavBar/ScreenOneCommonNavBar'
import { auth } from '../../../Firebase/Firebase';



function Login() {
    const [useremail, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleSubmit() {
            var storedUserEmail = localStorage.getItem("email");
            var storedPassword = localStorage.getItem("password");
            if (useremail === storedUserEmail && password === storedPassword) {
                window.location.href = '/SleepFoodWaterHandler';
                return true;
            }
            else {
                alert("incorrect data");
                return false;
            }
    }
    return (
        <div>
            <div>
                <Screen1CommonNavBar />
            </div>
            <div>
                <Box className='box'
                    sx={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        top: '10%',
                        left: '70%',
                        width: 350,
                        marginTop: '5%',
                        borderRadius: '3%',
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: 'linear-gradient(white,rgb(85, 151, 184))',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                    variant="outlined">
                    <div style={{ alignItems: 'flex-end' }}>
                        <Typography level="h4" component="h1">
                            <h3 style={{
                                fontSize: '45px',
                                paddingLeft: '2%',
                            }}>Welcome</h3>
                        </Typography>
                    </div>
                    <div>
                        <FormControl style={{ paddingLeft: '15%', width: '65%' }} >
                            <FormLabel style={{ marginBottom: '0%' }}>Email</FormLabel>
                            <Input onChange={handleEmailChange}
                                // html input attribute
                                name="email"
                                type="email"
                                placeholder="Enter Email Id"
                            />
                        </FormControl>
                        <FormControl style={{ paddingLeft: '15%', paddingTop: '9%', width: '65%' }}>
                            <FormLabel >Password</FormLabel>
                            <Input onChange={handlePasswordChange}
                                // html input attribute
                                name="password"
                                type="password"
                                placeholder="Enter password"
                            />
                        </FormControl>
                    </div>
                    <Button variant='contained' sx={{ fontSize: '15px', marginTop: '12%' }} onClick={handleSubmit}>Log in</Button>
                    <Typography style={{ alignItems: 'center', marginTop: '2%', marginBottom: '3%' }}>
                        <div><p>Don't have an account?  <a href='/Signup'>Sign up</a></p></div>
                    </Typography>
                </Box>
            </div>
        </div>
    );
}
export default Login;