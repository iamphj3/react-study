import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './Movies.module.css'

function Movies({ id, coverImg, title, year, summary, genres } ) {
    return (<div className={styles.movies}>
        <img src={coverImg} alt={title} className={styles.movies_img}>

        </img>
        <h2 className={styles.movies_title}>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movies_year}>
            {year}
        </p>
        <ul className={styles.movies_genres}>
            {genres.map((genre) => (
                <li key={genre}>{genre}</li>
            ))}
        </ul>
        <p className={styles.movies_summary}>
            {/* summary 최대 235자 자르기 */}
            {summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}
        </p>
    </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;