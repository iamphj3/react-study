import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import styles from './Home.module.css'

function Home() {
    const [loading, setLoading] =  useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false); 
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className={styles.container}> 
            {loading ? (
                <div className={styles.loader}> 
                    <h1>loading..</h1>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => ( 
                        <Movies
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            genres={movie.genres}
                        /> 
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;