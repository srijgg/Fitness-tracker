import React from 'react';
function AppControlsInput({ meals, deleteMealHandler, total, addMealsHandler, mealName, calories, setMealName, setCalories }) {

    const addMealsClick = () => {
        addMealsHandler();
    }
    return (

        <div>
        <div> <div className='app__controls'>
{/* total calories */}
            <div className='app__controls__counter' style={{}}>
                <div><h3>Total calories:<span style={{ color: 'red' }}>{total}</span></h3></div>
            </div>
{/* Input fields */}
            <div className='app__controls__input'>
                <input type='text' placeholder='Meals' value={mealName} onChange={(e) => setMealName(e.target.value)} /><br />
                <input type='number' placeholder='Calories' value={calories} onChange={(e) => setCalories(e.target.value)} min={0} /><br />

                <button onClick={addMealsClick} onChange={(e) => setCalories(e.target.value)}>Add Meal</button>
            </div>
        </div>
            <div>
{/* meals list */}
                <div className='app__meals__container__wrapper'>
                    {
                        meals.map((meal,index) => {
                            return (
                                <div key={index} className='app__meals__container__wrapper__inner'>
                                    <div> {`${meal.mealName} :${meal.calories} `}</div>
                                    <div>
                                        <button className='btn__delete__meals'
                                            onClick={() => deleteMealHandler(meal.id)}>Delete</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div></div>
        </div>
    )
                }
    



export default AppControlsInput