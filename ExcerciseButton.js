import React, { useState } from 'react'
import Screen2CommonNavBar from '../../Screen2CommonNavBar/Screen2CommonNavBar'
import './ExcerciseButton.css'
import Footer from '../../Screen2CommonNavBar/CommonFooter'
import BallWallSqaut08 from'./GymImages/BallWallSqaut08.jpg'
import BandQuad06 from'./GymImages/BandQuad06.jpg'
import BodyWeightSquats1 from'./GymImages/BodyWeightSquats1.jpg'
import BulgarianSplitSquats01 from'./GymImages/BulgarianSplitSquats01.jpg'
import BicepPeakWorkout from'./GymImages/BicepPeakWorkout.jpg'
import BycycleCruches  from './GymImages/BycycleCruches.jpg'
import BirdDog from './GymImages/BirdDog.jpg'

import CabelSeatedTwist from './GymImages/CabelSeatedTwist.jpg'
import Crunches8 from'./GymImages/Crunches8.jpg'
import ChestPress from'./GymImages/ChestPress.jpg'
import ChiarDips from'./GymImages/ChiarDips.jpg'
import ConeDrill from'./GymImages/ConeDrill.jpg'

import DuckWalk from './GymImages/DuckWalk.jpg'
import DeadLifts12 from'./GymImages/DeadLifts12.jpg'
import DiveBomberPushups from'./GymImages/DiveBomberPushups.jpg'
import DumbbellWallSquat09 from'./GymImages/DumbbellWallSquat09.jpg'
import DumbellChest from'./GymImages/DumbellChest.jpg'
import DynamicBack from'./GymImages/DynamicBack.jpg'
import DumbellPullover from './GymImages/DumbellPullover.jpg'

//import FastFeetRun from'./GymImages/FastFeetRun.jpg'
import ErctorSpinae from './GymImages/ErctorSpinae.jpg'

import ErctorSpine from './GymImages/ErctorSpine.jpg'
 import ForearmPushUps from './GymImages/ForearmPushUps.jpg'

import HandstandPushup02 from'./GymImages/HandstandPushup02.jpg'
import HighKnee from './GymImages/HighKnee.jpg'

import JumpingJacks5 from'./GymImages/JumpingJacks5.jpg'
// import Kncklepushups from'./GymImages/Kncklepushups.jpg'
import KneeDiamond from'./GymImages/KneeDiamond.jpg'
import KettlebellSwings from'./GymImages/KettlebellSwings.jpg'

import LegRaises10 from'./GymImages/LegRaises10.jpg'
import LungsMen4 from'./GymImages/LungsMen4.jpg'
import LegSquart05 from'./GymImages/LegSquart05.jpg'
import Lats from './GymImages/Lats.jpg'
import LeverLying from './GymImages/LeverLying.jpg'

import PikePushups04 from'./GymImages/BandQuad06.jpg'
import PistolSqats11 from'./GymImages/PistolSqats11.jpg'
import PushUps2 from'./GymImages/PushUps2.jpg'
import Plank3 from'./GymImages/Plank3.jpg'
import PullupsChinups from'./GymImages/PullupsChinups.jpg'

import RussianTwist from'./GymImages/RussianTwist.jpg'
import RocketSquat from './GymImages/RocketSquat.jpg'

import SeatedCalfRaise from'./GymImages/SeatedCalfRaise.jpg'
import SeatedChestFly from './GymImages/SeatedChestFly.jpg'
import SideLung04 from'./GymImages/SideLung04.jpg'
import Situps from'./GymImages/Situps.jpg'
import SeatedDumbells from './GymImages/SeatedDumbells.jpg'
import SeatedGlute from './GymImages/SeatedGlute.jpg'
import ShoulderWorkout from './GymImages/ShoulderWorkout.jpg'
import SqatHolds from './GymImages/SqatHolds.jpg'
import SpinalTwistYoga from './GymImages/SpinalTwistYoga.jpg'

