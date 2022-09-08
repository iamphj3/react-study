import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function Movie() {
    return (<Router>
        {/* 한 번에 하나의 route만 렌더링하기 위해 Routes 사용 (이전 버전 : switch) */}
        <Routes>
            <Route path="/movie" element={<Detail />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
        </Routes>
    </Router>
    );
}
export default Movie;