import React from "react";
import styles from "../styles/card.module.css"

export default function Card(props) {
    return(
        <div className={styles.card}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.divText}>
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>
            { props.image &&
                <img src={props.image} alt={props.title} className={styles.image}/>
            }
            <button className={styles.button} onClick={props.onClick}>Plus d'information</button>
        </div>
    )
}