import React from "react";


function Movie(props){
    return (
        <div className="box">
            <h2 >{props.title}</h2>
            <p>year: {props.year}</p>
            <p>rating: {props.rating}</p>
        </div>
        
    )
}

export default Movie;