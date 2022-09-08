import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    // await은 async 안에 있어야만 쓸 수 있다.
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie()
    }, []);
    console.log(id);
    return <h1>Detail</h1>
}
export default Detail;


// 1. loading 넣기
// 2. movies를 state에 올리기
// 3. detail 보여주기
// 4. 네비게이션 바 - home, admin 페이지 넣기

// #Callenge!
// 1. detail 화면에 로딩 넣기
// 2. movie를 state에 넣기 (api에서 받아온 json을 state에 넣기)
// 3. return에서 영화의 detail(상세 정보) 보여주기

