import React from 'react'
import { useState } from 'react';
import Screen2CommonNavBar from '../../Screen2CommonNavBar/Screen2CommonNavBar'
import CommonFooter from '../../Screen2CommonNavBar/CommonFooter.js'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import './SleepFoodWaterHandler.css'
import MealImage from '../HomeButton/HomeButtonImages/MealImage.jpg'
import SleepImage from '../HomeButton/HomeButtonImages/SleepImage.jpg'
import WaterDrinkingImage from '../HomeButton/HomeButtonImages/WaterDrinkingImage.jpg'
import StepsImage from '../HomeButton/HomeButtonImages/StepsImage.jpg'
import GymImage from '../HomeButton/HomeButtonImages/GymImage.jpg'
import KcalLogo from './HomeButtonImages/KcalLogo.jpg'
import SleepLogo from './HomeButtonImages/SleepLogo.jpg'
import WalkLogo from './HomeButtonImages/WalkLogo.jpg'
import WaterLogo from './HomeButtonImages/WaterLogo.jpg'
import GymLogo from './HomeButtonImages/GymLogo.jpg'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import HomeImage2 from './HomeButtonImages/HomeImage2.jpg'
import { Add } from '@mui/icons-material';

function SleepFoodWaterHandler() {
    const currentDate = new Date().toDateString();
    const [ismealOpen, setIsmealOpen] = useState(false);
    const [meals, setMeals] = useState([]);
    const [mealname, setMealname] = useState('');
    const [calories, setCalories] = useState(0);
    const [time, setTime] = useState('');
    const mealhandleClick = () => {
        setIsmealOpen(true);
    };
    const mealhandleClose = () => {
        setIsmealOpen(false);
    };
    const addMealsHandler = () => {
        const oldMeals = [...meals];
        const meal = {
            mealname,
            calories,
            time,
            id: Math.floor(Math.random() * 1000),
        };
        const newMeals = oldMeals.concat(meal);
        if (calories <= 0 || mealname === "" || time === '') {
            alert("Incomplete data,please enter again")
        }
        else {
            setMeals(newMeals);
            setMealname('');
            setCalories('');
        }
    };
    const deleteMealHandler = (id) => {
        const oldMeals = [...meals];
        const newMeals = oldMeals.filter((meal) => meal.id !== id)
        setMeals(newMeals)
    };
    const total = meals.map((meal) => meal.calories).reduce((acc, value) => acc + +value, 0);
    const [isSleepOpen, setisSleepOpen] = useState(false);
    const [sleepTime, setSleepTime] = useState();
    const sleepHandle = () => {
        setisSleepOpen(true);
    }
    const handleclose = () => {
        setisSleepOpen(false);
    }
    const handlesubmit = () => {
        console.log("time", sleepTime);
        setisSleepOpen(false);
    }
    const [iswaterOpen, setiswaterOpen] = useState(false);
    const [water, setWater] = useState();
    const waterHandle = () => {
        setiswaterOpen(true);
    }
    const waterhandleclose = () => {
        setiswaterOpen(false);
    }
    const waterhandlesubmit = () => {
        console.log("steps", water);
        setiswaterOpen(false);
    }
    const [isStepsOpen, setisStepsOpen] = useState(false);
    const [steps, setSteps] = useState();
    const stepsHandle = () => {
        setisStepsOpen(true);
    }
    const stepshandleclose = () => {
        setisStepsOpen(false);
    }
    const stepshandlesubmit = () => {
        console.log("steps", steps);
        setisStepsOpen(false);
    }
    const [isgymdayson, setGymDayson] = useState(false);
    const [gymdays, setGymDays] = useState('');
    const gymhandleopen = () => {
        setGymDayson(true);
    }
    const gymhandleclose = () => {
        setGymDayson(false);
    }
    const gymhandlesubmit = () => {
        console.log("gym", gymdays);
        setGymDayson(false);
    }
    const clearhandler = () => {
        setCalories('');
        setSleepTime();
        setGymDays();
        setSteps();
        setWater();
    }
    const allsubmithandler = (event) => {
        event.preventDefault();
        localStorage.setItem('calories', total);
        localStorage.setItem('steps', steps);
        localStorage.setItem('water', water);
        localStorage.setItem('gym', gymdays);
        localStorage.setItem('sleep', sleepTime);
    }
    const deletesleephandler = () => {
        setSleepTime('');
    }
    const deletestepshandler = () => {
        setSteps('');
    }
    const deletewaterhandler = () => {
        setWater('');
    }
    const deletegymhandler = () => {
        setGymDays('');
    }
    const [istableopen, setisTableOpen] = useState(false);
    const handletableclose = () => {
        setisTableOpen(false);
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <div><Screen2CommonNavBar /></div>
            <div className='homefoodsession'>
                <div className='fooddata'>
                <div className='foodheading'> Your Fitness Journey <br /><span style={{}}>Starts Here...</span></div>
                    <p className='paragraph'>Fitness Is Not About Being Better Than Someone Else, It's About Being Better Than You Used To Be.Start Your Journey today with us....</p>
                    <div className='startknowbutton'>
                        <Button className='startbutton' id="mealslist" href="#scrollbar">Start Now</Button>
                        <Button className='knowbutton'  href='./aboutus'>Know More</Button>
                    </div>
                </div>
                <div className='homeimage'>
                    <img alt="" src={HomeImage2} />
                </div><br />
            </div>
            <div id="scrollbar" className='everyentry' >Every Entry Counts</div>
            <div className='everyentrypara'>After entering the data by clicking submit You can see your complete data below. </div>
            <div className='scrollbar'>
                <div className='mealfoodboxes'>
                    <div className='mealbox'>
                        <img alt="" src={MealImage} />
                        <IconButton
                            color='success'
                            className='info'
                            onClick={mealhandleClick}
                        >
                            <Add />
                        </IconButton>
                        <Box className='popupbox'>
                            <Dialog open={ismealOpen} onClose={mealhandleClose}>
                                <DialogTitle>Enter Meal Details</DialogTitle>
                                <DialogContent>
                                    <TextField style={{ marginTop: '5%' }}
                                        label="Meal Name"
                                        value={mealname}
                                        onChange={(e) => setMealname(e.target.value)}
                                        fullWidth
                                    />
                                    <TextField style={{ marginTop: '5%' }}
                                        label="Calories"
                                        type="number"
                                        value={calories}
                                        onChange={(e) => setCalories(e.target.value)}
                                        fullWidth
                                    /><br />
                                    <TextField style={{ marginTop: '5%' }}
                                        type='number'
                                        label='time'
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        fullWidth min={0}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={mealhandleClose}>Cancel</Button>
                                    <Button onClick={addMealsHandler} onChange={(e) => setCalories(e.target.value)}>Submit</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </div>
                    <div className='sleepbox'>
                        <img alt="" src={SleepImage} />
                        <IconButton
                            color='black'
                            className='info'
                            onClick={sleepHandle}
                        >
                            <Add />
                        </IconButton>
                        <Dialog open={isSleepOpen}>
                            <DialogTitle>Enter Sleep Hrs</DialogTitle>
                            <DialogContent>
                                <TextField style={{ marginTop: '5%' }}
                                    type='number'
                                    label="Enter Hrs"
                                    value={sleepTime}
                                    onChange={(e) =>
                                        setSleepTime(e.target.value)
                                    }
                                    min={0}
                                >hrs
                                </TextField>
                                <DialogActions>
                                    <Button onClick={handleclose}>Cancle</Button>
                                    <Button onClick={handlesubmit}>Submit</Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className='waterbox'>
                        <img alt="" src={WaterDrinkingImage} />
                        <IconButton
                            color='black'
                            className='info'
                            onClick={waterHandle}
                        >
                            <Add />
                        </IconButton>
                        <Dialog open={iswaterOpen}>
                            <DialogTitle>Enter Water Taken(Glass)</DialogTitle>
                            <DialogContent>
                                <TextField style={{ marginTop: '5%' }}
                                    type='number'
                                    label="Enter Qantity"
                                    placeholder='in ml'
                                    onChange={(e) =>
                                        setWater(e.target.value)
                                    }
                                    min={0}
                                >hrs
                                </TextField>
                                <DialogActions>
                                    <Button onClick={waterhandleclose}>Cancle</Button>
                                    <Button onClick={waterhandlesubmit}>Submit</Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className='mealslist2'>
                <div className='stepsbox'>
                    <img alt="" src={StepsImage} />
                    <IconButton
                            color='error'
                            className='info'
                            onClick={stepsHandle}
                        >
                            <Add />
                        </IconButton>
                    <Dialog open={isStepsOpen}>
                        <DialogTitle>Enetr Steps</DialogTitle>
                        <DialogContent>
                            <TextField style={{ marginTop: '5%' }}
                                type='number'
                                label="Total Steps"
                                value={steps}
                                onChange={(e) =>
                                    setSteps(e.target.value)
                                }
                            >
                            </TextField>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={stepshandleclose}>Cancle</Button>
                            <Button onClick={stepshandlesubmit
                            }>Submit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='gymbox'>
                    <img alt="" src={GymImage} />
                    <IconButton
                            color='black'
                            className='info'
                            onClick={gymhandleopen}
                        >
                            <Add />
                        </IconButton>
                    <Dialog open={isgymdayson}>
                        <DialogTitle>Enter Mins</DialogTitle>
                        <DialogContent>
                            <TextField
                                type='number'
                                value={gymdays}
                                onChange={(e) => setGymDays(e.target.value)}
                            >
                            </TextField>
                            <DialogActions>
                                <Button onClick={gymhandleclose}>Cancel</Button>
                                <Button onClick={gymhandlesubmit}>Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div style={{ paddingTop: '5%', marginLeft: '5%' }}>
                <div className='dateandtime'>
                    <div className='date'>Date: </div>
                    <Box className='currentDate'>
                        <Typography >
                            {currentDate}
                        </Typography>
                    </Box>
                </div>
                <div style={{ marginTop: '%' }}>Check Your data Here...<Button onClick={() => setisTableOpen(!istableopen)}>Open</Button> </div>
                {istableopen &&
                    <div className='table'  >
                        <Box >
                            <div>
                                <div className='logo'>
                                    <h2 className='mealheading'>Your Meal's List </h2>
                                    <div><img className='meallogo' alt='' src={KcalLogo} /></div>
                                </div>
                                <Table className='mealtable' sx={{ width: 450, marginBottom: '10%' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow className='tablerow1'>
                                            <TableCell align="left">Meal Name</TableCell>
                                            <TableCell align="left">Calories</TableCell>
                                            <TableCell align="left">Time</TableCell>
                                            <TableCell align="left">clear</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {meals.map((meal, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="left">{meal.mealname}</TableCell>
                                                <TableCell align="left">{meal.calories} Kcal</TableCell>
                                                <TableCell align="left">{meal.time}</TableCell>
                                                <TableCell align="left"><Button onClick={() => deleteMealHandler(meal.id)}>Delete</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className='sleepsession'>
                                <div className='sleepflex'>
                                    <div className='sleepheading'>
                                        <h2>Total Sleep time</h2>
                                    </div>
                                    <div className='sleeplogo'>
                                        <img alt="" src={SleepLogo} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className='sleeptime'>
                                    <div>{sleepTime} Hrs </div>
                                    <div>
                                        <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={deletesleephandler}><Grid item xs={8}>
                                            <DeleteOutlinedIcon />
                                        </Grid>
                                        </button></div>
                                </div>
                            </div>
                            <div className='stepsession'>
                                <div className='stepsflex'>
                                    <div className='stepsheading'>
                                        <h2>Total Steps taken</h2>
                                    </div>
                                    <div className='stepslogo'>
                                        <img alt="" src={WalkLogo} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className='stepstaken'>
                                    <div>{steps} Steps</div>
                                    <div>
                                        <div>
                                            <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={deletestepshandler}><Grid item xs={8}>
                                                <DeleteOutlinedIcon />
                                            </Grid>
                                            </button></div>
                                    </div>
                                </div>
                            </div>
                            <div className='watersession'>
                                <div className='waterflex'>
                                    <div className='waterheading'>
                                        <h2>Total Water taken</h2>
                                    </div>
                                    <div className='waterlogo'>
                                        <img alt="" src={WaterLogo} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className='watertaken' >
                                    <div >{water} ml</div>
                                    <div>
                                        <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={deletewaterhandler}><Grid item xs={8}>
                                            <DeleteOutlinedIcon />
                                        </Grid>
                                        </button></div>
                                </div>
                            </div>
                            <div className='gymsession'>
                                <div className='gymflex'>
                                    <div className='gymheading'>
                                        <h2>Total gym Days</h2>
                                    </div>
                                    <span className='gymlogo'>
                                        <img alt="" src={GymLogo} />
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className='gymdays'>
                                    <div>{gymdays} Days</div>
                                    <div>
                                        <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={deletegymhandler}><Grid item xs={8}>
                                            <DeleteOutlinedIcon />
                                        </Grid>
                                        </button></div>
                                </div>
                            </div>
                            <div className='clearsubmitbuttons'>
                                <div> <Button className='clearbutton' onClick={clearhandler} >Clear all</Button></div>
                                <div><Button className='submitbutton' onClick={allsubmithandler}>Submit</Button></div>
                                <div><Button className='submitbutton' onClick={handletableclose}>Close</Button></div>
                            </div>
                        </Box>
                    </div>
                }
            </div>
            <div style={{ marginLeft: '5%' }}>Only After  submitting you can see your progress in Activity session<Button href='/activitysession'>GO</Button></div>
            <div>
                <CommonFooter />
            </div>
        </div>
    )
}
export default SleepFoodWaterHandler