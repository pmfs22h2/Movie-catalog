import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TRENDING_URL, SEARCH_URL } from "../../constants/constants"
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail";
import './home.css'
import Paginator from "../../components/Paginator/paginator";
export default function Home() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("");
    const [movieList, setMovieList] = useState({
        results: []
    })
    const [currentPage, setCurrentPage] = useState(1);


    const searchMovie = async () => {
        const searched = searchParams.get("search");
        if (!searched) return;
        const res = await fetch(`${SEARCH_URL}${searched}`);
        const data = await res.json()
        setMovieList(data);
    }



    const getData = async () => {

        const res = await fetch(`${TRENDING_URL}&page=${currentPage}`);
        const data = await res.json()
        console.log(data)
        setMovieList(data)

    }

    useEffect(() => {
        getData();

    }, [])

    useEffect(() => {
        searchMovie();
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), page: 1 })
    }, [searchParams])

    const searchHandler = (event) => {
        setSearchValue(event.target.value);
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), search: event.target.value });
        if (!event.target.value) getData();
    }

    return (
        <div>
            <h1>Movies</h1>
            <input type="text" value={searchValue} onChange={searchHandler} />
            <div className="movies">
                {movieList.results.map(movie => <MovieThumbnail key={movie.id} movieData={movie} />)}
            </div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={movieList.total_pages}/>
        </div>
    )
}