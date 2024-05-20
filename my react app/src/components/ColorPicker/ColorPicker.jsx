import styles from './ColorPicker.module.css'
import React, {useState} from 'react'

function ColorPicker(){

    var [color, setColor] = useState("#FFFFFF");

    function changeColor(event){
        setColor(event.target.value)
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Color Picker</h1>

            <div className={styles.colorDisplay} style={{backgroundColor:color}}>
                <p className={styles.colorTitle}>Selected Color: {color}</p>
            </div>
            <input type="color" name="color-select" id="color-select" onChange={changeColor} />
        </div>
    )
}

export default ColorPicker;