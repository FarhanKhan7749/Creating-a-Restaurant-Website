import React from "react";
// import PlayButton from "../Cart/PlayButtonIcon";
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h1>Delicious food, Delivered to you</h1>
            {/* <div className={classes.playButton}>
                <PlayButton />
            </div> */}
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
                lunch or diat home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
                experienced chefs!</p>
        </section>
    )
}

export default MealsSummary;