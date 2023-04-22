import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { BASE_URL,API_KEY, } from "../../constants/constants";
import './details.css'

export default function Details() {

  const [movieDetail, setMovieDetail] = useState({})

  const { id } = useParams();
  
  const navigate = useNavigate()

  const getData = async () => {

    const resp = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await resp.json()
    setMovieDetail(data)
    console.log(data);
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} />
      <div>
        <h2>{movieDetail.name || movieDetail.title}</h2>
        <p>release date: {movieDetail.release_date}</p>
        <p>status: {movieDetail.status}</p>
        <Link to="/">Vissza</Link>
      </div>

    </div>
  )
}
