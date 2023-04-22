import { Link } from "react-router-dom";

export default function MovieThumbnail({ movieData }) {
    return (
        <Link className="thumbnail" to="">
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}></img>
            <p>{movieData.title || movieData.name}</p>
        </Link>
    )
}