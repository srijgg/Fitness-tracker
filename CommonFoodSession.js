import React, { useState } from 'react'
import Card from '@mui/material/Card';
import './CommonFoodSession.css'
import Screen2CommonNavBar from '../../../Screen2CommonNavBar/Screen2CommonNavBar'
import Footer from '../../../Screen2CommonNavBar/CommonFooter'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Avocada from './FoodImages/WeightGain/Avocado.jpg'
import Cherries10 from './FoodImages/WeightGain/Cherries10.jpg'
import Coconut3 from './FoodImages/WeightGain/Coconut3.jpg'
import Grapes5 from './FoodImages/WeightGain/Grapes5.jpg'
import Mangoes4 from './FoodImages/WeightGain/Mangoes4.jpg'
import pineapp8 from './FoodImages/WeightGain/Pineapp8.jpg'
import DryedDated6 from './FoodImages/WeightGain/DryedDated6.jpg'
import DryedFigs7 from './FoodImages/WeightGain/DryedFigs7.jpg'
import Bananas1 from './FoodImages/WeightGain/Bananas1.jpg'
import Pomegranate9 from './FoodImages/WeightGain/Pomegranate9.jpg'
import Yams2 from './FoodImages/WeightGain/Yams2.jpg'
import Carrots3 from './FoodImages/WeightGain/Carrots3.jpg'
import ButterNutSqatch1 from './FoodImages/WeightGain/ButterNutSqatch1.jpg'
import BellPeppers3 from './FoodImages/WeightLoss/BellPeppers3.jpg'
import califlower2 from './FoodImages/WeightLoss/Califlower2.jpg'
import Broccoli1 from './FoodImages/WeightLoss/Broccoli1.jpg'
import Cucumber from './FoodImages/WeightLoss/Cucumber.jpg'
import Spanish5 from './FoodImages/WeightLoss/Spinach5.jpg'
import Kale6 from './FoodImages/WeightLoss/Kale6.jpg'
import SwissCard7 from './FoodImages/WeightLoss/SwissCard7.jpg'
import GreenBeans9 from './FoodImages/WeightLoss/GreenBeans9.jpg'
import Tomatoes8 from './FoodImages/WeightLoss/Tomatoes8.jpg'
import LemonHoney4 from './FoodImages/WeightLoss/LemonHoney4.jpg'
import CucumberMintJuice3 from './FoodImages/WeightLoss/CucumberMintJuice3.jpg'
import BeetrootJuice2 from './FoodImages/WeightLoss/BeetrootJuice2.jpg'
import TomatoJuice5 from './FoodImages/WeightLoss/TomatoJuice5.jpg'
import AlmoandPeanutButter13 from './FoodImages/WeightGain/AlomondPeanutButter13.jpg'
import WholeGrains15 from './FoodImages/WeightGain/WholeGrains15.jpg'
import Granola16 from './FoodImages/WeightGain/Granola16.jpg'
import Celery13 from './FoodImages/WeightLoss/Celery13.jpg'
import Asparagus14 from './FoodImages/WeightLoss/Asparagus14.jpg'
import SalomonFish15 from './FoodImages/WeightLoss/SalmonFish15.jpg'
import ChiaSeeds16 from './FoodImages/WeightLoss/ChiaSeeds16.jpg'
import LeanProtienChicken from './FoodImages/WeightGain/LeanProtienChicken.jpg'
import LeanProtienFish from './FoodImages/WeightGain/LeanProtienFish.jpg'
import LeanProtienTurkey from './FoodImages/WeightGain/LeanProtienTurkey.jpg'
import WholeGrainWhite from './FoodImages/WeightGain/WholeGrainWhite.jpg'
import WholeGrainsBrown from './FoodImages/WeightGain/WholeGrainsBrown.jpg'
import WholeGrainsQuinoa from './FoodImages/WeightGain/WholeGrainsQuinoa.jpg'
import Breakfast from './FoodImages/Fit/BreakfatLunchDinner/Breakfast.jpg'
import BreakfastLogo from './FoodImages/Fit/BreakfatLunchDinner/BreakfastLogo.jpg'
import LunchLogo from './FoodImages/Fit/BreakfatLunchDinner/LunchLogo.jpg'
import DinnerLogo from './FoodImages/Fit/BreakfatLunchDinner/DinnerLogo.jpg'
import JuiceLogo from './FoodImages/Fit/BreakfatLunchDinner/JuiceLogo.jpg'
import SnacksLogo from './FoodImages/Fit/BreakfatLunchDinner/SnacksLogo.jpg'
import AvocadoToast from './FoodImages/Fit/BreakfatLunchDinner/AvocadoToast.jpg'
import GreekYogurt from './FoodImages/Fit/BreakfatLunchDinner/GreekYogurt.jpg'
import OvernightOats from './FoodImages/Fit/BreakfatLunchDinner/OvernightOats.jpg'
import ScrambledEgg from './FoodImages/Fit/BreakfatLunchDinner/ScrambledEgg.jpg'
import Quinoa from './FoodImages/Fit/BreakfatLunchDinner/Quinoa.jpg'
import Pancake from './FoodImages/Fit/BreakfatLunchDinner/Pancake.jpg'
import Potato from './FoodImages/Fit/BreakfatLunchDinner/Potato.jpg'
import { FavoriteBorder } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RiceWithCurry from './FoodImages/Fit/Lunch/RiceWithCurry.jpg'
import ChickenCaesarSalad from './FoodImages/Fit/Lunch/ChickenCaesarSalad.jpg'
import PowerBowl from './FoodImages/Fit/Lunch/PowerBowl.jpg'
import FishCurry from './FoodImages/Fit/Lunch/FishCurry.jpg'
import LentilVegeSoup from './FoodImages/Fit/Lunch/LentilVegeSoup.jpg'
import ChickenSmashedPotato from './FoodImages/Fit/Lunch/ChickenSmashedPotato.jpg'
import BakedcodWithVegetables from './FoodImages/Fit/Lunch/BakedcodWithVegetables.jpg'
import ApplesliceWithAlmond from './FoodImages/Fit/Dinner/ApplesliceWithAlmond.jpg'
import ChamomileTea from './FoodImages/Fit/Dinner/ChamomileTea.jpg'
import Chapathi from './FoodImages/Fit/Dinner/Chapathi.jpg'
import Sprouts from './FoodImages/Fit/Dinner/Sprouts.jpg'
import MixedFruits from './FoodImages/Fit/Dinner/MixedFruits.jpg'
import FruitImage from './FoodImages/Juices/FruitImage.jpg'
import Juicelogo from './FoodImages/Juices/Juicelogo.jpg'

