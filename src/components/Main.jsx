import React, { useState } from 'react'
import '../styles/style.css'
import Home from './Home'
export default function Main() {
    const [displayfilms, setdisplayfilms] = useState(false);
    const [films, setfilms] = useState([]);
    const filmBtnHandler = () => {
        setdisplayfilms(true);
    }

    const fetchFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films');
        const allFilms = await res.json();
        setfilms(allFilms);
    }

    if (displayfilms){
        fetchFilms();
        return (
            <>
                <Home filmBtnHandler = {filmBtnHandler}/>
                <div className="container-sm">
                <div className="row justify-content-between mt-4">
                    {
                        films.map(film => 
                            (   

                                <div className="card col-4 mb-5" key={film.id}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><h4>{film.title}</h4></li>
                                        <li className="list-group-item">{film.original_title}</li>
                                        <li className="list-group-item">Directed by:   {film.director}</li>
                                        <li className="list-group-item">Produce by:   {film.producer}</li>
                                        <li className="list-group-item">Released in:   {film.release_date}</li>
                                        <li className="list-group-item">Rotten Tomato Score:   {film.rt_score > 70 ? <span style = {{color: "green"}}>{film.rt_score}</span> : 
                                                                                               <span style = {{color: "red"}}>{film.rt_score}</span>}</li>
                                        <li className="list-group-item">{film.description}</li>
                                    </ul>
                                </div>
                            )
                        )
                    }
                   
                </div>

                </div>

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
