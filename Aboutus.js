import React from 'react';
import About1 from '../Screen1Images/About1.jpg'
import Aboutus2 from '../Screen1Images/Aboutus2.jpg'
import Aboutus3 from '../Screen1Images/Aboutus3.jpg'
import Aboutus4 from '../Screen1Images/Aboutus4.jpg'
import Aboutus5 from '../Screen1Images/Aboutus5.jpg'



function Aboutus() {
    return (
        <div>
            <div>
                <center><h1 style={{fontSize:'50px'}}><u>About Us</u></h1>
                <p style={{
                    fontFamily:'sans-serif',
                    alignItems:'center',
                    fontSize:'20px',
                    paddingLeft:'40px',
                    
                    }}>At <b>Fitness tracker</b>, we are passionate about helping you
                    achieve your fitness goals and live a healthier life.
                    Our platform is designed to provide you with the tools, resources,
                    and motivation you need to stay active, track your progress,
                    and make positive changes to your lifestyle. Whether you're
                    a beginner looking to get started or a fitness enthusiast seeking
                    to take your workouts to the next level, <b>fitness tracker</b> is
                    here to support you every step of the way.</p>
                    </center>
                    <div><img src={About1} style={{maxWidth:'50%',paddingLeft:'34px'}}/>
                    <img src={Aboutus2} style={{maxWidth:'47%',maxHeight:'415px',paddingLeft:'5px'}}/>
                    </div>

            </div>
            <div style={{paddingTop:'4%'}}>
                <center><h1><u>Your Fitness journey With Us</u></h1>
                <p style={{fontFamily:'sans-serif',
                    alignItems:'center',
                    fontSize:'20px'
                    }}
                >At <b>Fitness Tracker</b>, we understand that your fitness journey is personal and unique.
                    That's why we're committed to providing you with the tools, support, and motivation you need to succeed.
                    From setting your fitness goals to tracking your progress and celebrating your achievements,
                    we're here to guide you every step of the way. Whether you're just starting out or you're a
                    seasoned fitness enthusiast, our platform is designed to adapt to your needs and help you reach
                    your full potential.Join us today and start your journey towards a healthier, happier you</p>
                    </center>
                    <div><img src={Aboutus3} style={{maxWidth:'30%',paddingLeft:'5%'}}/>
                    <img src={Aboutus5} style={{maxWidth:'30%',maxHeight:'340px',paddingLeft:'5%'}}/>
                    <img src={Aboutus4} style={{maxHeight:'345px',maxWidth:'50%',paddingLeft:'5%'}}/>
                    </div>
                    
            </div>
            
            <div>
                <center>
                <h1><u>How It Works</u></h1>
                <p style={{fontFamily:'sans-serif'}}>Sign up , set your fitness goals,track your progress,stay progressed.Being consistence is the key to you'r goal.
                <p>Join <b>FITNESS TRACKER</b> today and start your journey towards a healthier, happier you!</p>
                </p>
                </center>
            </div>
            <div><center>
                <h3>Start You Fitness Journey Today </h3>
                <p><a href='/Signup' style={{fontWeight:'bold',color:'orange'}}>Sign up</a>Already have accout? <a href='/Login' style={{fontWeight:'bold',color:'orange'}}>Login</a>Now</p>
                </center>
            </div>
        </div >
    )
}

export default Aboutus;