import CarrotJuice from './FoodImages/Juices/CarrotJuice.jpg'
import AppleJuice from './FoodImages/Juices/AppleJuice.jpg'
import BeetRoot from './FoodImages/Juices/BeetRoot.jpg'
import BerryJuice from './FoodImages/Juices/BerryJuice.jpg'
import GingerLemonJuice from './FoodImages/Juices/GingerLemonJuice.jpg'
import CoconutJuice from './FoodImages/Juices/CoconutJuice.jpg'
import KaleJuice from './FoodImages/Juices/KaleJuice.jpg'
import OrangeJuice from './FoodImages/Juices/OrangeJuice.jpg'
import SpanishJuice from './FoodImages/Juices/SpanishJuice.jpg'
import CeleryJuice from './FoodImages/Juices/CeleryJuice.jpg'
import CucumberMintJuice from './FoodImages/Juices/CucumberMintJuice.jpg'
import PineappleJuice from './FoodImages/Juices/PineappleJuice.jpg'
import CommonFooter from '../../../Screen2CommonNavBar/CommonFooter';
import AppleSpanishJuice from './FoodImages/WeightGain/AppleSpanishJuice.jpg'
import AvocadoAlomdMilkShake from'./FoodImages/WeightGain/AvocadoAlomdMilkShake.jpg'
import BananaPeanutSmooth from './FoodImages/WeightGain/BananaPeanutSmooth.jpg'
import DatesMilkShake from './FoodImages/WeightGain/DatesMilkShake.jpg'
import PineAppleCoconuSmooth from './FoodImages/WeightGain/PineAppleCoconuSmooth.jpg'
import SweekPotatoOrangeSmooth from './FoodImages/WeightGain/SweekPotatoOrangeSmooth.jpg'
import BerryYougutJuice from './FoodImages/WeightGain/BerryYougutJuice.jpg'
import MilkHoneyJuice from './FoodImages/WeightGain/MilkHoneyJuice.jpg'
import CarrotGingerJuice from './FoodImages/WeightGain/CarrotGingerJuice.jpg';
import WatermeloneJuice from './FoodImages/WeightGain/WatermeloneJuice.jpg'
import GrapeFruitJuice from './FoodImages/WeightLoss/GrapeFruitJuice.jpg'
import PineappleOrangeJuice from './FoodImages/WeightGain/PineappleOrangeJuice.jpg'
import KarbujaJuice from './FoodImages/Juices/KarbujaJuice.jpg'
import SugarCaneJuice from './FoodImages/Juices/SugarCaneJuice.jpg'
import PapayaJuice from './FoodImages/Juices/PapayaJuice.jpg'



