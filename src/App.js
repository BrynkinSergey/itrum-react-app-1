import "./App.scss";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<div>index</div>}/>
            <Route path={':id'} element={<div></div>}/>
        </Route>
    </Routes>
  );
}

export default App;
