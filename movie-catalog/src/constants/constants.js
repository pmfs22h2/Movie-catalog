// előző api keyhez tartozó accot töröltem, majd kell csinálni egy újat 
export const API_KEY = ""
export const BASE_URL = `https://api.themoviedb.org/3`
export const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const MOVIES_URL = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

/*


https://image.tmdb.org/t/p/w500$%7BimageUrl%7D

{
    "adult": false,
    "backdrop_path": "/alC1f1xw2Ovv9xMiIwXqWDEqnWr.jpg",
    "id": 130987,
    "name": "Dead Ringers",
    "original_language": "en",
    "original_name": "Dead Ringers",
    "overview": "Elliot and Beverly Mantle are twins who share everything: drugs, lovers, and an unapologetic desire to do whatever it takes — including pushing the boundaries on medical ethics — in an effort to challenge antiquated practices and bring women’s healthcare to the forefront.",
    "poster_path": "/3GZB7pnyAw6QV053TwxiqvRyOw3.jpg",
    "media_type": "tv",
    "genre_ids": [
        9648,
        18
    ],
    "popularity": 73.03,
    "first_air_date": "2023-04-20",
    "vote_average": 6.3,
    "vote_count": 7,
    "origin_country": [
        "US"
    ]
}
*/