import TruckCrunches from'./GymImages/TruckCrunches.jpg'
import WallSquat07 from'./GymImages/WallSquat07.jpg'
import Gymlogo from './GymImages/GymLogo.jpg'
import { Button, Popover } from '@mui/material'

import { List, ListItem, ListItemText } from '@mui/material';
import Yoga2 from './GymImages/Yoga2.jpg'
import Yoga3 from './GymImages/Yoga3.jpg'
import YogaHamStrech from './GymImages/YogaHamStrech.jpg'
import YogaKneeLock from './GymImages/YogaKneeLock.jpg'
import YogaStandingHamstring from './GymImages/YogaStandingHamstring.jpg'
import YogaStaticStrech from './GymImages/YogaStaticStrech.jpg'
function ExcerciseButton() {

//   const setDateDataToLocalStorage = (date, data) => {
//     localStorage.setItem(date, JSON.stringify(data));
//   };
//   const getDateDataFromLocalStorage = (date) => {
//     const data = localStorage.getItem(date);
//     return data ? JSON.parse(data) : null;
//   };
//   const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
// const data = { example: 'data' };

// // Set data to local storage for current date
// setDateDataToLocalStorage(currentDate, data);

// // Get data from local storage for current date
// const retrievedData = getDateDataFromLocalStorage(currentDate);
    
    
    const [excercisetype,setExcercisetype]=useState(null);
    const [selectedOption,setselectedOption]=useState(null);

    const handleClick=(event)=>{
      setExcercisetype(event.currentTarget);
    }
    

  const handleOptionClick = (option) => {
    setselectedOption(option);
    setExcercisetype(null);
};
const handleClose = () => {
  setExcercisetype(null);
};

  return (
    <div className='excercisebody'>
        <div><Screen2CommonNavBar/></div>
        
      <div className='gym'>
      <div>
        <h1 className='h1'>Excercises</h1>
      </div>
      <div className='gymlogo'>
        <img src={Gymlogo}/>
        </div>
      </div>

      <div className='searchbar' >
        <Button className='input' onClick={handleClick}>
        Search here
        </Button>
        <Popover 
        open={Boolean(excercisetype)}
        anchorEl={excercisetype}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
      }}
      transformOrigin={{
          vertical: 'top',
          horizontal: 'bottom',
      }}
        >

<List style={{ display: 'flex', flexDirection: 'column', fontSize: '20px', listStyle: 'none' ,width:'100%'}}>

<Button style={{Maxwidth:'30%'}}>
    <ListItem onClick={() => handleOptionClick("Beginners")}>
        <ListItemText primary="Beginners" />
    </ListItem>
</Button>
<Button> <ListItem onClick={() => handleOptionClick("Advanced")}>
    <ListItemText primary="Advanced" />
</ListItem>
</Button>
<Button> 
  <ListItem onClick={() => handleOptionClick("All")}>
    <ListItemText primary="All" />
</ListItem>
</Button>

