import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PromotionPage from "./pages/PromotionPage/PromotionPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<PromotionPage/>}/>
                <Route path={':id'} element={<div></div>}/>
            </Route>
        </Routes>
    );
}

export default App;
