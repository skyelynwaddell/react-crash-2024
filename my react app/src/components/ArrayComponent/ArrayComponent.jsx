import styles from './ArrayComponent.module.css'
import React, {useState} from 'react'

function ArrayComponent(){

    var [foods, setFoods] = useState([
        "Apple",
        "Orange",
        "Banana"
    ])

    function addFood(){
        let newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        //setFoods([...foods,newFood])
        setFoods(_foods => [..._foods, newFood])
    }

    function removeFood(index){
        setFoods(foods.filter((_,i) => i !== index))
    }


    return(
        <div className={styles.container}>
            <h1>Food Crud</h1>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => removeFood(index)}>
                        {food}
                    </li>
                )}
                
                <input type="text" name="foodInput" id="foodInput" placeholder='Enter food name' />
                <button onClick={addFood}>Add Food</button>
            </ul>
        </div>
    )
}

export default ArrayComponent;