</List>




        </Popover>
      </div>
      
      
      

  {
    selectedOption === "Beginners" && 
    <div className='basic'>
      
      <div className='basic__excercises1'>
          <div className='bodyweight'>
            
            <div className='img'><img src={BodyWeightSquats1}/></div>
            <div className=''><h2 style={{marginLeft:'15%'}}>Body Weight Squats</h2></div>
          </div>
          <div className='legraises'>
            <div className='img'><img src={LegRaises10}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Leg Raises</h2></div>
          </div>
          
        <div className='staticyoga'>
          <div className='img'><img src={YogaStaticStrech}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
        </div> 
        
          
      </div>
      <div className='basic__excercises2'>
      <div className='sidelungs'>
            <div className='img'><img src={SideLung04}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Side lungs</h2></div>
          </div>
      {/*  */}
          <div className='yogastand'>
          <div className='img'><img src={YogaStandingHamstring}/></div>
          <div className=''><h2 style={{marginLeft:'30%'}}>Standing Hamstring</h2></div>
        </div>
          {/*  */}
          <div className='crunches'>
            <div className='img'><img src={Crunches8}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>Crunches</h2></div>
          </div>
      </div>
      <div className='basic__excercises3'>
      <div className='wallsquat'>
            <div className='img'><img src={WallSquat07}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Wall squat</h2></div>
          </div>
          <div className='divebomberpushups'>
            <div className='img'><img src={DiveBomberPushups}/></div>
            <div className=''><h2 style={{marginLeft:'18%'}}>dive bomber pushups</h2></div>
          </div>
          <div className='legsquat'>
            <div className='img'><img src={LegSquart05}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>leg squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises6'>
    <div className='yoga1'>
          <div className='img'><img src={Yoga2}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>yoga</h2></div>
        </div>
        <div className='yoga2'>
          <div className='img'><img src={Yoga3}/></div>
          <div className=''><h2 style={{marginLeft:'30%'}}>Yoga2</h2></div>
        </div>
        <div className='yoga3'>
          <div className='img'><img src={YogaHamStrech}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
        </div>
    </div>
      <div className='basic__excercises7'>
    <div className='yoga4'>
          <div className='img'><img src={YogaKneeLock}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>yoga 4</h2></div>
        </div>
        <div className='pushups'>
            
            <div className='img'><img src={PushUps2}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>PushUps</h2></div>
          </div>
          <div className='plank'>
            <div className='img'><img src={Plank3}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>Planks</h2></div>
          </div>
        {/* */}
    </div>
      <div className='basic__excercises4'>
      <div className='seatedcalf'>
            <div className='img'><img src={SeatedCalfRaise}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>Seated calf raise</h2></div>
          </div>
          <div className='handstandpushups'>
            <div className='img'><img src={HandstandPushup02}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>handstand pushups</h2></div>
          </div>
          <div className='bycyclecrunches'>
            <div className='img'><img src={BycycleCruches}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>bycycle crunches</h2></div>
          </div>
      </div>
      <div className='basic__excercises5'>
      <div className='trunkcrunches'>
            <div className='img'><img src={TruckCrunches}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Truck Crunches</h2></div>
          </div>
          <div className='situps'>
            <div className='img'><img src={Situps}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>situps</h2></div>
          </div>
          <div className='kneediamond'>
            <div className='img'><img src={KneeDiamond}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>knee diamond</h2></div>
          </div>
      </div>
      <div className='basic__excercises11'>
      <div className='birddog'>
            <div className='img'><img src={BirdDog}/></div>
            <div className=''><h2 style={{marginLeft:'32%'}}>Bird Dog</h2></div>
          </div>
          <div className='erctorspine'>
            <div className='img'><img src={ErctorSpine}/></div>
            <div className=''><h2 style={{marginLeft:'29%'}}>Erctor Spine</h2></div>
          </div>
          <div className='rocketsquat'>
            <div className='img'><img src={RocketSquat}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Rocket Squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises11' style={{marginBottom:'20%'}}>
      <div className='squathold'>
            <div className='img'><img src={SqatHolds}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Squat Holds</h2></div>
          </div>
          <div className='duckwalk'>
            <div className='img'><img src={DuckWalk}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Duck Walk</h2></div>
          </div>
          <div className='highknee'>
            <div className='img'><img src={HighKnee}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>High Knee</h2></div>
          </div>
      </div>
    </div>
  }


  {
    selectedOption === "Advanced" && 
    <div>
        <div className='basic__excercises6'>
      <div className='pistolsquats'>
            <div className='img'><img src={PistolSqats11}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Pistol Sqats</h2></div>
          </div>
          <div className='russiantwist'>
            <div className='img'><img src={RussianTwist}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Russian Twist</h2></div>
          </div>
          <div className='kettlebellswings'>
            <div className='img'><img src={KettlebellSwings}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
          </div>
      </div>
      <div className='basic__excercises7'>
      <div className='seatedchestfly'>
            <div className='img'><img src={SeatedChestFly}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Seated ChestFly</h2></div>
          </div>
          <div className='conedrill'>
            <div className='img'><img src={ConeDrill}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>cone drill</h2></div>
          </div>
          <div className='ballwallsquat'>
            <div className='img'><img src={BallWallSqaut08}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>ballwall squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises8'>
      <div className='bulgariansplitsquat'>
            <div className='img'><img src={BulgarianSplitSquats01}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>bulgarian split squat</h2></div>
          </div>
          <div className='biceppeakworkout'>
            <div className='img'><img src={BicepPeakWorkout}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>bicep peak workout</h2></div>
          </div>
          <div className='chestpress'>
            <div className='img'><img src={ChestPress}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>chest press</h2></div>
          </div>
      </div>
      <div className='basic__excercises9'>
      <div className='chairdips'>
            <div className='img'><img src={ChiarDips}/></div>
            <div className=''><h2 style={{marginLeft:'28%'}}>chair dips</h2></div>
          </div>
          <div className='deadlifts'>
            <div className='img'><img src={DeadLifts12}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>dead lifts</h2></div>
          </div>
          <div className='dumbellwall'>
            <div className='img'><img src={DumbbellWallSquat09}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>dumbell wall</h2></div>
          </div>
      </div>
      <div className='basic__excercises10'>
      <div className='dumbellchest'>
            <div className='img'><img src={DumbellChest}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>dumbell chest</h2></div>
          </div>
          <div className='dynamicback'>
            <div className='img'><img src={DynamicBack}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>dymanic back</h2></div>
          </div>
          <div className='jumpingjacks'>
            <div className='img'><img src={JumpingJacks5}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>jumping jacks</h2></div>
          </div>
      </div>
      
      <div className='basic__excercises11'>
      <div className='lungs'>
            <div className='img'><img src={LungsMen4}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>lungs</h2></div>
          </div>
          <div className='pikepushups'>
            <div className='img'><img src={PikePushups04}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>pike pushups</h2></div>
          </div>
          <div className='pullupschinups'>
            <div className='img'><img src={PullupsChinups}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>pullups chinups</h2></div>
          </div>
      </div>
    
      <div className='basic__excercises11'>
      <div className='cabelseatedtwist'>
            <div className='img'><img src={CabelSeatedTwist}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Cabel Seated Twist</h2></div>
          </div>
          <div className='dumbellpullover'>
            <div className='img'><img src={DumbellPullover}/></div>
            <div className=''><h2 style={{marginTop:'16%',marginLeft:'20%'}}>Dumbell Pullover</h2></div>
          </div>
          <div className='pullupschinups'>
            <div className='img'><img src={ErctorSpinae}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Erctor Spinae</h2></div>
          </div>
      
      </div>
      
      <div className='basic__excercises11' style={{marginBottom:'20%'}}>
      <div className='lats'>
            <div className='img'><img src={Lats}/></div>
            <div className=''><h2 style={{marginLeft:'37%'}}>Lats</h2></div>
          </div>
          <div className='leverlying'>
            <div className='img'><img src={LeverLying}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Lever Lying</h2></div>
          </div>
          <div className='shoulderworkout'>
            <div className='img'><img src={ShoulderWorkout}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Shoulder Workout</h2></div>
          </div>
      
      </div>
    </div>
  }


