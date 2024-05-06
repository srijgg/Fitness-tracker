import React from 'react'

function FoodSessionDropDown() {
    const [food, setFood] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (event) => {
        setFood(event.currentTarget);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setFood(null);
    };

    const handleClose = () => {
        setFood(null);
    };
  return (
    <div>FoodSessionDropDown</div>
  )
}

export default FoodSessionDropDown