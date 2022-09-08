import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function Movie() {
    return (<Router>
        {/* 한 번에 하나의 route만 렌더링하기 위해 Routes 사용 (이전 버전 : switch) */}
        <Routes>
            {/* :id -> 변수 !! */}
            <Route path="/movie/:id" element={<Detail />}>
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
            </Route>
        </Routes>
    </Router>
    );
}
export default Movie;