function CommonFoodSession() {
    const option = localStorage.getItem('option');
    console.log(option, 'ccccccc')

    const[iscarrotopen,setisCarrotopen]=useState(false);

    const handleCarrotClick=()=>{
        setisCarrotopen(true);
    }
    const handleCarrotClose=()=>{
        setisCarrotopen(false);
    }
    
    const[isappleopen,setisAppleopen]=useState(false);

    const handleAppleClick=()=>{
        setisAppleopen(true);
    }
    const handleAppleClose=()=>{
        setisAppleopen(false);
    }

    const[isbeetrootopen,setisBetterootopen]=useState(false);

    const handleBeetrootClick=()=>{
        setisBetterootopen(true);
    }
    const handleBeetrootClose=()=>{
        setisBetterootopen(false);
    }

    const[iscoconutopen,setisCoconutopen]=useState(false);

    const handleCoconutClick=()=>{
        setisCoconutopen(true);
    }
    const handleCoconutClose=()=>{
        setisCoconutopen(false);
    }

    const[isgingeropen,setisGingeropen]=useState(false);

    const handleGingerClick=()=>{
        setisGingeropen(true);
    }
    const handleGingerClose=()=>{
        setisGingeropen(false);
    }

    const[iskaleopen,setisKaleopen]=useState(false);

    const handleKaleClick=()=>{
        setisKaleopen(true);
    }
    const handleKaleClose=()=>{
        setisKaleopen(false);
    }

    const[isorangeopen,setisOrangeopen]=useState(false);

    const handleOrangeClick=()=>{
        setisOrangeopen(true);
    }
    const handleOrangeClose=()=>{
        setisOrangeopen(false);
    }


    const[isspanishopen,setisSpanishopen]=useState(false);

    const handleSpanishClick=()=>{
        setisSpanishopen(true);
    }
    const handleSpanishClose=()=>{
        setisSpanishopen(false);
    }

    const[isberryopen,setisBerryopen]=useState(false);

    const handleBerryClick=()=>{
        setisBerryopen(true);
    }
    const handleBerryClose=()=>{
        setisBerryopen(false);
    }
    const[isceleryopen,setisCeleryopen]=useState(false);

    const handleCeleryClick=()=>{
        setisCeleryopen(true);
    }
    const handleCeleryClose=()=>{
        setisCeleryopen(false);
    }
    const[iscucumberopen,setisCucumberopen]=useState(false);

    const handleCucumberClick=()=>{
        setisCucumberopen(true);
    }
    const handleCucumberClose=()=>{
        setisCucumberopen(false);
    }

    const[ispineappleopen,setisPineappleopen]=useState(false);

    const handlePineappleClick=()=>{
        setisPineappleopen(true);
    }
    const handlePineappleClose=()=>{
        setisPineappleopen(false);
    }
    
    const[iskarbujaopen,setisKarbujaopen]=useState(false);

    const handleKarbujaClick=()=>{
        setisKarbujaopen(true);
    }
    const handleKarbujaClose=()=>{
        setisKarbujaopen(false);
    }

    const[issugarcaneopen,setisSugarcaneopen]=useState(false);

    const handleSugarcaneClick=()=>{
        setisSugarcaneopen(true);
    }
    const handleSugarcaneClose=()=>{
        setisSugarcaneopen(false);
    }

    const[ispapayaopen,setisPapayaopen]=useState(false);

    const handlePapayaClick=()=>{
        setisPapayaopen(true);
    }
    const handlePapayaClose=()=>{
        setisPapayaopen(false);
    }
    
    
    

    return (
        <div>
            <Screen2CommonNavBar />




        <div>
            {option === "Weight Gain" &&
                <div className='weightgain'>

                    <div className='heading'>
                        <h1 className='h1'>For Weight Gain</h1>
                        <p></p>
                    </div>
                    <div className='weight__gain__session' style={{ paddingTop: '1%' }}>
                        <div className='card__row1' style={{ display: 'flex', flexDirection: 'row' }}>
                            <Card className='card1' sx={{ width: 320, height: 350 }}>
                                <CardActionArea >
                                    <CardMedia className='card__img'
                                        component="img"
                                        height="180"
                                        src={Bananas1}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Bananas
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 89 Kcal<br />
                                            <span>Protiens</span>: 1.1 Grams <br />
                                            <span className='fat'>Fat</span> : 0.3 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card2' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        src={Avocada}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Avocada
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <div><span>Quantity</span>: 100 Grams<br /></div>
                                            <div><span>Calories</span>: 160 Kcal<br /></div>
                                            <div><span>Protiens</span>: 2 Grams <br /></div>
                                            <div><span className='fat'>Fat</span> : 15 Grams <br /></div>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card3' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Coconut3}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Coconut Kernal
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 354 Kcal<br />
                                            <span>Protiens</span>: 3.3 Grams <br />
                                            <span className='fat'>Fat</span> : 33.5 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card4' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Mangoes4}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Mangoes
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 60 Kcal<br />
                                            <span>Protiens</span>: 0.8 Grams <br />
                                            <span className='fat'>Fat</span> : 0.4 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row2' style={{ display: 'flex', flexDirection: 'row' }} >

                            <Card className='card5' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Grapes5}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Grapes
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 67 Kcal<br />
                                            <span>Protiens</span>: 0.6 Grams <br />
                                            <span className='fat'>Fat</span> : 0.2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card6' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={DryedDated6}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Dried Dates
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 282 Kcal<br />
                                            <span>Protiens</span>: 2.5 Grams <br />
                                            <span className='fat'>Fat</span> : 0.4 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card7' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={DryedFigs7}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Dried Figs
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 249 Kcal<br />
                                            <span>Protiens</span>: 3.3 Grams <br />
                                            <span className='fat'>Fat</span> : 0.9 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card8' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={pineapp8}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Pineapple
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 50 Kcal<br />
                                            <span>Protiens</span>: 0.5 Grams <br />
                                            <span className='fat'>Fat</span> : 0.1 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row3' style={{ display: 'flex', flexDirection: 'row' }} >


                            <Card className='card9' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Pomegranate9}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Pomegranate
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 83 Kcal<br />
                                            <span>Protiens</span>: 1.7 Grams <br />
                                            <span className='fat'>Fat</span> : 1.2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card10' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={ButterNutSqatch1}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Butternut Squash
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 45 Kcal<br />
                                            <span>Protiens</span>: 1 Grams <br />
                                            <span className='fat'>Fat</span> : 0.1 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card11' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Yams2}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Yams
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 118 Kcal<br />
                                            <span>Protiens</span>: 1.5 Grams <br />
                                            <span className='fat'>Fat</span> : 0.2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card12' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Carrots3}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1' >
                                        <Typography className='fruit__name' >
                                            Carrots
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 41 Kcal<br />
                                            <span>Protiens</span>: 0.9 Grams <br />
                                            <span className='fat'>Fat</span> :0.2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row4' style={{ display: 'flex', flexDirection: 'row' }} >


                            <Card className='card13' sx={{ width: 320, height: 360 }}>
                                <CardActionArea className='card'>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={AlmoandPeanutButter13}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' style={{ marginLeft: '5%' }} >
                                            Almond Peanut Butter
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:588 Kcal<br />
                                            <span>Protiens</span>: 25.1 Grams <br />
                                            <span className='fat'>Fat</span> : 50.6 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card14' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={LeanProtienChicken}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Chicken
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 165 Kcal<br />
                                            <span>Protiens</span>: 31 Grams <br />
                                            <span className='fat'>Fat</span> : 3.6 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card15' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={LeanProtienFish}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Fish
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:90-100 Kcal<br />
                                            <span>Protiens</span>: 20-25 Grams <br />
                                            <span className='fat'>Fat</span> : 1-2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card16' sx={{ width: 320, height: 360 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={LeanProtienTurkey}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Turkey
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>: 135 Kcal<br />
                                            <span>Protiens</span>: 30 Grams <br />
                                            <span className='fat'>Fat</span> : 1 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row4' style={{ display: 'flex', flexDirection: 'row' }} >
                            <Card className='card17' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={WholeGrainsBrown}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Brown Rice
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:111 Kcal<br />
                                            <span>Protiens</span>: 2.6 Grams <br />
                                            <span className='fat'>Fat</span> : 1.9 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card18' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={WholeGrainWhite}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            White Rice
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:130 Kcal<br />
                                            <span>Protiens</span>: 2.7 Grams <br />
                                            <span className='fat'>Fat</span> : 0.3 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card19' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={WholeGrainsQuinoa}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Quinoas
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:120 Kcal<br />
                                            <span>Protiens</span>: 4.4 Grams <br />
                                            <span className='fat'>Fat</span> : 1.9 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card20' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={Granola16}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Granola
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 Grams <br />
                                            <span>Calories</span>:470 Kcal<br />
                                            <span>Protiens</span>: 11 Grams <br />
                                            <span className='fat'>Fat</span> : 19 Grams <br />
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row4' style={{ display: 'flex', flexDirection: 'row' }} >
                            <Card className='card17' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={AppleSpanishJuice}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Apple and Spinach 
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:30-40 Kcal<br />
                                            <span>Protiens</span>: 1 Grams <br />
                                            <span className='fat'>Fat</span> : 0.4 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card18' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={AvocadoAlomdMilkShake}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                        Avocado and Almond 
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:140 Kcal<br />
                                            <span>Protiens</span>: 2-3 Grams <br />
                                            <span className='fat'>Fat</span> : 10 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card19' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={BananaPeanutSmooth}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Banana Peanut Smooth
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:120 Kcal<br />
                                            <span>Protiens</span>: 2-3 Grams <br />
                                            <span className='fat'>Fat</span> : 3-5 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card20' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={DatesMilkShake}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                            Dates MilkShake
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:140 Kcal<br />
                                            <span>Protiens</span>: 2-3 Grams <br />
                                            <span className='fat'>Fat</span> : 2-3 Grams <br />
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='card__row4' style={{ display: 'flex', flexDirection: 'row' }} >
                            <Card className='card17' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={PineAppleCoconuSmooth}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            PineApple and Coconut 
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:60 Kcal<br />
                                            <span>Protiens</span>: 0.6 Grams <br />
                                            <span className='fat'>Fat</span> : 0.6 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card18' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={SweekPotatoOrangeSmooth}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                        Sweetpotato & Orange 
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:70 Kcal<br />
                                            <span>Protiens</span>: 1 Grams <br />
                                            <span className='fat'>Fat</span> : 0.5 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card19' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={BerryYougutJuice}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name'>
                                            Berry Yougut Juice
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:70 Kcal<br />
                                            <span>Protiens</span>: 1-3 Grams <br />
                                            <span className='fat'>Fat</span> : 1-2 Grams <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className='card20' sx={{ width: 320, height: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        src={MilkHoneyJuice}
                                        alt="green iguana"
                                    />
                                    <CardContent className='cardcontent1'>
                                        <Typography className='fruit__name' >
                                        Milk Honey Juice
                                        </Typography>
                                        <Typography className='fruit__info'>
                                            <span>Quantity</span>: 100 ml <br />
                                            <span>Calories</span>:110 Kcal<br />
                                            <span>Protiens</span>: 3-5 Grams <br />
                                            <span className='fat'>Fat</span> : 3-5 Grams <br />
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                    </div>
                </div>
            }
            {option === "Weight loss" &&
                <div className='weightloss'>
                    <div className='heading'>
                        <h1 className='h1'>For Weight Loss</h1>
                        <p></p>
                    </div>
                    <div className='weight__loss__session' style={{ paddingTop: '2%' }}>
                        <div>
                            <div className='card__row1' style={{ display: 'flex', flexDirection: 'row' }}>
                                <Card className='card1' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea >
                                        <CardMedia className='card__img'
                                            component="img"
                                            height="180"
                                            src={Broccoli1}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name'>
                                                Broccoli
                                            </Typography>
                                            <Typography className='fruit__info' >
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 34 Kcal <br />
                                                <span>Protiens</span>: 2.8 Grams <br />
                                                <span className='fat'>Fat</span> : 0.4 Grams <br />




                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card2' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={califlower2}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Cauliflower
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 25 Kcal <br />
                                                <span>Protiens</span>: 1.9 Grams <br />
                                                <span className='fat'>Fat</span> : 0.3 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card3' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={BellPeppers3}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name'>
                                                Bell Peppers
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 31 Kcal <br />
                                                <span>Protiens</span>: 0.9 Grams <br />
                                                <span className='fat'>Fat</span> : 0.3 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card4' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={Cucumber}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Cucumber
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 16 Kcal <br />
                                                <span>Protiens</span>: 0.7 Grams <br />
                                                <span className='fat'>Fat</span> : 0.1 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className='card__row2' style={{ display: 'flex', flexDirection: 'row' }}>
                                <Card className='card5' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea >
                                        <CardMedia className='card__img'
                                            component="img"
                                            height="180"
                                            src={Spanish5}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Spanish
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <div className='fruit__info'>
                                                    <span>Quantity</span>: 100 Grams <br />
                                                    <span>Calories</span>: 23 Kcal <br />
                                                    <span>Protiens</span>: 2.9 Grams <br />
                                                    <span className='fat'>Fat</span> : 0.4 Grams <br />

                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card6' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={Kale6}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Kale
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 49 Kcal <br />
                                                <span>Protiens</span>: 2.9 Grams <br />
                                                <span className='fat'>Fat</span> : 0.4 Grams <br />


                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card7' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={SwissCard7}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Swiss Chard
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 19 Kcal <br />
                                                <span>Protiens</span>: 1.8 Grams <br />
                                                <span className='fat'>Fat</span> : 0.2 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card8' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={Tomatoes8}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Tomatoes
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 18 Kcal <br />
                                                <span>Protiens</span>: 0.9 Grams <br />
                                                <span className='fat'>Fat</span> : 0.2 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>

                            <div className='card__row4' style={{ display: 'flex', flexDirection: 'row' }}>
                                <Card className='card13' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea >
                                        <CardMedia className='card__img'
                                            component="img"
                                            height="180"
                                            src={Celery13}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name'>
                                                Celery
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 16 Kcal <br />
                                                <span>Protiens</span>: 0.7 Grams <br />
                                                <span className='fat'>Fat</span> : 0.1 Grams <br />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card14' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={Asparagus14}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Asparagus
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 20 Kcal <br />
                                                <span>Protiens</span>: 2.2 Grams <br />
                                                <span className='fat'>Fat</span> : 0.2 Grams <br />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card15' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={SalomonFish15}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Salomon Fish
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 Grams <br />
                                                <span>Calories</span>: 206 Kcal <br />
                                                <span>Protiens</span>: 25.6 Grams <br />
                                                <span className='fat'>Fat</span> : 10.9 Grams <br />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card16' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={ChiaSeeds16}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Chia Seeds
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 28 Grams <br />
                                                <span>Calories</span>: 138 Kcal <br />
                                                <span>Protiens</span>: 4.7 Grams <br />
                                                <span className='fat'>Fat</span> : 8.7 Grams <br />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className='card__row3' style={{ display: 'flex', flexDirection: 'row' }}>
                                <Card className='card9' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea >
                                        <CardMedia className='card__img'
                                            component="img"
                                            height="180"
                                            src={BeetrootJuice2}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Beetroot
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 44 Kcal <br />
                                                <span>Protiens</span>: 0.8 Grams <br />
                                                <span className='fat'>Fat</span> : 0.3 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card10' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={CucumberMintJuice3}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' style={{ marginLeft: '4%' }}>
                                                Cucumber Mint Juice
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 15 Kcal <br />
                                                <span>Protiens</span>: 0.4 Grams <br />
                                                <span className='fat'>Fat</span> : 0.1 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card11' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={LemonHoney4}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Lemon
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 70 Kcal <br />
                                                <span>Protiens</span>: 0.4 Grams <br />
                                                <span className='fat'>Fat</span> : 0 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card12' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={TomatoJuice5}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name'>
                                                Tomato Juice
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 17 Kcal <br />
                                                <span>Protiens</span>: 0.8 Grams <br />
                                                <span className='fat'>Fat</span> : 0.1 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className='card__row3' style={{ display: 'flex', flexDirection: 'row' }}>
                                <Card className='card9' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea >
                                        <CardMedia className='card__img'
                                            component="img"
                                            height="180"
                                            src={CarrotGingerJuice}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Carrot Ginger Juice
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 40 Kcal <br />
                                                <span>Protiens</span>: 0.5-1 Grams <br />
                                                <span className='fat'>Fat</span> : 0.4 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card10' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={WatermeloneJuice}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' style={{ marginLeft: '4%' }}>
                                                Watermelon Juice 
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 35 Kcal <br />
                                                <span>Protiens</span>: 0.5-1 Grams <br />
                                                <span className='fat'>Fat</span> : 0.4 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card11' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={GrapeFruitJuice}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name' >
                                                Grape Fruit Juice
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 50 Kcal <br />
                                                <span>Protiens</span>: 0.5-1 Grams <br />
                                                <span className='fat'>Fat</span> : 0.1-0.5 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className='card12' sx={{ width: 320, height: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            src={PineappleOrangeJuice}
                                            alt="green iguana"
                                        />
                                        <CardContent className='cardcontent1'>
                                            <Typography className='fruit__name'>
                                                Pineapple and orange
                                            </Typography>
                                            <Typography className='fruit__info'>
                                                <span>Quantity</span>: 100 ml <br />
                                                <span>Calories</span>: 40 Kcal <br />
                                                <span>Protiens</span>: 0.5-1 Grams <br />
                                                <span className='fat'>Fat</span> : 0.3 Grams <br />

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            }

            {option === "Fit" &&
                <div className='fit__section'>
                    <div>
                        <div className='breakfast__logo'>
                            <img src={Breakfast} />
                            <h1 className='img__matter'>Start Strong, Stay Stronger:<br /> Every bite is a step towards a healthier you!

                                <p className='mini__info'>
                                    Having a healthy FOOD is crucial for overall fitness and well-being. Here are some nutritious breakfast,
                                    lunch,Dinner and many more options that can help you stay fit:</p></h1>

                        </div>
                    </div>
                    <div className='logos' id="menubar">
                        <a className='breakfastlogo' href="#breakfast"><img src={BreakfastLogo} /></a>
                        <a className='lunchlogo' href="#lunch"><img src={LunchLogo} /> </a>
                        <a className='dinnerlogo' href="#dinner"><img src={DinnerLogo} /></a>



                    </div>
                    <div >
                        <div className='bf'>

                            <div className='breakfasts'><span style={{ fontFamily: '-moz-initial', marginLeft: '80%' }}>Time  :  8AM-10AM</span>
                                <div><h1 className='heading'>Breakfast</h1></div>

                                <div className='b1' >
                                    <img src={AvocadoToast} />
                                    <div>
                                        <p className='matter'><span>AVOCADO TOAST</span> are a powerhouse of nutrients, boasting high levels of vitamins C, E, K,
                                            and B-6, along with minerals like magnesium and potassium. They are also rich in healthy monounsaturated fats,
                                            which are known to promote heart health by lowering bad cholesterol levels.</p>

                                        <div className='reactbuttons'>


                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b2' >
                                    <img src={GreekYogurt} />
                                    <div>
                                        <p className='matter'><span>Greek yogurt </span>is high in calcium, which is important for strong bones and teeth.
                                            It also contains probiotics, which are beneficial
                                            bacteria that help maintain a healthy balance of gut flora. This can improve digestion and overall gut health.</p>

                                        <div className='reactbutton2'>
                                            <IconButton className='heartbutton2'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton2' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b3' >
                                    <img src={Quinoa} />
                                    <div>
                                        <p className='matter'><span>Quinoa Breakfast Bowl </span> is a complete protein, meaning it contains all nine
                                            essential amino acids necessary for optimal health. This makes it particularly beneficial for vegetarians and vegans who may struggle to get enough protein in their diets
                                            and help maintain stable blood sugar levels throughout the morning.</p>

                                        <div className='reactbuttons'>
                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b4' >
                                    <img src={OvernightOats} />
                                    <div>
                                        <p className='matter'><span>Over night Oats</span> are rich in soluble fiber,
                                            which can help improve digestion, regulate blood sugar levels, and promote a feeling of fullness, which may aid in weight management. Additionally, the fiber in oats can help lower
                                            cholesterol levels and reduce the risk of heart disease. </p>

                                        <div className='reactbuttons'>
                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b5' >
                                    <img src={ScrambledEgg} />
                                    <div>
                                        <p className='matter'><span>ScrambledEgg</span>are a good source of high-quality protein, which is important for muscle
                                            repair and growth, as well as for maintaining overall health. They also contain essential vitamins and minerals,
                                            including vitamin D, vitamin B12, selenium, and choline.
                                        </p>

                                        <div className='reactbuttons'>
                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b6' >
                                    <img src={Potato} />
                                    <div>
                                        <p className='matter'><span>sweet potatoes</span> are rich in vitamins, particularly vitamin A in the form of beta-carotene,
                                            which is important for eye health, immune function, and skin health. They also provide vitamin C, which is an antioxidant that helps protect
                                            cells from damage and supports the immune system. </p>

                                        <div className='reactbuttons'>
                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>
                                </div>
                                <div className='b7' >
                                    <img src={Pancake} />
                                    <div>
                                        <p className='matter'><span>Pancake</span> Made with whole grain flour, these pancakes are rich in dietary fiber,
                                            which is important for digestive health and can help you feel full and satisfied throughout the morning.
                                            Whole grains are also a good source of vitamins, minerals, and antioxidants. To enhance the nutritional value of whole grain pancakes, consider topping them with
                                            fresh fruits, nuts, or a drizzle of honey or maple syrup.</p>

                                        <div className='reactbuttons'>
                                            <IconButton className='heartbutton'>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <BookmarkBorderIcon className='savebutton' />
                                        </div>
                                    </div>

                                </div>
                                <div className='backbutton' >
                                    <a className='backtomenu' href="#menubar">Back to menu</a>
                                </div>






                            </div>

                        </div>

                    </div>
                    <div id="lunch">
                        <div className='lunch'><span style={{ fontFamily: '-moz-initial', marginLeft: '80%' }}>Time  :  12PM-2PM</span>

                            <div><h1 className='heading'>Lunch</h1></div>
                            <div className='l1' >
                                <img src={RiceWithCurry} />
                                <div>
                                    <p className='matter'><span>Rice with Curry</span> Rice is a versatile and widely consumed grain that provides a good source
                                        of energy due to its carbohydrate content. It is low in fat and naturally gluten-free, making it suitable for many dietary preferences. While white rice is lower in nutrients compared
                                        to brown rice, it still contains some essential vitamins and minerals.</p>
                                    <div className='reactbuttons'>


                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='l2' >
                                <img src={ChickenCaesarSalad} />
                                <div>
                                    <p className='matter'><span>Chicken Caesar salad  </span>offers a blend of nutritional benefits, making it a
                                        popular and well-rounded meal choice. The grilled chicken provides a lean source of protein, crucial for muscle repair and satiety. The salad's base of romaine lettuce is rich in
                                        vitamins A, C, and K, as well as folate and fiber, supporting overall health and digestion.</p>

                                    <div className='reactbutton2'>
                                        <IconButton className='heartbutton2'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton2' />
                                    </div>
                                </div>
                            </div>
                            <div className='l3' >
                                <img src={PowerBowl} />
                                <div>
                                    <p className='matter'><span>Power Bowl</span> is a nutritious meal option that combines a variety
                                        of ingredients to create a balanced and satisfying dish. Typically made with a base of whole grains
                                        like quinoa or brown rice,a protein source such as chicken, tofu, or beans, and a mix of vegetables and
                                        healthy fats like avocado or nuts, Power Bowls offer a range of health benefits.</p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='l4' >
                                <img src={FishCurry} />
                                <div>
                                    <p className='matter'><span>Fish curry </span>is a flavorful and nutritious dish that
                                        offers a range of health benefits. Rich in omega-3 fatty acids, fish like salmon, mackerel, and sardines can support heart health, reduce inflammation, and improve brain function. Fish is also a high-quality protein source, essential for muscle repair and growth. Additionally, fish is rich in vitamins and minerals such as vitamin D, vitamin B12,
                                        selenium, and iodine, important for immune function, metabolism, and thyroid health.  </p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='l5' >
                                <img src={LentilVegeSoup} />
                                <div>
                                    <p className='matter'><span>Lentil vegetable </span>soup is a nutritious and hearty dish with several health benefits. Lentils are a great source of plant-based protein and fiber, which can help keep you full and satisfied. They are also rich in folate, iron, and potassium, important nutrients for overall health. Vegetables like carrots, celery, and tomatoes add vitamins, minerals, and antioxidants to the soup.
                                    </p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='l6' >
                                <img src={ChickenSmashedPotato} />
                                <div>
                                    <p className='matter'><span>Chicken smashed potatoes</span> can be a tasty and satisfying dish, offering a balance of nutrients. Chicken provides a good source of protein, essential for muscle repair and growth. Potatoes, when eaten with the skin, are rich in vitamins and minerals, such as vitamin C, potassium, and B vitamins. However, the cooking method and added ingredients can impact the overall healthiness of the dish. For a healthier option, consider baking or grilling the chicken and using a small amount of olive oil or herbs for flavor. </p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='l7' >
                                <img src={BakedcodWithVegetables} />
                                <div>
                                    <p className='matter'><span>Baked cod with vegetables </span> is a nutritious and delicious
                                        dish that offers a range of health benefits. Cod is a lean source of protein that is rich in nutrients like
                                        vitamin B12, iodine, and omega-3 fatty acids, which are important for heart and brain health. Baking the cod helps retain its
                                        nutrients without adding extra fats, making it a healthy cooking method.
                                        The vegetables in the dish, such as bell peppers, zucchini, and tomatoes, provide vitamins, minerals, and antioxidants that support overall health. They also add fiber, which aids in digestion and helps keep you feeling full.</p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='backbutton' >
                                <a className='backtomenu' href="#menubar">Back to menu</a>
                            </div>

                            <div>

                            </div>

                        </div>




                    </div>

                    <div id="dinner">
                        <div className='dinner'><span style={{ fontFamily: '-moz-initial', marginLeft: '80%' }}>Time  :  7PM-9PM</span>
                            <div><h1 className='heading'>Dinner</h1></div>
                            <div className='d1' >
                                <img src={ApplesliceWithAlmond} />
                                <div>
                                    <p className='matter'><span>Apples slices with almonds</span> make for a nutritious and satisfying snack. Apples are a great source of fiber and vitamin C, while almonds provide healthy fats, protein, and fiber. This combination can help keep you
                                        feeling full and satisfied between meals. The fiber in both apples and almonds supports digestive health and can help regulate blood sugar levels</p>

                                    <div className='reactbuttons'>


                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='d2' >
                                <img src={ChamomileTea} />
                                <div>
                                    <p className='matter'><span>Chamomile tea</span>
                                        is a popular herbal tea known for its calming and soothing properties. It is commonly used to promote relaxation and improve sleep quality. Chamomile tea contains antioxidants that may help reduce inflammation and lower the risk of chronic diseases. It is also believed to aid digestion, reduce anxiety, and improve skin health.</p>

                                    <div className='reactbutton2'>
                                        <IconButton className='heartbutton2'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton2' />
                                    </div>
                                </div>
                            </div>
                            <div className='d3' >
                                <img src={Chapathi} />
                                <div>
                                    <p className='matter'><span> Chapathi</span>  also known as roti or phulka, is a type of Indian flatbread made from whole wheat flour. It is a staple food in many Indian households and is
                                        commonly served with curries, vegetables, or lentils. Chapathi is a nutritious food choice as it is made from whole wheat flour, which is rich in fiber, vitamins, and minerals. </p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='d4' >
                                <img src={MixedFruits} />
                                <div>
                                    <p className='matter'><span>Baked cod with vegetables </span>is a nutritious and flavorful dish that offers a variety of health benefits. Cod is a lean source of protein that is rich in essential nutrients like vitamin B12 and omega-3 fatty acids. These nutrients are important for heart health, brain function, and overall well-being.</p>

                                    <div className='reactbuttons'>
                                        <IconButton className='heartbutton'>
                                            <FavoriteBorder />
                                        </IconButton>
                                        <BookmarkBorderIcon className='savebutton' />
                                    </div>
                                </div>
                            </div>
                            <div className='backbutton' >
                                <a className='backtomenu' href="#menubar">Back to menu</a>
                            </div>




                            <div>

                            </div>






                        </div>
                    </div>

                </div>


            }
            {option === "Juices" &&
                <div>

                    <div className='juiceinfo'>

                    <div className='juicehead'>
                            <h1>Juice up your life with health in   <span style={{ color: 'orange' }}>every sip...</span></h1>
                            <p style={{marginLeft:'10%',fontSize:'20px'}}>Consistently drinking juices can help you achieve your health goals.juices can offer numerous benefits, including improved hydration, nutrient intake, and potentially enhanced immune function.
                            </p>
                        </div>
                        
                        <div className='img'>
                            <img className='actualimg' src={FruitImage} />
                        </div>

                    </div>
                    <hr />

                    <div className='juice'>
                        <div className='juice1'>
                            <div className='carrot'>
                                <img src={CarrotJuice} />
                            </div>
                            <div className='juicedata' >
                                <h3>Carrot Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleCarrotClick} >More</Button>
                                <Dialog open={iscarrotopen} onClose={handleCarrotClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure Carrot Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Carrot juice is high in vitamin A, which is essential for healthy vision, skin, and immune function. 
                                    It also contains vitamins C, K, and B vitamins, which play various roles in the body.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Boosts immunity</li>
                                        <li>Healthy Skin</li>
                                        <li>Weight Loss</li>
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCarrotClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                            </div>
                        </div>
                        <div className='juice2'>
                            <div className='apple'>
                                <img src={AppleJuice} />
                            </div>
                            <div className='juicedata' >
                                <h3>Apple Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleAppleClick}>More</Button>
                                <Dialog open={isappleopen} onClose={handleAppleClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure Apple Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Apple juice is a good source of vitamin C, which is important for immune function, skin health, and wound healing. It also contains small amounts of other vitamins and minerals, including potassium and vitamin K.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Hydration</li>
                                        <li>Healthy Digestive</li>
                                        <li>Boosts Immunity</li>
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleAppleClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                            </div>

                        </div>
                        <div className='juice3'>
                            <div className='beetroot'>
                                <img src={BeetRoot} />
                            </div>
                            <div className='juicedata' >
                                <h3>BeetRoot Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleBeetrootClick}>More</Button>
                                <Dialog open={isbeetrootopen} onClose={handleBeetrootClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure Apple Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Beetroot juice is high in vitamins and minerals, including vitamin C, vitamin B6, folate, potassium, and manganese. It also contains antioxidants and phytonutrients that contribute to its health benefits.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Exercise performance</li>
                                        <li>Liver health</li>
                                        <li>Digestive health</li>
                            
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleBeetrootClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>
                        </div>

                    </div>
                    <div className='juice'>
                        <div className='juice4'>
                            <div className='coconut'>
                                <img src={CoconutJuice} />
                            </div>
                            <div className='juicedata' >
                                <h3>Coconut Water</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleCoconutClick}>More</Button>
                                <Dialog open={iscoconutopen} onClose={handleCoconutClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Coconut Water</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Coconut water is an excellent source of hydration due to its high water content and electrolyte composition, which includes potassium, sodium, magnesium, and calcium. It can help replenish fluids and electrolytes lost through sweating and physical activity.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Electrolyte balance</li>
                                        <li>Heart health</li>
                                        <li>Digestive health</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCoconutClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                            
                        </div>
                        <div className='juice5'>
                            <div className='ginger'>
                                <img src={GingerLemonJuice} />
                            </div>
                            <div className='juicedatabeet'>
                            <h3>Ginger & Lemon Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleGingerClick}>More</Button>
                                <Dialog open={isgingeropen} onClose={handleGingerClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Ginger and Lemon Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Both ginger and lemon are known to aid digestion. Ginger can help reduce nausea, indigestion, and bloating, while lemon juice can stimulate the production of digestive enzymes.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Detoxification</li>
                                        <li>healthy skin</li>
                                        <li>Boosts Immunity support</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleGingerClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice6'>
                            <div className='kale'>
                                <img src={KaleJuice} />
                            </div>
                            <div className='juicedata' >
                                <h3>Kale Juice</h3>
                                <p>60-70 calories</p>
                            </div>

                            <div>
                                <Button className='more' onClick={handleKaleClick}>More</Button>
                                <Dialog open={iskaleopen} onClose={handleKaleClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure Apple Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Kale is packed with vitamins and minerals, including vitamin A, vitamin C, vitamin K, and manganese. Kale juice is an excellent way to boost your intake of these essential nutrients.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Bone health</li>
                                        <li>Weight management</li>
                                        <li>Anti-inflammatory effects</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleKaleClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                    </div>
                    <div className='juice'>
                        <div className='juice7'>
                            <div className='orange'>
                                <img src={OrangeJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>Orange Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleOrangeClick}>More</Button>
                                <Dialog open={isorangeopen} onClose={handleOrangeClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Orange Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Orange juice is an excellent source of vitamin C, which is important for immune function, skin health, and wound healing.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Kidney stone prevention</li>
                                        <li>May reduce inflammation</li>
                                        <li>Heart health</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleOrangeClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice8'>
                            <div className='spanish'>
                                <img src={SpanishJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>Spanish Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleSpanishClick}>More</Button>
                                <Dialog open={isspanishopen} onClose={handleSpanishClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Spinach Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Spinach is packed with vitamins and minerals, including vitamin A, vitamin C, vitamin K, folate, iron, and calcium. Drinking spinach juice is a convenient way to boost your intake of these essential nutrients.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Bone health</li>
                                        <li>Weight management</li>
                                        <li>Protects cells from damage</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleSpanishClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice9'>
                            <div className='berry'>
                                <img src={BerryJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>Berry Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleBerryClick}>More</Button>
                                <Dialog open={isberryopen} onClose={handleBerryClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Berry Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Berries are packed with antioxidants, such as anthocyanins and flavonoids, which help protect your cells from damage caused by free radicals and may reduce the risk of chronic diseases.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Improves brain function</li>
                                        <li>Digestive health</li>
                                        <li>Boosts Immunity</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleBerryClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>


                    </div>
                    <div className='juice'>
                        <div className='juice10'>
                            <div className='celery'>
                                <img src={CeleryJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>Celery Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleCeleryClick}>More</Button>
                                <Dialog open={isceleryopen} onClose={handleCeleryClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Celery Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Celery juice is high in water content, which can help keep you hydrated, especially when consumed first thing in the morning.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Improve Digestion</li>
                                        <li>Weight Loss</li>
                                        <li>Detoxification</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCeleryClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice11'>
                            <div className='cucumbermint'>
                                <img src={CucumberMintJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>cucumber mint juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleCucumberClick}>More</Button>
                                <Dialog open={iscucumberopen} onClose={handleCucumberClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Cucumber Mint Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Cucumber mint juice is high in water content, making it an excellent hydrating beverage, especially on hot days or after exercise.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Weight management</li>
                                        <li>Skin Health</li>
                                        <li>Reduces Stress</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCucumberClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice12'>
                            <div className='pineapple'>
                                <img src={PineappleJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>pineapple Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handlePineappleClick}>More</Button>
                                <Dialog open={ispineappleopen} onClose={handlePineappleClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure  Pineapple Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Pineapple juice is high in vitamin C, manganese, and vitamin B6, which are important for immune function, bone health, and metabolism<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Digestive aid</li>
                                        <li>Immune Support</li>
                                        <li>Reduce cancer risk</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handlePineappleClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                </div>
                            </div>
                    
                            


                    </div>
                    <div className='juice'>
                        <div className='juice10'>
                            <div className='celery'>
                                <img src={KarbujaJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>Karbuja Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleKarbujaClick}>More</Button>
                                <Dialog open={iskarbujaopen} onClose={handleKarbujaClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Karbuja Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Karbuja, also known as muskmelon or cantaloupe, is a good source of vitamins A and C, both of which are essential for maintaining healthy skin, vision, and immune function.
                                    <ul>
                                        <li>Improve Digestion</li>
                                        <li>Weight management</li>
                                        <li>Eye Health</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleKarbujaClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice11'>
                            <div className='cucumbermint'>
                                <img src={SugarCaneJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>SugarCane juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handleSugarcaneClick}>More</Button>
                                <Dialog open={issugarcaneopen} onClose={handleSugarcaneClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>SugarCane Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Sugarcane juice is a good source of various nutrients, including calcium, potassium, magnesium, and iron. It also contains vitamins A, C, B-complex, and antioxidants.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Boosts energy</li>
                                        <li>Liver Health</li>
                                        <li>Kidney Stress</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleSugarcaneClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                
                            </div>

                        </div>
                        <div className='juice12'>
                            <div className='pineapple'>
                                <img src={PapayaJuice} />
                            </div>
                            <div className='juicedata'>
                                <h3>papaya Juice</h3>
                                <p>60-70 calories</p>
                            </div>
                            <div>
                                <Button className='more' onClick={handlePapayaClick}>More</Button>
                                <Dialog open={ispapayaopen} onClose={handlePapayaClick}>
                                    <DialogTitle style={{ fontWeight:'200',fontSize:'30px',textDecoration:'underline',color:'black'}}>Pure  Papaya Juice</DialogTitle>
                                    <DialogContent style={{fontWeight:'500'}}> 
                                    Papaya juice is packed with essential nutrients such as vitamins A, C, and E, as well as folate, magnesium, and potassium. These nutrients are important for overall health and well-being.<br/><br/>
                                    Also Helps in
                                    <ul>
                                        <li>Anti-inflammatory Properties</li>
                                        <li>Eye health</li>
                                        <li>Skin health</li>
                                        
                                    </ul>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handlePapayaClose}>Close</Button>
                                    </DialogActions>

                                </Dialog>
                                </div>
                            </div>
                    
                            


                    </div>
                    



                </div>

            }
            </div>

        <div><CommonFooter/></div>
        </div>
    )
}

export default CommonFoodSession



















{/* <div>
                    <div className='images' >
                        <img src={Water} />
                        <p className='images__matter'>With an Empty stomach Starting your day with a glass of water is a simple yet powerful habit with numerous health benefits.
                        After a night's sleep, your body is dehydrated, and drinking water helps rehydrate your body and kickstart your metabolism.</p>
                    </div>
                    <div className='images' >
                        
                        <p className='images__matter'>With an Empty stomach Starting your day with a glass of water is a simple yet powerful habit with numerous health benefits.
                        After a night's sleep, your body is dehydrated, and drinking water helps rehydrate your body and kickstart your metabolism.</p>
                        <img src={ScrambledEgg} />
                    </div>
                    </div> */}