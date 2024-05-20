import styles from './ObjectComponent.module.css'
import React, {useState} from 'react'

function ObjectComponent(){

    var [player, setPlayer] = useState({
        name: "default",
        email: "test@email.com",
        age: 25,
    })

   function changeName(event) {
        setPlayer(_player => ({
            ...player,
            name : event.target.value
        })
    )}

   function changeEmail(event) {
        setPlayer(_player => ({
            ...player,
            email : event.target.value
        })
    )}

   function changeAge(event) {
        setPlayer(_player => ({
            ...player,
            age : event.target.value
        })
    )}

    return(
        <fieldset className={styles.container}>
            <h1>Username: {player.name}</h1>
            <h1>Email: {player.email}</h1>
            <h1>Age: {player.age}</h1>

            <input type="text" placeholder={player.name} onChange={changeName}/>
            <input type="email" placeholder={player.email} onChange={changeEmail} />
            <input type="number" placeholder={player.age} onChange={changeAge} />
        </fieldset>
    )

}

export default ObjectComponent;