import { Link } from "react-router-dom";
import './moviethumbnail.css'

export default function MovieThumbnail({ movieData }) {
    return (
        <Link className="thumbnail" to={`/details/${movieData.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}></img>
            <h2>{movieData.title || movieData.name}</h2>
        </Link>
    )
}