import { useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies";

function Detail() {
    const [loading, setLoading] =  useState(true);
    const [details, setDetails] = useState([]);
    const {id} = useParams();
    // await은 async 안에 있어야만 쓸 수 있다.
    const getMovie = useCallback(async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false); 
    }, [id]);
    useEffect(() => {
        getMovie()
    }, [getMovie]);
    console.log(details);

    return (
        <div>
            {loading ? (
                <h1>Loading details...</h1>
            ) : (
                <div>
                    <h1>Detail</h1>
                    <Movies
                        key={details.id}
                        id={details.id}
                        coverImg={details.medium_cover_image}
                        title={details.title}
                        summary={details.summary}
                        genres={details.genres}
                    />
                    <p> 평점 : {details.rating}</p>
                    <p> 언어 : {details.language} </p>
                    <p> 상영시간 : {details.runtime}분 </p>
                </div>
            )}
        </div>
    );
}
export default Detail;


// 1. loading 넣기
// 2. movies를 state에 올리기
// 3. detail 보여주기
// 4. 네비게이션 바 - home, admin 페이지 넣기

// #Callenge!
// 1. home에서 해줬던 로딩을 detail 화면에 해주기 -> OK
// 2. movie를 state에 넣기 (api에서 받아온 json을 state에 넣기) -> OK
// 3. return에서 영화의 detail(상세 정보) 보여주기 -> OK

