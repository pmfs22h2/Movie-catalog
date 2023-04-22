import { useEffect, useState } from "react";
import { TRENDING_URL } from "../../constants/constants"
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail";
import './home.css'
export default function Home() {

    const [movieList, setMovieList] = useState({
        results: []
    })

    const getData = async () => {

        const res = await fetch(`${TRENDING_URL}`);
        const data = await res.json()
        console.log(data)

        setMovieList(data)

    }
    console.log(TRENDING_URL)
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>Movies</h1>
            <div className="movies">
                {movieList.results.map(movie => <MovieThumbnail key={movie.id} movieData={movie} />)}
            </div>
        </div>
    )
}