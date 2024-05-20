import styles from './Button.module.css'
import React, {useState} from 'react'

function Button(props){

    var [count, setCount] = useState(0);

    function updateCount(count){
        return count + 1;
    }

    const click = (e) => {
        setCount(_count => updateCount(_count));
        setCount(_count => updateCount(_count));
        //e.target.textContent = `Count: ${count}`;
        console.log(e);
    }

   
    return(
        //<button onClick={click} className="btn btn-danger">{props.name}</button>
        <button onClick={(e) => click(e)} className="btn btn-danger">{props.name} {count}</button>
    )
}

export default Button;