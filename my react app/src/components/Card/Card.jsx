import styles from './Card.module.css'
import Button from '../Button/Button.jsx'
import PropTypes from 'prop-types'

function Card(props){
    let cardTitle = props.title;
    let imgSrc = "https://via.placeholder.com/200"
    let cardDescription = "Loading..."
    let cardClass = styles.cardImage

   if (props.isLoggedIn){
        cardDescription = "Welcome";
        cardClass = styles.cardImage;
   } else {
        cardDescription = "Please sign in."
        cardClass = styles.cardImage2;
   }

    return(
        <div className={styles.card}>
            <img className={cardClass} src={imgSrc} alt="Card Image" />
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <Button className={styles.button} name="Count: "></Button>
            <p className={styles.cardDescription}>{cardDescription}</p>
        </div>
    );
}

Card.proptypes = {
    isLoggedIn  : PropTypes.bool,
    title       : PropTypes.string,
    description : PropTypes.string
}

Card.defaultProps = {
    isLoggedIn : false,
    title: "Loading...",
    description: "Loading..."
}

export default Card;