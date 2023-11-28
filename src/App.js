import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<div></div>}/>
                <Route path={':id'} element={<div></div>}/>
            </Route>
        </Routes>
    );
}

export default App;
