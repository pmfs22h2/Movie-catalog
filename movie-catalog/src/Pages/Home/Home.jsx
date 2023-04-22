import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TRENDING_URL, SEARCH_URL } from "../../constants/constants"
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail";
import './home.css'
export default function Home() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("");
    const [movieList, setMovieList] = useState({
        results: []
    })


    const searchMovie = async () => {
        const searched = searchParams.get("search");
        if(!searched) return;
        const res = await fetch(`${SEARCH_URL}${searched}`);
        const data = await res.json()
        setMovieList(data);
    }



    const getData = async () => {

        const res = await fetch(`${TRENDING_URL}`);
        const data = await res.json()

        setMovieList(data)

    }
    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        searchMovie();
    }, [searchParams])

    const searchHandler = (event) => {
        setSearchValue(event.target.value);
        setSearchParams({...searchParams, search: event.target.value});
        if(!event.target.value) getData();
    }

    return (
        <div>
            <h1>Movies</h1>
            <input type="text" value={searchValue} onChange={searchHandler} />
            <div className="movies">
                {movieList.results.map(movie => <MovieThumbnail key={movie.id} movieData={movie} />)}
            </div>
        </div>
    )
}