<div>
    { selectedOption==="All" &&
    
    <div>
    <div>
    <div className='basic'>
      
      <div className='basic__excercises1'>
          <div className='bodyweight'>
            
            <div className='img'><img src={BodyWeightSquats1}/></div>
            <div className=''><h2 style={{marginLeft:'15%'}}>Body Weight Squats</h2></div>
          </div>
          <div className='legraises'>
            <div className='img'><img src={LegRaises10}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Leg Raises</h2></div>
          </div>
          
        <div className='staticyoga'>
          <div className='img'><img src={YogaStaticStrech}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
        </div> 
        
          
      </div>
      <div className='basic__excercises2'>
      <div className='sidelungs'>
            <div className='img'><img src={SideLung04}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Side lungs</h2></div>
          </div>
      {/*  */}
          <div className='yogastand'>
          <div className='img'><img src={YogaStandingHamstring}/></div>
          <div className=''><h2 style={{marginLeft:'30%'}}>Standing Hamstring</h2></div>
        </div>
          {/*  */}
          <div className='crunches'>
            <div className='img'><img src={Crunches8}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>Crunches</h2></div>
          </div>
      </div>
      <div className='basic__excercises3'>
      <div className='wallsquat'>
            <div className='img'><img src={WallSquat07}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Wall squat</h2></div>
          </div>
          <div className='divebomberpushups'>
            <div className='img'><img src={DiveBomberPushups}/></div>
            <div className=''><h2 style={{marginLeft:'18%'}}>dive bomber pushups</h2></div>
          </div>
          <div className='legsquat'>
            <div className='img'><img src={LegSquart05}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>leg squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises6'>
    <div className='yoga1'>
          <div className='img'><img src={Yoga2}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>yoga</h2></div>
        </div>
        <div className='yoga2'>
          <div className='img'><img src={Yoga3}/></div>
          <div className=''><h2 style={{marginLeft:'30%'}}>Yoga2</h2></div>
        </div>
        <div className='yoga3'>
          <div className='img'><img src={YogaHamStrech}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
        </div>
    </div>
      <div className='basic__excercises7'>
    <div className='yoga4'>
          <div className='img'><img src={YogaKneeLock}/></div>
          <div className=''><h2 style={{marginLeft:'25%'}}>yoga 4</h2></div>
        </div>
        <div className='pushups'>
            
            <div className='img'><img src={PushUps2}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>PushUps</h2></div>
          </div>
          <div className='plank'>
            <div className='img'><img src={Plank3}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>Planks</h2></div>
          </div>
        {/* */}
    </div>
      <div className='basic__excercises4'>
      <div className='seatedcalf'>
            <div className='img'><img src={SeatedCalfRaise}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>Seated calf raise</h2></div>
          </div>
          <div className='handstandpushups'>
            <div className='img'><img src={HandstandPushup02}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>handstand pushups</h2></div>
          </div>
          <div className='bycyclecrunches'>
            <div className='img'><img src={BycycleCruches}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>bycycle crunches</h2></div>
          </div>
      </div>
      <div className='basic__excercises5'>
      <div className='trunkcrunches'>
            <div className='img'><img src={TruckCrunches}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Truck Crunches</h2></div>
          </div>
          <div className='situps'>
            <div className='img'><img src={Situps}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>situps</h2></div>
          </div>
          <div className='kneediamond'>
            <div className='img'><img src={KneeDiamond}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>knee diamond</h2></div>
          </div>
      </div>
      <div className='basic__excercises11'>
      <div className='birddog'>
            <div className='img'><img src={BirdDog}/></div>
            <div className=''><h2 style={{marginLeft:'32%'}}>Bird Dog</h2></div>
          </div>
          <div className='erctorspine'>
            <div className='img'><img src={ErctorSpine}/></div>
            <div className=''><h2 style={{marginLeft:'29%'}}>Erctor Spine</h2></div>
          </div>
          <div className='rocketsquat'>
            <div className='img'><img src={RocketSquat}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Rocket Squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises11' style={{marginBottom:'20%'}}>
      <div className='squathold'>
            <div className='img'><img src={SqatHolds}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Squat Holds</h2></div>
          </div>
          <div className='duckwalk'>
            <div className='img'><img src={DuckWalk}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Duck Walk</h2></div>
          </div>
          <div className='highknee'>
            <div className='img'><img src={HighKnee}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>High Knee</h2></div>
          </div>
      </div>
    </div>
    </div>
    <div>
    <div>
        <div className='basic__excercises6'>
      <div className='pistolsquats'>
            <div className='img'><img src={PistolSqats11}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Pistol Sqats</h2></div>
          </div>
          <div className='russiantwist'>
            <div className='img'><img src={RussianTwist}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Russian Twist</h2></div>
          </div>
          <div className='kettlebellswings'>
            <div className='img'><img src={KettlebellSwings}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Kettlebell Swings</h2></div>
          </div>
      </div>
      <div className='basic__excercises7'>
      <div className='seatedchestfly'>
            <div className='img'><img src={SeatedChestFly}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Seated ChestFly</h2></div>
          </div>
          <div className='conedrill'>
            <div className='img'><img src={ConeDrill}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>cone drill</h2></div>
          </div>
          <div className='ballwallsquat'>
            <div className='img'><img src={BallWallSqaut08}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>ballwall squat</h2></div>
          </div>
      </div>
      <div className='basic__excercises8'>
      <div className='bulgariansplitsquat'>
            <div className='img'><img src={BulgarianSplitSquats01}/></div>
            <div className=''><h2 style={{marginLeft:'20%'}}>bulgarian split squat</h2></div>
          </div>
          <div className='biceppeakworkout'>
            <div className='img'><img src={BicepPeakWorkout}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>bicep peak workout</h2></div>
          </div>
          <div className='chestpress'>
            <div className='img'><img src={ChestPress}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>chest press</h2></div>
          </div>
      </div>
      <div className='basic__excercises9'>
      <div className='chairdips'>
            <div className='img'><img src={ChiarDips}/></div>
            <div className=''><h2 style={{marginLeft:'28%'}}>chair dips</h2></div>
          </div>
          <div className='deadlifts'>
            <div className='img'><img src={DeadLifts12}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>dead lifts</h2></div>
          </div>
          <div className='dumbellwall'>
            <div className='img'><img src={DumbbellWallSquat09}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>dumbell wall</h2></div>
          </div>
      </div>
      <div className='basic__excercises10'>
      <div className='dumbellchest'>
            <div className='img'><img src={DumbellChest}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>dumbell chest</h2></div>
          </div>
          <div className='dynamicback'>
            <div className='img'><img src={DynamicBack}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>dymanic back</h2></div>
          </div>
          <div className='jumpingjacks'>
            <div className='img'><img src={JumpingJacks5}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>jumping jacks</h2></div>
          </div>
      </div>
      
      <div className='basic__excercises11'>
      <div className='lungs'>
            <div className='img'><img src={LungsMen4}/></div>
            <div className=''><h2 style={{marginLeft:'40%'}}>lungs</h2></div>
          </div>
          <div className='pikepushups'>
            <div className='img'><img src={PikePushups04}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>pike pushups</h2></div>
          </div>
          <div className='pullupschinups'>
            <div className='img'><img src={PullupsChinups}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>pullups chinups</h2></div>
          </div>
      </div>
    
      <div className='basic__excercises11'>
      <div className='cabelseatedtwist'>
            <div className='img'><img src={CabelSeatedTwist}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Cabel Seated Twist</h2></div>
          </div>
          <div className='dumbellpullover'>
            <div className='img'><img src={DumbellPullover}/></div>
            <div className=''><h2 style={{marginTop:'16%',marginLeft:'20%'}}>Dumbell Pullover</h2></div>
          </div>
          <div className='pullupschinups'>
            <div className='img'><img src={ErctorSpinae}/></div>
            <div className=''><h2 style={{marginLeft:'30%'}}>Erctor Spinae</h2></div>
          </div>
      
      </div>
      
      <div className='basic__excercises11' style={{marginBottom:'20%'}}>
      <div className='lats'>
            <div className='img'><img src={Lats}/></div>
            <div className=''><h2 style={{marginLeft:'37%'}}>Lats</h2></div>
          </div>
          <div className='leverlying'>
            <div className='img'><img src={LeverLying}/></div>
            <div className=''><h2 style={{marginLeft:'35%'}}>Lever Lying</h2></div>
          </div>
          <div className='shoulderworkout'>
            <div className='img'><img src={ShoulderWorkout}/></div>
            <div className=''><h2 style={{marginLeft:'25%'}}>Shoulder Workout</h2></div>
          </div>
      
      </div>
    </div>
      </div>

      </div>

    
}
</div>
<div>


</div>


      


          <div>
            <Footer/>
          </div>
        </div>
  )
}

export default ExcerciseButton

