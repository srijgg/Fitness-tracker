import React, { useEffect, useState } from 'react'
import Screen2CommonNavBar from '../../Screen2CommonNavBar/Screen2CommonNavBar'
import './Activities.css'
import { Button, CircularProgress } from '@mui/material';
import ActivityImg from './ActivityImages/ActivityImg.jpg'
import CommonFooter from '../../Screen2CommonNavBar/CommonFooter';


function ActivityButton() {
    const defaultData = {
        calories: 'calories',
        calorieunit: 'Kcal',
        caloriesNeeded: 2500,

        sleep: 'sleep',
        sleepNeeded: 8,
        sleepunit: 'Hrs',


        water: 'water',
        waterNeeded: 10,
        waterUnit: 'gls',

        steps: 'steps',
        stepsNeeded: 10000,
        stepsUnit: 'steps',

        workout: 'workout',
        workoutNeeded: '150',
        workoutUnit: 'mins',

    }


    const [storedcaloriesvalue, setStoredCaloriesValue] = useState('');
    const [storedsleepvalue, setStoredSleepValue] = useState('');
    const [storedwatervalue, setStoredWaterValue] = useState('');
    const [storedstepsvalue, setStoredStepsValue] = useState('');
    const [storedgymvalue, setStoredGymValue] = useState('');
    useEffect(() => {

        const caloriesvalue = localStorage.getItem('calories');
        const sleepvalue = localStorage.getItem('sleep');
        const watervalue = localStorage.getItem('water');
        const stepsvalue = localStorage.getItem('steps');
        const gymvalue = localStorage.getItem('gym');
        setStoredCaloriesValue(caloriesvalue || '');
        setStoredSleepValue(sleepvalue || '');
        setStoredWaterValue(watervalue || '');
        setStoredStepsValue(stepsvalue || '');
        setStoredGymValue(gymvalue || '');



    }, []);



    const caloriesvalue = localStorage.getItem('calories');
    const sleepvalue = localStorage.getItem('sleep');
    const watervalue = localStorage.getItem('water');
    const stepsvalue = localStorage.getItem('steps');
    const gymvalue = localStorage.getItem('gym');

    const [feedbackMessage, setFeedbackMessage] = useState('');
    const handleCaloriesChange = () => {

        if (caloriesvalue < 50) {
            setFeedbackMessage('Your calorie intake is less than 50 kcal. Please consider increasing it.');
        } else {
            if (caloriesvalue < 90) {
                setFeedbackMessage('Your calorie intake is less than 50 kcal. Please consider increasing it.');
            }
        }
    };


    return (
        <div className='activitybody'>

            <div>
                <Screen2CommonNavBar />
            </div>
            <div className='head'>
                <div className='blackscreen'>
                    <img src={ActivityImg} />
                </div>
                <div className='info'>
                    <div className='heading'>
                        PROGRESS IS NOT ACHIVED BY LUCK OR BY ACCIDENT,BUT BY ON <span style={{ color: 'orange' }}>YOURSELF</span> DAILY...!

                        <br /><div style={{ marginTop: '10%', fontSize: '20px' }}>Remember, progress is progress no matter how small!"</div>
                    </div>
                </div>
            </div><br /><hr />
            <div className='progressheading'>
                <p>Get You Know about you through Progress</p>
            </div>
            <div className='meters' style={{ marginTop: '5%' }}>
                <div className="card" >
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{defaultData.calories}</div>
                            <div className="car-header-box-value">{storedcaloriesvalue}{defaultData.calorieunit}</div>
                        </div>
                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{defaultData.caloriesNeeded}{defaultData.calorieunit}</div>
                        </div>
                    </div>
                    <CircularProgress className='circularprogress' variant="determinate" value={Math.min((storedcaloriesvalue / defaultData.caloriesNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
                    <div className='caloriesprogress'><div className='progress'>  progress: {((storedcaloriesvalue / defaultData.caloriesNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((storedcaloriesvalue / defaultData.caloriesNeeded) * 100).toFixed(0)}%`}</div></div>
                </div>
                <div className="card" >
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{defaultData.sleep}</div>
                            <div className="car-header-box-value">{storedsleepvalue}{defaultData.sleepunit}</div>
                        </div>
                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{defaultData.sleepNeeded}{defaultData.sleepunit}</div>
                        </div>
                    </div>
                    <CircularProgress className='caloriesprogress' variant="determinate" value={Math.min((storedsleepvalue / defaultData.sleepNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
                    <div className='progress'>  progress: {((storedsleepvalue / defaultData.sleepNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((storedsleepvalue / defaultData.sleepNeeded) * 100).toFixed(0)}%`}</div>
                </div>
                <div className="card" >
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{defaultData.steps}</div>
                            <div className="car-header-box-value">{storedstepsvalue}{defaultData.stepsUnit}</div>
                        </div>
                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{defaultData.stepsNeeded}{defaultData.stepsUnit}</div>
                        </div>
                    </div>
                    <CircularProgress className='caloriesprogress' variant="determinate" value={Math.min((storedstepsvalue / defaultData.stepsNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
                    <div className='progress'>  progress: {((storedstepsvalue / defaultData.stepsNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((storedstepsvalue / defaultData.stepsNeeded) * 100).toFixed(0)}%`}</div>
                </div>
                <div className="card" >
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{defaultData.water}</div>
                            <div className="car-header-box-value">{storedwatervalue}{defaultData.waterUnit}</div>
                        </div>
                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{defaultData.waterNeeded}{defaultData.waterUnit}</div>
                        </div>
                    </div>
                    <CircularProgress className='caloriesprogress' variant="determinate" value={Math.min((storedwatervalue / defaultData.waterNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
                    <div className='progress'>  progress: {((storedwatervalue / defaultData.waterNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((storedwatervalue / defaultData.waterNeeded) * 100).toFixed(0)}%`}</div>
                </div>
                <div className="card" >
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{defaultData.workout}</div>
                            <div className="car-header-box-value">{storedgymvalue}{defaultData.workoutUnit}</div>
                        </div>
                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{defaultData.workoutNeeded}{defaultData.workoutUnit}</div>
                        </div>
                    </div>
                    <CircularProgress className='caloriesprogress' variant="determinate" value={Math.min((storedgymvalue / defaultData.workoutNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
                    <div className='progress'>  progress: {((storedgymvalue / defaultData.workoutNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((storedgymvalue / defaultData.workoutNeeded) * 100).toFixed(0)}%`}</div>
                </div>

            </div>
            <br />
            
            

<div style={{ marginLeft:'5%',fontSize: '30px', marginTop: '5%' }}>Todays's Feedback:</div>
<div className='feedbackforzero'>
                <div className='zero'>
                    {
                        ((storedcaloriesvalue / defaultData.caloriesNeeded) * 100) === 0 &&(
                        <div>Enter calories count so that we can provide feedback. 
                            <div className='button'><Button className='startbutton' href='./sleepfoodwaterhandler'>Enter Data</Button></div>
                        </div>
                   ) }
                </div>
                <div className='zero'>
                        {
                            ((storedsleepvalue / defaultData.sleepNeeded) * 100) === 0 &&(
                            <div>Enter slept time so that we can provide feedback. 
                                <div className='button'><Button className='startbutton' href='./sleepfoodwaterhandler'>Enter Data</Button></div>
                            </div>
                        )}
                        
                    </div>
                    <div className='zero'>
                        {
                            ((storedstepsvalue / defaultData.stepsNeeded) * 100) === 0 &&(
                            <div>Enter steps count so that we can provide feedback. 
                                <div className='button'><Button className='startbutton' href='./sleepfoodwaterhandler'>Enter Data</Button></div>
                            </div>
                        )}
                        
                    </div>
                    <div className='zero'>
                        {
                            ((storedwatervalue / defaultData.waterNeeded) * 100) === 0 &&(
                            <div>Enter water quantity so that we can provide feedback. 
                                <div className='button'><Button className='startbutton' href='./sleepfoodwaterhandler'>Enter Data</Button></div>
                            </div>
                        )}
                        
                    </div>

                <div className='zero'>
                    {((storedgymvalue / defaultData.workoutNeeded) * 100) === 0 &&(
                        <div> Enter workout time so that we can provide feedback. 
                            <div className='button'><Button className='startbutton' href='./sleepfoodwaterhandler'>Enter Data</Button></div>
                        </div>
                        
                   ) }
                    
                </div>
                
                
                </div>
                <div className='feedbackforlow' >
                <div className='lowcalories' >
                    {((storedcaloriesvalue / defaultData.caloriesNeeded) * 100) >0 &&((storedcaloriesvalue / defaultData.caloriesNeeded) * 100) <= 75  &&(

                        <div className='low' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ fontSize: '30px', marginBottom: '%',color: 'red', }}> Low Calories Then Needed.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '1%' }}>Consuming the right amount of calories helps you maintain a healthy weight.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li>  Instead of eating three large meals, try eating smaller, more frequent meals throughout the day to increase your calorie intake.</li>
                            <li>  Include healthy fats in your diet, such as olive oil, coconut oil, nuts, seeds, and avocados, to increase your calorie intake.</li>
                            <h5 style={{  fontSize: '20px' }}> Extended periods of low-calorie intake can slow down the metabolism, making it harder to lose weight and easier to gain weight in the future. </h5>
                            <div>Here we have a list of food list which might help you<Button href='./commonfoodsession' style={{ backgroundColor: 'orange', color: 'white',marginLeft:'2%' }}>Foods</Button></div>
                        </div>

                    )}
                </div>
                <div   className='lowcalories' >
                    { ((storedsleepvalue / defaultData.sleepNeeded) * 100) >0 &&((storedsleepvalue / defaultData.sleepNeeded) * 100) <= 80 &&(
                    <div className='low' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                        <b style={{ fontSize: '30px', marginBottom: '5%',color: 'red' }}>Sleep time is very low.</b>
                        <br />
                        <div style={{ fontSize: '20px', marginBottom: '2%' }}>Sleep is essential for the body to repair and rejuvenate tissues, muscles, and organs. It also plays a role in regulating hormones involved in growth, metabolism, and immune function.</div>

                        <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                        <li> Establishing a calming pre-sleep routine, such as reading a book or taking a warm bath, can signal to your body that it's time to wind down.</li>
                        <li> Avoid screens, such as phones, tablets, and computers, at least an hour before bed, as the blue light can interfere with your body's natural sleep-wake cycle.</li>
                        <h5 style={{  fontSize: '20px' }}>Lack of sleep can lead to difficulties with concentration, memory, and decision-making. </h5>

                    </div>

                )}
                </div>
                <div className='lowcalories'>


                    {((storedstepsvalue / defaultData.stepsNeeded) * 100) >0 && ((storedstepsvalue / defaultData.stepsNeeded) * 100) <= 60 &&(

                        <div className='low' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ fontSize: '30px', marginBottom: '5%',color: 'red' }}> Low number of steps taken.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}>Walking regularly can help improve heart health by increasing heart rate and circulation, lowering blood pressure, and reducing the risk of heart disease and stroke.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li> Start with a realistic goal and gradually increase it over time as you become more active.</li>
                            <li>  Aim to walk every day, even if it's just for a short period. Consistency is key to making walking a habit.</li>
                            <h5 style={{  fontSize: '20px' }}> Lack of movement and low step counts can contribute to muscle weakness and decreased muscle tone. </h5>
                            <div>Here we have a list of Excercises which you can do at home<Button href='./excercisebutton' style={{ backgroundColor: 'orange', color: 'white',marginLeft:'3%' }}>Excercises</Button></div>
                        </div>

             ) }
                </div>
                <div className='lowcalories'>
                    {((storedwatervalue / defaultData.waterNeeded) * 100) >0 && ((storedwatervalue / defaultData.waterNeeded) * 100) <= 60 &&(
                        <div className='low' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ fontSize: '30px', marginBottom: '5%',color: 'red' }}>Water Level is very low.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}> Try to take more water which helps to maintain the balance of bodily fluids, which is essential for various functions such as digestion,
                                circulation, and temperature regulation.</div>
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li>Drinking water first thing in the morning helps rehydrate your body after a night's sleep and kick-starts your metabolism.</li>
                            <li> Dehydration can cause fatigue, so drinking water when you're feeling tired can help boost your energy levels.</li>
                            <h5 style={{  fontSize: '20px' }}> Set reminders on your phone or use a water tracking app to remind you to drink water throughout the day.</h5>

                        </div>
                    )}
                    </div>
                    <div className='lowcalories'>
                    {((storedgymvalue / defaultData.workoutNeeded) * 100) >0 && ((storedgymvalue / defaultData.workoutNeeded) * 100) <= 60 &&(

                        <div className='low' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ fontSize: '30px', marginBottom: '5%',color: 'red' }}> Low workout Time.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}>Daily workouts can help you maintain a healthy weight or lose weight by burning calories and building muscle mass.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li>  Start by setting achievable goals for increasing your exercise duration. Gradually increase the duration as you become more comfortable</li>
                            <li> If you're new to exercising, start with shorter sessions and gradually increase the duration and intensity as you build endurance.</li>
                            <h5 style={{  fontSize: '20px' }}>Not exercising regularly can lead to muscle weakness and stiffness, as well as joint pain and decreased flexibility. </h5>
                            Feel Free to go through the all Basic to advanced Excercises in our session <Button style={{ backgroundColor: 'orange', color: 'white' }} href='./excercisebutton'>Excercises</Button>
                        </div>

                ) }
                </div>

                </div>
                <div className='feedbackforaverage'>
                <div className='averagecalories'>
                    {((storedcaloriesvalue / defaultData.caloriesNeeded) * 100) > 75 && ((storedcaloriesvalue / defaultData.caloriesNeeded) * 100) <= 80 &&(

                        <div className='lowfeed' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ fontSize: '30px', marginBottom: '5%',color: 'red' }}> Average Clories Taken.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}>Consuming the right amount of calories helps you maintain a healthy weight.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li> Focus on eating a variety of nutrient-dense foods such as fruits, vegetables, whole grains, and lean proteins.</li>
                            <li>  Include healthy fats in your diet, such as olive oil, coconut oil, nuts, seeds, and avocados, to increase your calorie intake.</li>
                            <h5 style={{  fontSize: '20px' }}> Focus on eating a variety of nutrient-dense foods such as fruits, vegetables, whole grains, and lean proteins. </h5>
                            <div>Here we have a list of food list which might help you<Button href='./commonfoodsession' style={{ backgroundColor: 'orange', color: 'white' }}>Foods</Button></div>
                        </div>

                    )}
                </div>
                <div className='averagecalories'>
                        {((storedsleepvalue / defaultData.sleepNeeded) * 100) > 80 && ((storedsleepvalue / defaultData.sleepNeeded) * 100) <= 90 &&(
                            <div className='avgfeed' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                                <b style={{  color: 'red',fontSize: '30px', marginBottom: '5%' }}>Average sleep Timing.</b>
                                <br />
                                <div style={{ fontSize: '20px', marginBottom: '2%' }}>Prefer to sleep 8 hrs which is essential for the body to repair and rejuvenate tissues, muscles, and organs. It also plays a role in regulating hormones involved in growth, metabolism, and immune function.</div>

                                <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                                <li> Establishing a calming pre-sleep routine, such as reading a book or taking a warm bath, can signal to your body that it's time to wind down.</li>
                                <li> Avoid screens, such as phones, tablets, and computers, at least an hour before bed, as the blue light can interfere with your body's natural sleep-wake cycle.</li>
                                <h5 style={{ fontSize: '20px' }}>Try to go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.</h5>

                            </div>

                        )}
                    </div>
                
            
                    
                    
                <div className='averagecalories'>

                    {((storedstepsvalue / defaultData.stepsNeeded) * 100) > 60 && ((storedstepsvalue / defaultData.stepsNeeded) * 100) <= 80 &&(

                        <div className='avgfeed' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{  color: 'red',fontSize: '30px', marginBottom: '5%' }}> Average number of steps taken.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}>Walking regularly can help improve heart health by increasing heart rate and circulation, lowering blood pressure, and reducing the risk of heart disease and stroke.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li>  Look for opportunities to walk more throughout your day, such as taking the stairs instead of the elevator or walking to nearby places instead of driving.</li>
                            <li> Look for opportunities to take short walks during breaks at work, after meals, or while watching TV.</li>
                            <h5 style={{  fontSize: '20px' }}> Challenge yourself to increase your step count each week or month to keep yourself motivated.</h5>

                        </div>

                    )}
                </div>
                <div className='averagecalories'>
                        {((storedwatervalue / defaultData.waterNeeded) * 100) > 60 && ((storedwatervalue / defaultData.waterNeeded) * 100) <= 80 &&(
                            <div className='avgfeed' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                                <b style={{  color: 'red',fontSize: '30px', marginBottom: '5%' }}>Water Level is Average.</b>
                                <br />
                                <div style={{ fontSize: '20px', marginBottom: '2%' }}> Water helps to maintain the balance of bodily fluids, which is essential for various functions such as digestion,
                                    circulation, and temperature regulation.</div>
                                <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                                <li>Drinking water first thing in the morning helps rehydrate your body after a night's sleep and kick-starts your metabolism.</li>
                                <li> Dehydration can cause fatigue, so drinking water when you're feeling tired can help boost your energy levels.</li>
                                <h5 style={{  fontSize: '20px' }}>Not taking enough water can lead to dehydration, which can cause several health problems.</h5>

                            </div>
                       ) }
                    </div>
                    <div className='averagecalories'>
                    {((storedgymvalue / defaultData.workoutNeeded) * 100) > 60 && ((storedgymvalue / defaultData.workoutNeeded) * 100) <= 80 && (

                        <div className='avgfeed' style={{marginTop:'5%',boxShadow: '2px 2px 12px 12px rgb(210, 208, 208)'}}>
                            <b style={{ color: 'red', fontSize: '30px', marginBottom: '5%' }}> Average workout Time.</b>
                            <br />
                            <div style={{ fontSize: '20px', marginBottom: '2%' }}>Daily workouts can help you maintain a healthy weight or lose weight by burning calories and building muscle mass.</div>
                            <br />
                            <div style={{ textDecoration: 'underline', fontSize: '20px' }}>Here are Some Advices :</div>
                            <li>  Start by setting achievable goals for increasing your exercise duration. Gradually increase the duration as you become more comfortable</li>
                            <li>  If you find it challenging to exercise for a long period at once, break it up into shorter sessions throughout the day. For example, do three 10-minute walks instead of one 30-minute walk.</li>
                            <h5 style={{ fontSize: '20px' }}>Not exercising regularly can lead to muscle weakness and stiffness, as well as joint pain and decreased flexibility. </h5>
                            Feel Free to go through the all Basic to advanced Excercises in our session <Button style={{ backgroundColor: 'orange', color: 'white' }} href='./excercisebutton'>Excercises</Button>
                        </div>

                    )}
                </div>
                </div>
                    <div className='feedbackform'>
        
                    

                </div>
                
         
                

            




            <div>
                <CommonFooter />
            </div>
        </div>
    );
}

export default ActivityButton








// function ActivityButton() {
//     return (
//         <div>
//             <div><Screen2CommonNavBar /></div>
//             <div style={{ paddingTop: '10%' }}>

//                 <div className='meters'>

//                     <div className="card" >
//                         <div className="card-header">
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">{defaultData.calories}</div>
//                                 <div className="car-header-box-value">{total}{defaultData.calorieunit}</div>
//                             </div>
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">Target</div>
//                                 <div className="card-header-box-value">{defaultData.caloriesNeeded}{defaultData.calorieunit}</div>
//                             </div>
//                         </div>
//                         <CircularProgress variant="determinate" value={Math.min((workoutTime / defaultData.workoutNeeded) * 100, 100)} style={{ margin: '20px' }}> </CircularProgress>
//                         <div className='progress'>  progress: {((total / defaultData.caloriesNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((total / defaultData.caloriesNeeded) * 100).toFixed(0)}%`}</div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">{defaultData.sleep}</div>
//                                 <div className="car-header-box-value">{hoursSlept}{defaultData.sleepunit}</div>
//                             </div>
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">Target</div>
//                                 <div className="card-header-box-value">{defaultData.sleepNeeded}{defaultData.sleepunit}</div>
//                             </div>
//                         </div>
//                         <CircularProgress variant="determinate" value={(hoursSlept) / (defaultData.sleepNeeded) * 100}> </CircularProgress>
//                         <div className='progress'>  progress:{((hoursSlept) / (defaultData.sleepNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((hoursSlept) / (defaultData.sleepNeeded) * 100).toFixed(0)}%`}% </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">{defaultData.water}</div>
//                                 <div className="car-header-box-value">{waterTaken}{defaultData.waterUnit}</div>
//                             </div>
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">Target</div>
//                                 <div className="card-header-box-value">{defaultData.waterNeeded}{defaultData.waterUnit}</div>
//                             </div>
//                         </div>
//                         <CircularProgress variant="determinate" value={(waterTaken) / (defaultData.waterNeeded) * 100}> </CircularProgress>
//                         <div className='progress'>  progress:{((waterTaken) / (defaultData.waterNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((waterTaken) / (defaultData.waterNeeded) * 100).toFixed(0)}%`}</div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">{defaultData.steps}</div>
//                                 <div className="car-header-box-value">{stepsTaken}{defaultData.stepsUnit}</div>
//                             </div>
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">Target</div>
//                                 <div className="card-header-box-value">{defaultData.stepsNeeded}{defaultData.stepsUnit}</div>
//                             </div>
//                         </div>
//                         <CircularProgress variant="determinate" value={(stepsTaken) / (defaultData.stepsNeeded) * 100}> </CircularProgress>
//                         <div className='progress'>  progress:{((stepsTaken) / (defaultData.stepsNeeded) * 100).toFixed(0) > 100 ? '100' : `${((stepsTaken) / (defaultData.stepsNeeded) * 100).toFixed(0)}%`}   </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-header">
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">{defaultData.workout}</div>
//                                 <div className="car-header-box-value">{workoutTime}{defaultData.workoutUnit}</div>
//                             </div>
//                             <div className="card-header-box">
//                                 <div className="card-header-box-name">Target</div>
//                                 <div className="card-header-box-value">{defaultData.workoutNeeded}{defaultData.workoutUnit}</div>
//                             </div>
//                         </div>
//                         <CircularProgress variant="determinate" value={(workoutTime) / (defaultData.workoutNeeded) * 100}> </CircularProgress>
//                         <div className='progress'>  progress:{((workoutTime) / (defaultData.workoutNeeded) * 100).toFixed(0) > 100 ? '100%' : `${((workoutTime) / (defaultData.workoutNeeded) * 100).toFixed(0)}%`} </div>
//                     </div>




//                 </div>

//             </div>


//         </div>
//     )
// }