import React, { useState } from 'react'
import '../styles/style.css'
import Home from './Home'
export default function Main() {
    const [films, setfilms] = useState({
        displayFilms: false
    });

    const filmBtnHandler = () => {
        setfilms({
            displayFilms: !films.displayFilms
        })
    }

    if (films.displayFilms){
        return (
            <>
                <Home filmBtnHandler = {filmBtnHandler}/>
            </>
        )
    }
    else{

        return (
            <>
                <Home filmBtnHandler = {filmBtnHandler}/>
            </>
        )

    }
}
