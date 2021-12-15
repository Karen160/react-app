import React from "react";
import styles from "../styles/card.module.css"

export default function Card(props) {
    return(
        <div className={styles.card}>
            <h3 className={styles.title}>{props.title}</h3>
            <p>{props.desc}</p>
            { props.image &&
                <img src={props.image} alt={props.title} className={styles.image}/>
            }
            <p>{props.price}</p>
            <button className={styles.button} onClick={props.onClick}>Plus d'info</button>
        </div>
    )
}