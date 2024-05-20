import styles from './ArrayOfObjects.module.css'
import React, {useState} from 'react'

function ArrayOfObjects(){

    var [cars, setCars] = useState([]);
    var [carYear, setCarYear] = useState(new Date().getFullYear());
    var [carMake, setCarMake] = useState("");
    var [carModel, setCarModel] = useState("");
    let index;

    function addCar(){

        const newCar = {
            year  : carYear,
            make  : carMake,
            model : carModel
        }

        //setCars(cars => [...cars, newCar]);
        setCars(_cars => [..._cars, newCar]);
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function removeCar(index){
        setCars(_cars => _cars.filter((_,i) => i !== index))
    }

    function changeYear(event){

        setCarYear(event.target.value);

    }

    function changeMake(event){
        setCarMake(event.target.value);

    }

    function changeModel(event){
        setCarModel(event.target.value);

    }
    
    return(
        <div className={styles.container}>
            <h1>Array of Objects</h1>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} placeholder='Car Year' name="" id="carYear" onChange={changeYear} />
            <input type="text" value={carMake} placeholder='Car Make' name="" id="carMake" onChange={changeMake} />
            <input type="text" value={carModel} placeholder='Car Model' name="" id="carModel" onChange={changeModel} />
            <br />
            <button className='btn btn-primary' onClick={addCar}>Add Car</button>
        </div>
    )
}

export default ArrayOfObjects;