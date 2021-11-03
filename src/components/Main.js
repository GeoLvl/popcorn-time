import React from "react";





function Main(){

    const moviesArr = [
        {
            id: 1,
            title: "Forest Gump",
            rating: "9"
        },
        {
            id: 2,
            title: "The Game",
            rating: "10"
        },
        {
            id: 3,
            title: "Will Hunting",
            rating: "8"
        },
    ]

    function renderMovies(){
        let someJsx = [] ;
        moviesArr.forEach(movie => {
            someJsx.push(<div>Title: {movie.title}</div>)
        });
        return someJsx    
    }

    return (
        <>
            {moviesArr.map((movie) =>{
                return (<div>
                            <h2>{movie.title}</h2> 
                            Rating: {movie.rating}
                        </div>);
            })}        
        </>

    );
    
}

export default Main;